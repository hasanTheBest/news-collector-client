import React from 'react'
import { useNewspaper } from '../Context/NewspaperContext'
import { favicons, getHostName } from './faviconsConfig'
import { Alert, Snackbar } from '@mui/material'

const ShowResponseAlert = () => {
  const { newsData } = useNewspaper()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // if(newsData && newsData.url){
  //   if( newsData.url)
  // }

  return (
    // <Alert severity="success" variant="outlined">{`${newsData?.name} \n ${newsData?.message}`}</Alert>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={newsData?.type === 'success' ? "success" : "error" }
          variant="filled"
          sx={{ width: '50%' }}
        >
          {
            newsData?.type === 'success' ? `<b>${favicons[getHostName(newsData?.url)]["title"]}</b> is loaded successfully` : `Error: ${newsData?.name} \n ${newsData?.message}`
          }
        </Alert>
      </Snackbar>
  )
}

export default ShowResponseAlert