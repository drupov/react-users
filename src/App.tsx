import {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './components/Users/Users'
import './App.css'

const App = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const loadMore = () => setPage(page + 1)

  useEffect(() => {
    axios.get(`https://randomuser.me/api?page=${page}&results=5`)
      .then(({data}) => {
        setData(prevData => prevData.concat(data.results))
        setLoading(false)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [page])

  return (
    <>
      <div className="users">
        <Users data={data} />
      </div>
      <div className="actions">
        <button onClick={() => {
          loadMore()
          setLoading(true)
        }}>{loading ? 'Loading...' : 'Load more'}</button>
      </div>
    </>
  )
}

export default App
