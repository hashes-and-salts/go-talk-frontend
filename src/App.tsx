import { Box, Container, Stack } from "@mui/material"
import TopBar from "./layouts/TopBar"
import RightSidebar from "./layouts/RightSidebar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <Box>

      <TopBar/>

      <Container>

        <Stack direction={'row'}>

          <Outlet/>

          <RightSidebar/>

        </Stack>

      </Container>

    </Box>
  )
}

export default App
