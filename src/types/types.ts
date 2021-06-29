
import { Prisma } from '@prisma/client'

const entry = Prisma.validator<Prisma.EntryArgs>()({})
export type Entry = Prisma.EntryGetPayload<typeof entry>

export type User = {
	name: string,
	image: string,
	accessToken?: string,
	refreshToken?: string,
	id: string,
	discriminator: string
}