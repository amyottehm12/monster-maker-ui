import React from 'react'

const Monsters = ({ monsters }) => {
    return (
        <div>
        <center><h1>Monster List</h1></center>
        { monsters.map((monster) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{monster.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{monster.hp}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{monster.ac}</h6>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Monsters