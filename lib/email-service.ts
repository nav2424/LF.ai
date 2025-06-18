// Backup email service for when Supabase emails fail
export class EmailService {
  static async sendConfirmationEmail(email: string, confirmationUrl: string) {
    try {
      // This would integrate with a service like Resend, SendGrid, etc.
      const response = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, confirmationUrl }),
      })

      return response.ok
    } catch (error) {
      console.error("Failed to send confirmation email:", error)
      return false
    }
  }

  static async sendWelcomeEmail(email: string, name: string) {
    try {
      const response = await fetch("/api/send-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })

      return response.ok
    } catch (error) {
      console.error("Failed to send welcome email:", error)
      return false
    }
  }
}
