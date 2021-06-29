import Navbar from '@/components/nav/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default Layout
