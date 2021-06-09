import React from 'react'
import data from '../public/events.json'

const index = () => {
    const entries = data.map((entry, key) => {
        const date = new Date(entry.date).toDateString()
        return (
            <div key={key} className="column">
                <h3>{entry.title}</h3>
                <small>{date}</small>
                <p style={{ marginTop: '20px' }}>{entry.description}</p>
            </div>
        )
    })

    return (
        <>
            <div className="row">
                <h1>High Thumos Timeline</h1>
                {entries}
            </div>
        </>
    )
}

export default index
