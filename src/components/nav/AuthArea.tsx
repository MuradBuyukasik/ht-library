import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/client'
import NameTag from '@/components/user/NameTag'

const AuthArea = () => {
    const [session] = useSession()

    if (session) {
        return (
            <>
                <NameTag name={session.user.name} imageUrl={session.user.image} />
                <button onClick={() => signOut()}>Logout</button>
            </>
        )
    } else {
        return <button onClick={() => signIn()}>Login</button>
    }
}

export default AuthArea
