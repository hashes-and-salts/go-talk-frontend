import { ChatBubbleRounded, ExitToAppRounded, HomeRounded, PersonRounded, SettingsRounded } from "@mui/icons-material"
import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { blue } from "@mui/material/colors"
import React from "react"
import { Link as RouterLink } from "react-router-dom"

interface RightSidebarProps {
    children? : React.ReactNode
}

interface SidebarOptions {
    name: string,
    icon: React.ReactElement,
}

interface SidebarRouteOptions extends SidebarOptions {
    linkTo: string,
}

const sidebarRouteOptions: SidebarRouteOptions[] = [
    {
        name: "Home",
        icon: <HomeRounded/>,
        linkTo: "/home",
    },
    {
        name: "Chats",
        icon: <ChatBubbleRounded/>,
        linkTo: "/chats"
    },
    {
        name: "Profile",
        icon: <PersonRounded/>,
        linkTo: "/profile"
    },
    {
        name: "Settings",
        icon: <SettingsRounded/>,
        linkTo: "/settings"
    }
]

interface SidebarActionOptions extends SidebarOptions {
    onClick: () => void,
}

const sidebarActionOptions: SidebarActionOptions[] = [
    {
        name: "Log Out",
        icon: <ExitToAppRounded/>,
        onClick: logOut
    }
]

function logOut() {
    // TODO implement logout
}

const RightSidebar: React.FC<RightSidebarProps> = ({children}) => {
  return (
    <Box
        flex={1.5}
        bgcolor={blue[300]}
        justifyContent={'space-between'}            // vertical
        alignItems={'start'}                        // horizontal
        flexDirection={'column'}                    // COLUMN
        display={'flex'}                            // FLEX
        // gap={'40vh'}
        >

        <List>
            {
                sidebarRouteOptions.map((option, index) => (
                    <nav>
                        <ListItem key={index}>
                            <Link component={RouterLink} to={ option.linkTo } underline="none">
                                <ListItemButton>
                                    <ListItemIcon> {option.icon} </ListItemIcon>
                                    <ListItemText> {option.name} </ListItemText>
                                </ListItemButton>

                            </Link>
                        </ListItem>
                    </nav>
                ))
            }
        </List>

        {children}


        <List>
            {
                sidebarActionOptions.map((option, index) => (
                    <nav>
                        <ListItem key={index}>
                            <ListItemButton onClick={option.onClick}>
                                <ListItemIcon> {option.icon} </ListItemIcon>
                                <ListItemText> {option.name} </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </nav>
                ))
            }
        </List>
    </Box>
  )
}

export default RightSidebar