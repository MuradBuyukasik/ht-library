import Container from '@/components/layout/Container'
import Navbar from '@/components/nav/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
	return (
		<Container>
			<Navbar />
			{children}
		</Container>
	)
}

export default Layout
