


import React from 'react';
import ReactDOM from 'react-dom/client';
import { useContext } from 'react';
import { AuthenticationContext } from './pages/Authentication';
import { AuthenticationProvider } from './pages/Authentication';


  
  const UserNavbar = () => {
      const {authentication , Logout} = useContext(AuthenticationContext);
      return (
        <div className={'Nav-Container'}>
            <nav className={'Nav-Wrapper'}>
           <h3> User Authentication System</h3>
           {authentication ? (
              <div>
                 <span>Welcome to our authentication system: {authentication.username}</span>
                  <br></br>
                  <button onClick={Logout}>User Logout</button>
              </div>
           ) : 
              (
                    <div><span>Please login</span></div>
           )}
            
        </nav>
        </div>
      )
  }


      const UserLogin = () => {
          const { Login }  = useContext(AuthenticationContext);
          const userLogin = () => {
              const username = prompt('Enter your username');
              if(username) {
                Login(username)
              }
          }
            return (
              <div className='login-btn-container'>
              <button onClick={userLogin}>Login</button>

              </div>
            )
      }


      const WelcomeDisplay = () => {
          const { authentication } = useContext(AuthenticationContext)
          return (
            <div>
              <span>Welcome: {authentication.username} </span>
            </div>
          )
      }
       
      
      const MainContent = () => {
          const { authentication } = useContext(AuthenticationContext);
          return (
            <div>
                {authentication ? <WelcomeDisplay /> : <UserLogin />}
            </div>
          )  
      }




function App () {
    return (
      <>
        <AuthenticationProvider>
          <UserNavbar />
          <MainContent />
        </AuthenticationProvider>

      </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);


