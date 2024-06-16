import { generateClient } from 'aws-amplify/api'

const client = generateClient()

export const amplifyData = {
  async createLeague(data) {
    try {
      const { data: newLeagueData, errors } =
        await client.models.Leagues.create(data)

      if (errors) throw new Error(errors)
      console.log('New league created: ', newLeagueData)
    } catch (e) {
      console.error(e)
    }
  },
  async fetchLeagues() {
    try {
      const { data: allLeagues, errors } = await client.models.Leagues.list()
      if (errors) throw new Error(errors)
      return allLeagues
    } catch (e) {
      console.error(e)
    }
  },
  async updateLeague(newData) {
    try {
      const { data: updatedLeagueData, errors } =
        await client.models.Leagues.update(newData)

      if (errors) throw new Error(errors)
      console.log('League data updated: ', updatedLeagueData)
    } catch (e) {
      console.error(e)
    }
  },
  async deleteLeague(leagueName) {
    const leagueToDelete = { leagueName }
    try {
      const { data: deletedLeagueData, errors } =
        await client.models.Leagues.delete(leagueToDelete)

      if (errors) throw new Error(errors)
      console.log('League deleted: ', deletedLeagueData)
    } catch (e) {
      console.error(e)
    }
  },
}
