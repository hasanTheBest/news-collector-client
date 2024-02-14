import React from 'react'
import { useNewspaper } from '../Context/NewspaperContext'
import { favicons, getHostName } from './faviconsConfig'
import { Alert } from '@mui/material'

const ShowResponseAlert = () => {
  const { newsData } = useNewspaper()

  if (newsData?.type === 'error') {
    return (
      <Alert severity="error" variant="outlined">{`${favicons[getHostName(newsData?.url)]["title"]}`}</Alert>
    )
  }

  return (
    <Alert severity="success" variant="outlined">{`${favicons[getHostName(newsData?.url)]["title"]} is loaded successfully.`}</Alert>
  )
}

export default ShowResponseAlert