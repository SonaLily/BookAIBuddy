"server only";
import { userUpdateProps } from "@/utils/types";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const userUpdate = async ({
  email,
  first_name,
  last_name,
  profile_image_url,
  user_id,
}: userUpdateProps) => {
  const cookieStore = await cookies();

  console.log('Updating user with data:', { email, first_name, last_name, profile_image_url, user_id });

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
    const { data: existingUser, error: checkError } = await supabase
      .from("user")
      .select()
      .eq("email", email)
      .single();

    if (checkError) {
      console.error('Error checking user:', checkError);
      return { error: 'User not found' };
    }

    const { data, error } = await supabase
      .from("user")
      .update([
        {
          email,
          first_name,
          last_name,
          profile_image_url,
          user_id,
        },
      ])
      .eq("email", email)
      .select();

    if (error) {
      console.error('Error updating user:', error);
      return { error };
    }

    console.log('Update successful:', data);
    return { data };
  } catch (error: any) {
    console.error('Unexpected error:', error);
    throw new Error(error.message);
  }
};
