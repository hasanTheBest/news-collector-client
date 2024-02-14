import React from 'react'
import { useNewspaper } from '../Context/NewspaperContext'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import { Alert, AlertTitle, Box, Button, CircularProgress } from '@mui/material';
import { favicons, getNewspaperTitle } from './faviconsConfig';

const FetchIndicator = () => {
  const { fetchIndicator, newsData } = useNewspaper()

  return (
    <React.Fragment>
            {
      fetchIndicator.length !== newsData.length && (
          <Box sx={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0 }}>
            <Chip icon={<CircularProgress color='inherit' size={16} />} label={favicons[fetchIndicator[newsData.length]?.toLowerCase()]["title"]} variant="filled" color='primary' />
          </Box>
        )
      }
    </React.Fragment>
  )
}

export default FetchIndicator