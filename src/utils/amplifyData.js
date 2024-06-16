import { generateClient } from 'aws-amplify/api'

const client = generateClient()

export const amplifyData = {
  async createLeague(data) {
    console.log(data)
    const { data: newLeagueData, errors } = await client.models.Leagues.create(
      data
    )
    console.log('New league created: ', newLeagueData)
    console.log('Errors', errors)
  },
  async fetchLeagues() {
    try {
      const { data: allLeagues, errors } = await client.models.Leagues.list()
      console.log('Fetched Leagues: ', allLeagues)
      console.log('Errors:', errors)
      if (errors) throw new Error(errors)
      return allLeagues
    } catch (e) {
      console.log(e)
    }
  },
  async updateLeague(leagueName, newData) {
    console.log(leagueName)
    // const newLeagueData = {
    //   ...newData, leagueName // Only needed if I change AppSlice.js data format
    // }
    const { data: updatedLeagueData, errors } =
      await client.models.Leagues.update(newData)
    console.log('League data updated: ', updatedLeagueData)
    console.log('Errors: ', errors)
  },
  async deleteLeague(leagueName) {
    const leagueToDelete = { leagueName }
    const { data: deletedLeagueData, errors } =
      await client.models.Leagues.delete(leagueToDelete)
    console.log('League deleted: ', deletedLeagueData)
    console.log('Errors: ', errors)
  },
}
