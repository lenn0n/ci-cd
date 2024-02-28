import React, { Suspense } from 'react'
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import store from '@store/store';

// PAGES
import PageWrapper from './PageWrapper';
import Landing from "@pages/Landing/Landing"
import Demo from '@pages/Demo/Demo';
// CSS STYLES
import "@assets/styles/tailwind.css"
import "@assets/styles/addons.css"
import "@assets/styles/main.css"
import "lightbox2/dist/js/lightbox-plus-jquery.js"
import "lightbox2/dist/css/lightbox.css"
import Contact from '@pages/Contact/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PageWrapper />}>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </>))

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}

export default App