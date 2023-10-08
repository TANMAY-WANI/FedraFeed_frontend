// display this navbar after the user logs in
import React from 'react'

const Nbar = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">FedraFeed</Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
        <Nav>
          <Nav.Link href="#home" onClick={handleSignUp}>Sign Up</Nav.Link>
          <Nav.Link href="#features" onClick={handleLogIn}>Log In</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {showLogin && <Login show={showLogin} setShow={setLogin}/>}
    {showSignup && <Signup show = {showSignup} setShow = {setSignup}/>}
  </>
  )
}

export default Nbar