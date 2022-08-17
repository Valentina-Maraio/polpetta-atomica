import React, { useContext } from 'react'
import { ExampleContext } from './ExampleContext'

const Example = () => {
    const [results] = useContext(ExampleContext);

  return (
    <div>
        <h2>Example</h2>
        <ul>
            {results.map((result) => (
                <li>{result.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Example