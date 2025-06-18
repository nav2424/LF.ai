"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface User {
  id: string
  email: string
  user_metadata: {
    full_name: string
  }
}

interface AuthContextType {
  user: User | null
  loading: boolean
  isDemoMode: boolean
  enterDemoMode: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEMO_USER: User = {
  id: "demo-123",
  email: "demo@launchflow.ai",
  user_metadata: {
    full_name: "Demo User",
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)

  const enterDemoMode = () => {
    console.log("🚀 enterDemoMode called")
    setUser(DEMO_USER)
    setIsDemoMode(true)
    console.log("✅ Demo user set:", DEMO_USER)
  }

  const signOut = () => {
    console.log("👋 signOut called")
    setUser(null)
    setIsDemoMode(false)
  }

  const value = {
    user,
    loading,
    isDemoMode,
    enterDemoMode,
    signOut,
  }

  console.log("🔍 AuthProvider render:", { user: !!user, isDemoMode, loading })

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
