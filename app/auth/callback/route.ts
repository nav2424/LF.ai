import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const error = requestUrl.searchParams.get("error")
  const errorDescription = requestUrl.searchParams.get("error_description")

  if (error) {
    console.error("Auth callback error:", error, errorDescription)
    return NextResponse.redirect(new URL(`/auth?error=${encodeURIComponent(errorDescription || error)}`, request.url))
  }

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    try {
      const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

      if (exchangeError) {
        console.error("Code exchange error:", exchangeError)
        return NextResponse.redirect(new URL(`/auth?error=${encodeURIComponent(exchangeError.message)}`, request.url))
      }

      if (data.session) {
        // Create user profile if it doesn't exist
        const { error: profileError } = await supabase.from("profiles").upsert({
          id: data.user.id,
          email: data.user.email,
          full_name: data.user.user_metadata?.full_name || "",
          avatar_url: data.user.user_metadata?.avatar_url || null,
          updated_at: new Date().toISOString(),
        })

        if (profileError) {
          console.error("Profile creation error:", profileError)
        }

        // Redirect to dashboard with success message
        return NextResponse.redirect(new URL("/dashboard?confirmed=true", request.url))
      }
    } catch (error) {
      console.error("Unexpected callback error:", error)
      return NextResponse.redirect(new URL(`/auth?error=${encodeURIComponent("Failed to confirm email")}`, request.url))
    }
  }

  // No code parameter, redirect to auth
  return NextResponse.redirect(new URL("/auth", request.url))
}
