// AWS Authentication
import { fetchUserAttributes } from 'aws-amplify/auth'

export const amplifyAuth = {
  async fetchUsername() {
    try {
      const response = await fetchUserAttributes()
      if (!response) throw new Error('Failed to get username')
      return response.preferred_username
    } catch (e) {
      console.error(e.message)
    }
  },
}
