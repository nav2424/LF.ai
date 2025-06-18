import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    // Test database connection
    const { data, error } = await supabase.from("profiles").select("count").limit(1)

    if (error) throw error

    return NextResponse.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: "connected",
      version: "1.0.0",
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: "Database connection failed",
      },
      { status: 500 },
    )
  }
}
