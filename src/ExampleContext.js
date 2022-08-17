import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react'
import apiCall from './apiCall'

export const ExampleContext = createContext();

export const ExampleProvider = ({children}) => {
    const [results, setResults] = useState([]);

    useEffect(()=>{getExample()}, []);

    const getExample = async() => {
        try{
                const response = await axios.get(apiCall.exampleCall)
                setResults(response.data.results)
            }
        catch(err){console.log(err)}
    }
  return (
    <ExampleContext.Provider value={[results, setResults]}>{children}</ExampleContext.Provider>
  )
}
