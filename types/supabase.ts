export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          amount_due: string | null
          amount_paid: string
          created_time: string
          currency: string
          email: string
          id: number
          invoice_id: string
          status: string
          subscription_id: string
          user_id: string | null
        }
        Insert: {
          amount_due?: string | null
          amount_paid: string
          created_time?: string
          currency: string
          email: string
          id?: number
          invoice_id: string
          status: string
          subscription_id: string
          user_id?: string | null
        }
        Update: {
          amount_due?: string | null
          amount_paid?: string
          created_time?: string
          currency?: string
          email?: string
          id?: number
          invoice_id?: string
          status?: string
          subscription_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: string
          created_time: string
          currency: string
          customer_details: string
          email: string
          id: number
          payment_date: string
          payment_intent: string
          payment_time: string
          stripe_id: string
          user_id: string
        }
        Insert: {
          amount: string
          created_time?: string
          currency: string
          customer_details: string
          email: string
          id?: number
          payment_date: string
          payment_intent: string
          payment_time: string
          stripe_id: string
          user_id: string
        }
        Update: {
          amount?: string
          created_time?: string
          currency?: string
          customer_details?: string
          email?: string
          id?: number
          payment_date?: string
          payment_intent?: string
          payment_time?: string
          stripe_id?: string
          user_id?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_time: string
          default_payment_method_id: string | null
          email: string
          end_date: string | null
          id: number
          plan_id: string
          start_date: string
          status: string
          stripe_user_id: string
          subscription_id: string
          user_id: string
        }
        Insert: {
          created_time?: string
          default_payment_method_id?: string | null
          email: string
          end_date?: string | null
          id?: number
          plan_id: string
          start_date: string
          status: string
          stripe_user_id: string
          subscription_id: string
          user_id: string
        }
        Update: {
          created_time?: string
          default_payment_method_id?: string | null
          email?: string
          end_date?: string | null
          id?: number
          plan_id?: string
          start_date?: string
          status?: string
          stripe_user_id?: string
          subscription_id?: string
          user_id?: string
        }
        Relationships: []
      }
      subscriptions_plans: {
        Row: {
          amount: string
          created_time: string
          currency: string
          description: string
          id: number
          interval: string
          name: string
          plan_id: string
        }
        Insert: {
          amount: string
          created_time?: string
          currency: string
          description: string
          id?: number
          interval: string
          name: string
          plan_id: string
        }
        Update: {
          amount?: string
          created_time?: string
          currency?: string
          description?: string
          id?: number
          interval?: string
          name?: string
          plan_id?: string
        }
        Relationships: []
      }
      user: {
        Row: {
          created_time: string
          email: string
          first_name: string | null
          gender: string | null
          id: number
          last_name: string | null
          profile_image_url: string | null
          subscription: string | null
          user_id: string
        }
        Insert: {
          created_time?: string
          email: string
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          profile_image_url?: string | null
          subscription?: string | null
          user_id: string
        }
        Update: {
          created_time?: string
          email?: string
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          profile_image_url?: string | null
          subscription?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
