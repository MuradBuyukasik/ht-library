import React from 'react'
import { User } from '@/types/types'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'
import NameTag from '@/components/user/NameTag'

interface Props {
	user?: User
}

const Navbar: React.FC<Props> = ({ user }) => {
	const [session, loading] = useSession()

	const profileAction = () => {
		if (session) {
			return <>
				<NameTag name={session.user.name} imageUrl={session.user.image} />
				<button onClick={() => signOut()}>Logout</button>
			</>
		} else {
			return <button onClick={() => signIn()}>Login with Discord</button>
		}
	}

	return (
		<div className={styles.container}>
			<div className={`grow-1 ${styles['space-between']}`}>
				<Link href="/">
					<a>
						Home
				</a>
				</Link>
				<Link href="#">
					<a>
						Post entry
				</a>
				</Link>
			</div>
			{profileAction()}
		</div>
	)
}

export default Navbar
