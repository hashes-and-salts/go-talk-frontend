import LeftSidebar from '../layouts/LeftSidebar'
import MainArea from '../layouts/MainArea'
import { Typography } from '@mui/material'

const SettingsPage = () => {
  return (
    <>
    <LeftSidebar>
        <Typography>
        </Typography>
        <Typography variant='h5'>
            Settings
        </Typography>
    </LeftSidebar>
    <MainArea>
        <Typography variant='h2'>
            Profile Settings
        </Typography>
    </MainArea>
    </>
  )
}

export default SettingsPage