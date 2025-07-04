import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { TbLogout } from "react-icons/tb";
import { RiHomeSmileLine } from "react-icons/ri";
import { UserAuth } from "../../backend/firebaseConfig/authProvider";
import { useNotification } from './contexts/NewCommentsContext';
import { UserProgressData } from './contexts/userProgress';
import { storeLeftMinutes, updateLimitAccess } from '../../backend/functions/handleAccess';

function NavBar() {
  const [homeHovered, setHomeHovered] = useState(false);
  const [logoutHovered, setLogoutHovered] = useState(false);
  const navigate = useNavigate();
  const { logout, loggedIn, setLoggedIn, user } = UserAuth();
  const { newMessagesCount } = useNotification();
  const { leftMinutes } = UserProgressData() || {};
  const minutes = leftMinutes || 0;
  const displayCount = newMessagesCount || 0;
  const userId = user?.uid;

  const handleNavigateHome = () => {
    navigate('/');
  }

  const handleLoginScreen = () => {
    navigate('/Login')
  }

  const handleRegisterScreen = () => {
    navigate('/Register')
  }

  const handleMessagesScreen = () => {
    navigate('/screens/Messages');
  }

  const handleProfileScreen = () => {
    navigate('/user/Profile');
  }

  const handleLogOut = async () => {

    try {
      await storeLeftMinutes(userId, minutes);
      await updateLimitAccess(userId, minutes)
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
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
              <h4 style={{ color: 'white' }}>CODers</h4>
            </div>
          ) : (

            <>
              <button onClick={handleRegisterScreen} className='costum-button'>Inregistreaza-te</button>
              <button onClick={handleLoginScreen} className='costum-button'>Logheaza-te</button>
              <button onClick={() => navigate('/advertisement/adv')} className='costum-button'>De ce să te înscrii?</button>
            </>
          )}

          {loggedIn && (
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>

              <button className='fa-solid fa-message messages-icon'
                onClick={handleMessagesScreen} >
                {displayCount > 0 && (
                  <strong className="badge">
                    {displayCount}
                  </strong>
                )}
              </button>
            </div>)}

          {loggedIn && (
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <button onClick={handleProfileScreen} className='fa-regular fa-user profile-icon' >

              </button >
              <strong className='profile-user-name'>{user && (user.displayName)}</strong>
            </div>
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
                <button
                  className={`costumButton ${homeHovered ? "animate-border-green" : ""
                    }`}
                  style={{ borderBottom: "1px solid white", marginBottom: "7px" }}
                  onMouseEnter={() => setHomeHovered(true)}
                  onMouseLeave={() => setHomeHovered(false)}
                  onClick={loggedIn ? handleMainPressed : handleNavigateHome}
                >
                  Home
                  <RiHomeSmileLine
                    size={20}
                    style={{ marginLeft: "3px", position: "absolute", top: "66px" }}
                  />
                </button>
                {loggedIn && (
                  <button
                    className={`costumButton ${logoutHovered ? "animate-border-red" : ""
                      }`}
                    style={{ borderBottom: "1px solid white", marginBottom: "7px" }}
                    onMouseEnter={() => setLogoutHovered(true)}
                    onMouseLeave={() => setLogoutHovered(false)}
                    onClick={handleLogOut}
                  >
                    Logout
                    <TbLogout
                      size={20}
                      style={{ marginLeft: "3px", position: "absolute", top: "100px" }}
                    />
                  </button>
                )}


              </ul>

            </div>
          </div>
        </div>
      </nav >

    </>
  )
}

export default NavBar