import React from 'react'
import styles from './NameTag.module.css'

interface Props {
	name?: string,
	imageUrl: string
}

const NameTag: React.FC<Props> = ({ name, imageUrl }) => (
	<div className={styles.nametag}>
		<img className={styles.avatar} src={imageUrl} width="48" height="48" />
		<span className={styles.username}>{name}</span>
	</div>
)

export default NameTag
