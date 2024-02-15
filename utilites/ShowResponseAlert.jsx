import React from 'react'
import { useNewspaper } from '../Context/NewspaperContext'
import { favicons, getHostName } from './faviconsConfig'
import { Alert, Snackbar } from '@mui/material'
import { useSnackbar } from 'notistack'

const ShowResponseAlert = () => {
  const { newsData } = useNewspaper()
  const { enqueueSnackbar } = useSnackbar()

  const newsDataIndex = newsData.length === 0 ? 0 : newsData.length - 1
  const resType = newsData[newsDataIndex]?.type
  const resUrl = resType === 'success' && newsData[newsDataIndex]?.url
  const resErrorName = resType === 'error' && newsData[newsDataIndex]?.name
  const resErrorMessage = resType === 'error' && newsData[newsDataIndex]?.message

  const hostName = resUrl && getHostName(resUrl)
  const newspaperName = favicons[hostName]

  const alertMessage = resType === 'success' ? `<b>${newspaperName}</b> is loaded successfully.` : `<b>${resErrorName}</b> \n${resErrorMessage}`

  const key = enqueueSnackbar(alertMessage, {
    autoHideDuration: 4000,
    variant: resType,
    preventDuplicate: true,
    anchorOrigin: { horizontal: "right", vertical: "bottom" } 
  })

  return (
    <React.Fragment>

    </React.Fragment>
  )
}

export default ShowResponseAlert