import React from 'react'
import { useState, useEffect } from 'react'
import Map from './MapComponents/Map'
import LoaderIcon from './MapComponents/Loader'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  console.log("app before useEffect")
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      console.log("app before fetch")
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      console.log("app after fetch")
      const { events } = await res.json()
      console.log(events)
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()

  }, [])
  return (
    <div>
      { !loading ? <Map eventData={eventData} /> : <LoaderIcon />}
    </div>
  )
}

export default App;