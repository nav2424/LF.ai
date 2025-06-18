import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 })
    }

    // Get user profile
    const { data: profile, error: profileError } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (profileError) throw profileError

    // Get user goals
    const { data: goals, error: goalsError } = await supabase
      .from("user_goals")
      .select("*")
      .eq("user_id", userId)
      .single()

    // Get projects count
    const { count: projectsCount } = await supabase
      .from("projects")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)

    // Get campaigns count
    const { count: campaignsCount } = await supabase
      .from("marketing_campaigns")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)

    return NextResponse.json({
      success: true,
      data: {
        profile,
        goals: goals || null,
        stats: {
          projects: projectsCount || 0,
          campaigns: campaignsCount || 0,
        },
      },
    })
  } catch (error) {
    console.error("Profile fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId, ...updates } = await request.json()

    const { data, error } = await supabase
      .from("profiles")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)
      .select()

    if (error) throw error

    return NextResponse.json({ success: true, profile: data[0] })
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
  }
}
