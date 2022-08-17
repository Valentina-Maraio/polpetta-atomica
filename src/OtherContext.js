import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import apiCall from './apiCall'

export const OtherContext = createContext();

export const OtherProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getOther() }, []);

    const getOther = async () => {
        try {
            const response = await axios.get(apiCall.otherCall)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <OtherContext.Provider value={[results, setResults]}>{children}</OtherContext.Provider>
    )
}