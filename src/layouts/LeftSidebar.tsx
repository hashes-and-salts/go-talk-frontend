import { Box } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

interface LeftSidebarProps {
  children?: React.ReactNode
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({children}) => {
  return (
    <Box flex={1.5} bgcolor={red[300]}>
        {children}
    </Box>
  )
}

export default LeftSidebar