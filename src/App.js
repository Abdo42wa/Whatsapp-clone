import {useEffect } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import {useDispatch, useSelector} from 'react-redux'
import {login,Logout} from './redux/UserAction'
import {auth} from './firebase'
 
function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { currentUser } = user;
  //let user
  useEffect(() => {
    // to get the current user
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
          const idTokenResult = await user.getIdTokenResult()
            console.log('user======>', user)
          dispatch(login({
            id: idTokenResult.token,
            email: user.email,
            photo: user.photoURL,
            username: user.displayName

          }));
         
      }else{
        dispatch(Logout())
      }
    });

    return () => unsubscribe ();

  }, [dispatch])

  // useEffect(() => {
  //   //listening for any authentication changes. when any change occursX go ahead
  //   //and use authUser
  //   const unsubscribe = auth.onAuthStateChanged( async (authUser) => {
  //     if (authUser) {//if there was authUser then use is logged in
  //       //dispatch loginUser action and provide user object
  //       dispatch(login({//pass object. setting uid to what comes back  from google when we login
  //         uid: await (await authUser.getIdTokenResult()).token,
  //        photo: authUser.photoURL,//we can get authUser photoUrl, email and display name
  //         email: authUser.email,
  //        displayName: authUser.displayName
  //       }))
  //     } else {//else user is logged out
  //       //dispatch logoutUser action. reducer will set currentUser back to null
  //       dispatch(Logout())
  //     }

  //     console.log('userrrrr',currentUser);
  //   })

  //   return () => unsubscribe ();
  // }, [dispatch,currentUser])
  return (
    <div className="App">
     
       
      {currentUser ? (
      <div className='app_body'>
      <Router>
      <Sidebar />
      <Switch>
      <Route path='/rooms/:roomId'  >
        <Chat />
      </Route>
        <Route path='/'>
        <Chat />
        </Route>
        </Switch>
        </Router>
      </div> 
      ): (
        <Login />
      )
    }
     
    </div>
  );
}

export default App;
