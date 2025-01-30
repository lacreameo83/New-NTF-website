
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'

import Herosectionpage from './pages/Herosectionpage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          index:true,
          element: <Herosectionpage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
