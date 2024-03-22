import Knock from '@knocklabs/client'

const knockClient = new Knock(
    process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY ?? ''
)

export const KnockClient = {
    getAuth: async (userId: string) => {
        return await knockClient.authenticate(userId)
    },
}