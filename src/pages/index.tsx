import React from 'react'
import { GetStaticProps } from 'next'
import { Entry } from '@/types/types'
import prisma from '@/lib/db'

interface Props {
    entries: Entry[]
}

const index: React.FC<Props> = ({ entries }) => {

    return (
        <>
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