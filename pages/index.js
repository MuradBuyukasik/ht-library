import React from 'react'
import data from '../public/events.json'

const index = () => {
    const entries = data.map((entry, key) => {
        const date = new Date(entry.date).toDateString()
        return (
            <div key={key} className="column">
                <h3>{entry.title}</h3>
                <small>{date}</small>
                <p dangerouslySetInnerHTML={{ __html: entry.description }} style={{ marginTop: '20px' }}></p>
            </div>
        )
    })

    return (
        <>
            <div className="row">
                <h2>High Thumos Timeline v0.1.0</h2>
                <a href="https://github.com/MuradBuyukasik/high-thumos-community"><small>source</small></a>
                {entries}
            </div>
        </>
    )
}

export default index
