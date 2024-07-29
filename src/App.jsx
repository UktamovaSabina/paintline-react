import './App.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import GroupProducts from './pages/GroupProducts';

import RootLayout from './layout/RootLayout';
import OurProducts from './pages/OurProducts';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<OurProducts />} />
        <Route path='/products/:id' element={<OurProducts />} />
        <Route path='/group/:id' element={<GroupProducts />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
