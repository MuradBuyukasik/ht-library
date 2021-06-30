import { Entry } from '@/types/types'
import React from 'react'
import styles from './EntryCard.module.css'

const EntryCard: React.FC<Entry> = ({ id, title, description, date }) => {
	return (
		<div id={id} className={styles.card}>
			<h1>{title}</h1>
			<small>{date}</small>
			<p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
		</div>
	)
}

export default EntryCard
