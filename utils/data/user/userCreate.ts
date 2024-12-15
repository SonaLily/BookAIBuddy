"server only"

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { userCreateProps } from "@/utils/types";

export const userCreate = async ({
  email,
  first_name,
  last_name,
  profile_image_url,
  user_id,
}: userCreateProps) => {
  // Log input data
  console.log('Attempting to create user with:', {
    email,
    first_name,
    last_name,
    profile_image_url,
    user_id,
  });

  const cookieStore = await cookies();

  // Verify environment variables
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
    console.error('Missing environment variables:', {
      hasUrl: !!process.env.SUPABASE_URL,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_KEY,
    });
    throw new Error('Missing Supabase configuration');
  }

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  try {
    // Test connection first
    const { error: testError } = await supabase
      .from("user")
      .select("*")
      .limit(1);

    if (testError) {
      console.error('Database connection test failed:', testError);
      return { error: 'Database connection failed' };
    }

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("user")
      .select()
      .eq("email", email)
      .single();

    if (existingUser) {
      console.warn('User already exists:', email);
      return { error: 'User already exists' };
    }

    // Attempt to create user
    const { data, error } = await supabase
      .from("user")
      .insert([
        {
          email,
          first_name,
          last_name,
          profile_image_url,
          user_id,
        },
      ])
      .select();

    console.log("Insert result:", { data, error });

    if (error) {
      console.error('Failed to create user:', error);
      return { error };
    }

    console.log("User created successfully:", data);
    return { data };
  } catch (error: any) {
    console.error('Unexpected error during user creation:', error);
    throw new Error(error.message);
  }
};
