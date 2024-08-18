import './App.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import GroupProducts from './pages/GroupProducts';

import RootLayout from './layout/RootLayout';
import Products from './components/products/Products';
import SingleProduct from './components/single-product/SingleProduct';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/groups' element={<GroupProducts />} />
        <Route path='/groups/:id' element={<Products/>} />
        <Route path='/product/:id' element={<SingleProduct/>} />
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
