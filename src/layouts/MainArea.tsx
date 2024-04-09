import { Box } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React from 'react'

interface MainAreaProps {
    children? : React.ReactNode
}

const MainArea:React.FC<MainAreaProps> = ({children}) => {
  return (
    <Box flex={4} bgcolor={blueGrey[300]}>
        {children}
    </Box>
  )
}

export default MainArea