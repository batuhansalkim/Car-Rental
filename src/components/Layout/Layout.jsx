import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Routers from "../../routes/Routers";
import Footer from '../Footer/Footer';
function Layout() {
  return <Fragment>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
    </Fragment>
  
}

export default Layout