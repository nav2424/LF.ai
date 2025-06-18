import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey && supabaseUrl !== "" && supabaseAnonKey !== "")
}

export function getSiteURL(): string {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/"

  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`
  return url
}

export function getDomainInfo() {
  const currentUrl = getSiteURL().slice(0, -1) // Remove trailing slash
  const isLocalhost = currentUrl.includes("localhost")
  const needsSupabaseUpdate = !isLocalhost && isSupabaseConfigured()

  return {
    currentUrl,
    isLocalhost,
    needsSupabaseUpdate,
  }
}

export interface User {
  id: string
  email: string
  user_metadata: {
    full_name?: string
    avatar_url?: string
  }
  app_metadata: Record<string, any>
  aud: string
  created_at: string
  updated_at: string
  email_confirmed_at?: string
  last_sign_in_at?: string
  role?: string
}

// Server-side client for admin operations
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Create a functional mock client for demo mode
const createMockClient = () => ({
  auth: {
    getSession: async () => ({
      data: {
        session: {
          user: {
            id: "demo-user-123",
            email: "demo@launchflow.ai",
            user_metadata: {
              full_name: "Demo User",
            },
          },
        },
      },
      error: null,
    }),
    signUp: async (credentials: any) => ({
      data: {
        user: {
          id: "demo-user-123",
          email: credentials.email,
          user_metadata: {
            full_name: credentials.options?.data?.full_name || "Demo User",
          },
        },
      },
      error: null,
    }),
    signInWithPassword: async (credentials: any) => ({
      data: {
        user: {
          id: "demo-user-123",
          email: credentials.email,
          user_metadata: {
            full_name: "Demo User",
          },
        },
      },
      error: null,
    }),
    signOut: async () => ({ error: null }),
    getUser: async () => ({
      data: {
        user: {
          id: "demo-user-123",
          email: "demo@launchflow.ai",
          user_metadata: {
            full_name: "Demo User",
          },
        },
      },
      error: null,
    }),
    onAuthStateChange: (callback: any) => {
      // Simulate auth state change for demo
      setTimeout(() => {
        callback("SIGNED_IN", {
          user: {
            id: "demo-user-123",
            email: "demo@launchflow.ai",
            user_metadata: {
              full_name: "Demo User",
            },
          },
        })
      }, 100)
      return { data: { subscription: { unsubscribe: () => {} } } }
    },
    resend: async () => ({
      error: null,
    }),
    exchangeCodeForSession: async () => ({
      data: { session: null },
      error: null,
    }),
  },
  from: (table: string) => ({
    select: (columns?: string) => ({
      eq: (column: string, value: any) => ({
        single: async () => ({
          data: getMockData(table, column, value),
          error: null,
        }),
        limit: (count: number) => ({
          then: async (callback: any) => {
            const data = Array.from({ length: Math.min(count, 5) }, (_, i) => getMockData(table, "id", `${table}-${i}`))
            return callback({ data, error: null })
          },
        }),
      }),
      then: async (callback: any) => {
        const data = Array.from({ length: 3 }, (_, i) => getMockData(table, "id", `${table}-${i}`))
        return callback({ data, error: null })
      },
    }),
    insert: async (data: any) => ({
      data: Array.isArray(data)
        ? data.map((item, i) => ({ ...item, id: `${table}-${Date.now()}-${i}` }))
        : [{ ...data, id: `${table}-${Date.now()}` }],
      error: null,
    }),
    update: async (data: any) => ({
      data: [{ ...data, id: `${table}-${Date.now()}` }],
      error: null,
    }),
    upsert: async (data: any) => ({
      data: Array.isArray(data)
        ? data.map((item, i) => ({ ...item, id: `${table}-${Date.now()}-${i}` }))
        : [{ ...data, id: `${table}-${Date.now()}` }],
      error: null,
    }),
  }),
})

// Mock data generator
const getMockData = (table: string, column: string, value: any) => {
  const baseData = {
    id: `${table}-${Date.now()}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  switch (table) {
    case "profiles":
      return {
        ...baseData,
        email: "demo@launchflow.ai",
        full_name: "Demo User",
        avatar_url: null,
      }
    case "user_goals":
      return {
        ...baseData,
        user_id: "demo-user-123",
        current_goal: "Launch SaaS Business",
        current_step: "Strategy Development",
        skills: ["Web Development", "Marketing", "Design"],
        niche: "Productivity Tools",
        target_audience: "Small Business Owners",
        income_goal: 5000,
        business_roadmap: {
          marketAnalysis: "High demand in productivity niche",
          productIdeas: ["Task Manager", "Time Tracker", "Team Dashboard"],
          revenueProjection: "$5,000/month within 6 months",
        },
      }
    case "projects":
      return {
        ...baseData,
        user_id: "demo-user-123",
        name: "Productivity Dashboard",
        type: "landing_page",
        status: "active",
        content: {
          title: "Revolutionary Productivity Dashboard",
          features: ["Smart automation", "Real-time analytics"],
          conversionRate: "4.7%",
        },
      }
    case "marketing_campaigns":
      return {
        ...baseData,
        user_id: "demo-user-123",
        name: "Product Launch Campaign",
        type: "twitter",
        content: {
          text: "🚀 Just launched my productivity dashboard!",
          hashtags: ["#productivity", "#startup"],
          estimatedReach: 2500,
        },
        performance_data: {
          impressions: 1250,
          clicks: 89,
          conversions: 12,
        },
      }
    default:
      return baseData
  }
}

// Initialize Supabase client or mock client
export const supabaseAdmin =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : createMockClient()
