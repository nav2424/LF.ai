import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect dashboard routes
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth", req.url))
    }
  }

  // Protect API routes (except public ones)
  if (req.nextUrl.pathname.startsWith("/api/")) {
    const publicRoutes = ["/api/health"]
    const isPublicRoute = publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route))

    if (!isPublicRoute && !session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  return res
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
}
