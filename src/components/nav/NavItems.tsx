import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const NavItems: React.FC = () => {
    return (
        <div className={`grow-1 ${styles['space-between']}`}>
            <Link href="/">
                <a className={styles['navbar-brand']}>Thumos Timeline <span style={{ fontSize: 'small' }}>v0.2.0</span></a>
            </Link>
        </div>
    )
}

export default NavItems
