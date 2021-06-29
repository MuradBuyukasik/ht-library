import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

const NavItems: React.FC = () => {
    return (
        <div className={`grow-1 ${styles['space-between']}`}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="#">
                <a>Post entry</a>
            </Link>
        </div>
    )
}

export default NavItems
