import React from 'react'
import { useNewspaper } from '../Context/NewspaperContext'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

const FetchIndicator = () => {
  const {selectedUrls, newsData} = useNewspaper()

  return (
    <Stack direction="row" spacing={1}>
      {selectedUrls.map((slug) => (
        <Chip key={Math.random()} icon={<FaceIcon />} label={slug} variant="outlined" />
        ))}
        {/* <Chip icon={<FaceIcon />} label="With Icon" /> */}
  </Stack>
  )
}

export default FetchIndicator