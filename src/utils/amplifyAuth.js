// AWS Authentication
import { fetchUserAttributes } from 'aws-amplify/auth'

import { fetchAuthSession } from 'aws-amplify/auth'

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
  async userIsValid() {
    const currentDateTime = new Date()
    try {
      const response = await fetchAuthSession()
      if (!response) throw new Error('Failed to fetch user session')
      return (
        response.tokens && response.credentials.expiration > currentDateTime
      )
    } catch (e) {
      console.error(e.message)
    }
  },
}
