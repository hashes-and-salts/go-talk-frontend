import MainArea from '../layouts/MainArea'
import { Typography } from '@mui/material'
import LeftSidebar from '../layouts/LeftSidebar'

const HomePage = () => {
  return (
    <>
    <LeftSidebar>
      <Typography variant="h6">
        Create A Post
      </Typography>
        Or Sth Else
    </LeftSidebar>
    <MainArea>
        <Typography variant="h2">
          HomePage
        </Typography>
    </MainArea>
    </>
  )
}

export default HomePage