import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function seed() {
	const entry1 = await prisma.entry.upsert({
		where: { id: '3abbb095-40a7-48e4-9c88-9c31604da3df' },
		update: {},
		create: {
			id: '3abbb095-40a7-48e4-9c88-9c31604da3df',
			title: 'The Banishing of the Booty',
			description: 'Testing',
			date: Date.now().toString()
		}
	})

	const entry2 = await prisma.entry.upsert({
		where: { id: 'f997e4de-04a0-42de-aaa9-7c098d78b1b1' },
		update: {},
		create: {
			id: 'f997e4de-04a0-42de-aaa9-7c098d78b1b1',
			title: 'Saucy gets banned',
			description: 'Testing',
			date: Date.now().toString()
		}
	})
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})