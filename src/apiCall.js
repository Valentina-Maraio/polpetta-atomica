const apiCall = {
    exampleCall: `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_API_KEY}`, //500

    //api call for selection
    otherCall: `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`, //total 38
}

export default apiCall