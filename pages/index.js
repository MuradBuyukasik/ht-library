import React from 'react'
import data from '../public/events.json'

const index = () => {
    const entries = data.map((entry, key) => {
        const date = new Date(entry.date).toDateString()
        return (
            <div key={key} className="column">
                <h4>{entry.title} v0.1.0</h4>
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
