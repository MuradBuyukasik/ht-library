import React from 'react'
import { GetStaticProps } from 'next'
import { Entry } from '@/types/types'
import EntryCard from '@/components/entry/EntryCard'
import prisma from '@/lib/db'

interface Props {
    entries: Entry[]
}

const index: React.FC<Props> = ({ entries }) => {
    const entriesList = entries.map((entry) => {
        return <EntryCard key={entry.id} id={entry.id} title={entry.title} description={entry.description} date={entry.date} />
    })

    return (
        <>
            {entriesList}
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const entries = await prisma.entry.findMany()

    return {
        props: { entries }
    }
}

export default index