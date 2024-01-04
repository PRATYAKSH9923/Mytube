import { Provider } from 'react-redux';
import store from "./utils/store"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Head from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/Body/MainContainer';
import Watch from './components/Body/Watch';
import Live from './components/Body/Live';

function App() {
var approuter = createBrowserRouter([{
   path: '/',
   element: <Body/>,
   children:[
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: '/Watch',
      element: <Watch/>
    },
    {
      path: '/Live',
      element: <Live/>
    }
   ]
}])
  return (
    <>
      <Provider store={store}>
        <Head/>
        <RouterProvider router={approuter} /> 
      </Provider>  
    </>
  )
}

export default App

library.add(fab, fas, far)
