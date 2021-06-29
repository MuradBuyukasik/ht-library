import React from 'react'
import styles from './NameTag.module.css'

interface Props {
	name: string
	imageUrl: string
}

const NameTag: React.FC<Props> = ({ name, imageUrl }) => (
	<div>
		<img src={imageUrl} width="32" height="32" />
		{name}
	</div>
)

export default NameTag
