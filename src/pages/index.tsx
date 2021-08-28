import React from 'react'
import DiscordSignIn from '../components/Buttons/DiscordSignIn'
import Link from 'next/link'

const index = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl mb-10">The Unofficial High Thumos Hub</h1>
            <DiscordSignIn />
            <p>Or explore our content:</p>
            <Link href="/timeline">
                Timeline
            </Link>
            <Link href="/recipes">
                Recipes
            </Link>
        </div>
    )
}

export default index