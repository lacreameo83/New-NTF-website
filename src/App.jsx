import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Herosection from './components/herosection/Herosection';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          index:true,
          element: <Herosection />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
