import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  Leagues: a
    .model({
      leagueName: a.id().required(),
      teamName: a.string().required(),
      draftDate: a.date(),
      platform: a.enum(['ESPN', 'Free', 'Sleeper', 'Yahoo']),
      teamCount: a.integer().required(),
      pickPosition: a.integer(),
      buyIn: a.float().required(),
      initialRank: a.integer(),
      currentRank: a.integer(),
      playoffTeams: a.integer(),
      payout1: a.float(),
      payout2: a.float(),
      payout3: a.float(),
    })
    .identifier(['leagueName'])
    .authorization((allow) => [allow.owner()]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  // authorizationModes: {
  //   defaultAuthorizationMode: 'userPool',
  // },
})
