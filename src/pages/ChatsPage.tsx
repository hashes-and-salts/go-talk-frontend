import { Typography } from "@mui/material"
import LeftSidebar from "../layouts/LeftSidebar"
import MainArea from "../layouts/MainArea"

const ChatsPage = () => {
  return (
    <>
    <LeftSidebar>
        Chats Page Left Sidebar. <br />
        Contains online users, maybe
    </LeftSidebar>
    <MainArea>
        <Typography variant="h2">
          Chats
        </Typography>
    </MainArea>
    </>
  )
}

export default ChatsPage