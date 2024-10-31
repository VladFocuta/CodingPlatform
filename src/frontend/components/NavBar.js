import { useNavigate } from 'react-router-dom'
import { TbLogout } from "react-icons/tb";
import { RiHomeSmileLine } from "react-icons/ri";
import { UserAuth } from "../../backend/firebaseConfig/authProvider";


function NavBar() {

  const navigate = useNavigate();
  const { logout, loggedIn, setLoggedIn } = UserAuth();

  const handleNavigateHome = () => {
    navigate('/');
  }

  const handleLoginScreen = () => {
    navigate('/Login')
  }

  const handleRegisterScreen = () => {
    navigate('/Register')
  }

  const handleLogOut = async () => {
    try {
      await logout();
      setLoggedIn(false);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  const handleHomePressed = () => {
    navigate('/');
  }

  const handleMainPressed = () => {
    navigate('/Main');
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top nav">
        <div className="container-fluid">
          <div style={{ display: 'flex', height: '65px', width: '65px' }}>
            <button className='logo' style={{ border: 'none' }} onClick={loggedIn ? handleMainPressed : handleHomePressed}></button>
          </div>
          {loggedIn ? (
            <h4 style={{ color: 'white' }}>CODers</h4>
          ) : (

            <>
              <button onClick={handleRegisterScreen} className='costum-button'>Inregistreaza-te</button>
              <button onClick={handleLoginScreen} className='costum-button'>Logheaza-te</button>
            </>
          )}

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">

              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <button onClick={loggedIn ? handleMainPressed : handleNavigateHome} className='costumButton'>Home</button>
                  <RiHomeSmileLine size={20} style={{ marginLeft: 2 }} />
                </li>
                {loggedIn && (
                  <li className="nav-item">
                    <button onClick={handleLogOut} className='costumButton'>Logout</button>
                    <TbLogout size={20} style={{ marginLeft: 2 }} />

                  </li>
                )}

                <li className="nav-item">
                  <a className="nav-link" href="/ThirdPower">ThirdPower</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar