import React, { useContext } from 'react'
import { OtherContext } from './OtherContext'

const Other = () => {
    const [results] = useContext(OtherContext);

  return (
    <div>
        <ul>
            {results.map((result) => (
                <li>{result.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Other