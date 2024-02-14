import React from 'react'
import { useNewspaper } from '../Context/NewspaperContext'
import { favicons, getHostName } from './faviconsConfig'
import { Alert, Snackbar } from '@mui/material'

const ShowResponseAlert = () => {
  const { newsData } = useNewspaper()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(newsData[newsData.length - 1]?.type === 'success');
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
  const length = 0;

  console.log("newsData type", newsData[newsData.length - 1]?.type)
  console.log("newsData", newsData)

  return (
    <React.Fragment>
    <button onClick={handleClick}>open</button>
    {/* // <Alert severity="success" variant="outlined">{`${newsData?.name} \n ${newsData?.message}`}</Alert> */}
    <Snackbar open={newsData[newsData.length - 1]?.type === 'success'} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={newsData?.type === 'success' ? "success" : "error"}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {
          // newsData?.type === 'success' ? `<b>${favicons[getHostName(newsData?.url)]["title"]}</b> is loaded successfully` : `Error: ${newsData?.name} \n ${newsData?.message}`
          `snackbar`
        }
      </Alert>
    </Snackbar>
    </React.Fragment>
  )
}

export default ShowResponseAlert