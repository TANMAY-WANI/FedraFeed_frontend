import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvas() {


  return (
    <>
      <Offcanvas show={true} {...{scroll:true,backdrop:false}}>
        <Offcanvas.Header>
          <Offcanvas.Title className='sidebar-heading'>FedraFeed</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='sidebar-divs'><p> <img src="images/home.jpg" alt="" height={20} width={20} /> Home</p></div>
          <div className='sidebar-divs'><p> <img src="images/explore.png" alt="" height={20} width={20} /> Explore</p></div>
          <div className='sidebar-divs'><p> <img src="images/saved.webp" alt="" height={25} width={20} /> Saved</p></div>
          <div className='sidebar-divs'><p> <img src="images/subs.png" alt=""height={20} width={20} />Subscription</p></div>
          <div className='sidebar-divs'><p><img src="images/setting.jpeg" alt="" height={25} width={25}/>Settings</p></div>
          <div className='sidebar-divs'><p><img src="images/logout.png" alt="" height={20} width={20}/>  Log Out</p></div>
        </Offcanvas.Body>
        <footer>Copyright: FedraFeed 2023</footer>
      </Offcanvas>
    </>
  );
}

function Sidebar() {
  return (
    <>
    <OffCanvas/>
    </>
  );
}

export default Sidebar