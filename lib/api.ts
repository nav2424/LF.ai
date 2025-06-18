const API_BASE = "/api"

export class ApiService {
  static async generateStrategy(data: {
    skills: string
    niche: string
    targetAudience: string
    incomeGoal: string
    timeframe: string
    userId: string
  }) {
    const response = await fetch(`${API_BASE}/strategy/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    return response.json()
  }

  static async createProject(data: {
    name: string
    type: string
    userId: string
    content?: any
  }) {
    const response = await fetch(`${API_BASE}/projects/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    return response.json()
  }

  static async generateMarketing(data: {
    type: string
    userId: string
    productName: string
    targetAudience: string
  }) {
    const response = await fetch(`${API_BASE}/marketing/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    return response.json()
  }

  static async getUserProfile(userId: string) {
    const response = await fetch(`${API_BASE}/user/profile?userId=${userId}`)
    return response.json()
  }

  static async updateUserProfile(userId: string, updates: any) {
    const response = await fetch(`${API_BASE}/user/profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, ...updates }),
    })
    return response.json()
  }
}
