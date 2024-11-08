import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function AuthenticatonLayout() {
    const sidebariconHover = false;
    const sideMenu = false
    return (
  <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle" : ""} ${sideMenu ? "menu-toggle" : ""}`}>
    <Nav />
    <div className="content-body" style={{ minHeight: window.screen.height + 20 }}>
      <div className="container-fluid">
        <Outlet/>
      </div>
    </div>
    <Footer changeFooter="out-footer style-2" />
  </div>);

}

export default AuthenticatonLayout;