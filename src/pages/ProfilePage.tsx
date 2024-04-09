import LeftSidebar from '../layouts/LeftSidebar'
import MainArea from '../layouts/MainArea'
import { List, ListItem, Typography } from '@mui/material'

const ProfilePage = () => {
  return (
    <>
    <LeftSidebar>
        Profile Page LeftSidebar <br />
        Contains various settings for the profile.
        <List>
            <ListItem>
                Account Details
            </ListItem>

            <ListItem>
                Account Security
            </ListItem>

            <ListItem>
                Other Settings
            </ListItem>
        </List>
    </LeftSidebar>
    <MainArea>

        <Typography variant="h2">
            User Profile
        </Typography>

    </MainArea>
    </>
  )
}

export default ProfilePage