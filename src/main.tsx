import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import ChatsPage from './pages/ChatsPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>404 not found</div>,
    children: [
      {
        path: "/home",
        element: <HomePage/>
      },
      {
        path: "/chats",
        element: <ChatsPage/>
      },
      {
        path: "/profile",
        element: <ProfilePage/>
      },
      {
        path: "/settings",
        element: <SettingsPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
