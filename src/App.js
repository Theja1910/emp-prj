import "bootstrap/dist/css/bootstrap.min.css";
// import AuthUser from './Components/AuthUser';
//import Guest from './Navbar/Guest';
import Auth from './Navbar/Auth';
import { ToastContainer } from 'react-toastify';
import AppRouter from "./Components/AppRouter";

// function App() {
//   // const {getToken} = AuthUser();
//  // const getToken = "AuthUser();"

//   // if(!getToken()){
//   //   return <Guest />
//   // }
//   return (

//       <Auth />
//   );
// }
function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      {/* <Auth /> */}
      <AppRouter />

    </div>
  );
}

export default App;
