import {useState, useEffect} from 'react'

function useFetch(url) {
    const [Data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [ErrorMess, setError] = useState(null)


    useEffect(() => {
        return () => {
          fetch(url)
            .then(res => {
              if (!res.ok) {
                throw Error('Error fetching Data 😫😌')
              }
                 return res.json()
               })
                  .then((data) => {
                    setData(data)
                    setLoading(false)
                    setError(null)
                  }).catch(err => {
                    setError(err.message)
                    setLoading(false)
                
               })
        };
    }, [url])
    return {Data, loading, ErrorMess}
}

export default useFetch