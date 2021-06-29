import React from 'react'
import styles from './Navbar.module.css'
import NavItems from '@/components/nav/NavItems'
import AuthArea from '@/components/nav/AuthArea'

const Navbar: React.FC = () => {
	return (
		<div className={styles.container}>
			<NavItems />
			<AuthArea />
		</div>
	)
}



export default Navbar
