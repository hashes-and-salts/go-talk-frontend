import { Box } from '@mui/material'
import React from 'react'

interface TopBarProps {
  children? : React.ReactNode
}

const TopBar: React.FC<TopBarProps> = ({children}) => {
  return (
    <Box>
      Top Bar
      {children}
    </Box>
  )
}

export default TopBar