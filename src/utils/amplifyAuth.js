import { fetchUserAttributes } from 'aws-amplify/auth'

const amplifyAuth = {
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

export default amplifyAuth
