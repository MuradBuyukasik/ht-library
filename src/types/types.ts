
import { Prisma } from '@prisma/client'

const entry = Prisma.validator<Prisma.EntryArgs>()({})
export type Entry = Prisma.EntryGetPayload<typeof entry>