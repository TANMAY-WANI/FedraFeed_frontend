import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Nbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to open the sidebar
  const openSidebar = () => {
    setShowSidebar(true);
  };

  const Sidebar = () => {
    const handleClose = () => {
      setShowSidebar(false);
    };

    return (
      <>
        <Offcanvas show={showSidebar} scroll backdrop onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='sidebar-heading'>FedraFeed</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className='sidebar-divs'>
              <p>
                {' '}
                <img src="images/home.jpg" alt="" height={20} width={20} /> Home
              </p>
            </div>
            <div className='sidebar-divs'>
              <p>
                {' '}
                <img src="images/explore.png" alt="" height={20} width={20} /> Explore
              </p>
            </div>
            <div className='sidebar-divs'>
              <p>
                {' '}
                <img src="images/saved.webp" alt="" height={25} width={20} /> Saved
              </p>
            </div>
            <div className='sidebar-divs'>
              <p>
                {' '}
                <img src="images/subs.png" alt="" height={20} width={20} /> Subscription
              </p>
            </div>
            <div className='sidebar-divs'>
              <p>
                <img src="images/setting.jpeg" alt="" height={25} width={25} /> Settings
              </p>
            </div>
            <div className='sidebar-divs'>
              <p>
                <img src="images/logout.png" alt="" height={20} width={20} /> Log Out
              </p>
            </div>
          </Offcanvas.Body>
          <footer>Copyright: FedraFeed 2023</footer>
        </Offcanvas>
      </>
    );
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav>
            <Nav.Link href="#home">
              <img src="/images/sidebarBtn.png" alt="" height={30} width={30} onClick={openSidebar} />
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {/* Add your Sign Up and Log In links here */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar />
    </>

  );
};

export default Nbar;
