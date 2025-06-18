// Email fallback service for when Supabase emails fail
export class EmailFallbackService {
  static async checkEmailDelivery(email: string): Promise<{
    canReceive: boolean
    provider: string
    suggestions: string[]
  }> {
    const domain = email.split("@")[1]?.toLowerCase()

    // Known problematic providers
    const problematicProviders = [
      "outlook.com",
      "hotmail.com",
      "live.com",
      "msn.com",
      "yahoo.com",
      "ymail.com",
      "aol.com",
      "icloud.com",
      "me.com",
    ]

    // Reliable providers
    const reliableProviders = ["gmail.com", "googlemail.com"]

    const isProblematic = problematicProviders.includes(domain)
    const isReliable = reliableProviders.includes(domain)

    const suggestions = []

    if (isProblematic) {
      suggestions.push("Try using a Gmail address instead")
      suggestions.push("Check your spam/junk folder carefully")
      suggestions.push("Add noreply@mail.app.supabase.io to your contacts")
      suggestions.push("Check your email security settings")
    }

    if (domain?.includes("corporate") || domain?.includes("company")) {
      suggestions.push("Corporate emails often block external emails")
      suggestions.push("Try using a personal email address")
    }

    return {
      canReceive: !isProblematic,
      provider: domain || "unknown",
      suggestions,
    }
  }

  static getAlternativeSignupMethods() {
    return [
      {
        method: "Demo Mode",
        description: "Explore the platform without email confirmation",
        action: "Use demo credentials to access the dashboard",
      },
      {
        method: "Manual Verification",
        description: "Contact support for manual account activation",
        action: "Email support@launchflow.ai with your signup details",
      },
      {
        method: "Different Email",
        description: "Try with a Gmail or other reliable email provider",
        action: "Sign up again with a different email address",
      },
    ]
  }
}
