import React,{useEffect,useState} from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import {  Chat, DonutLarge, SearchOutlined, ExitToApp  } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from '../firebase'
import {useDispatch,useSelector} from 'react-redux'
import {Logout} from '../redux/UserAction'
import {useHistory} from 'react-router-dom'
const Sidebar = () => {
    const [rooms, setRooms] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.user)
    const { currentUser } = user;


    useEffect(() => {
        // loading rooms from firebase collection
         const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
              //get the rooms and add to setRoom so we can use it 
              setRooms(snapshot.docs.map(doc => 
                ({
                    // id of the room
                    id: doc.id,
                    // name of the room / data
                    data: doc.data() 
                })))
          ))  


          return () => {
            unsubscribe(); 
            }
    },[])

    const logout = () => {
        dispatch(Logout())
        history.push('/')
    }
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src={currentUser.photo} />
                <div className='sidebar-headerRight'>
                <IconButton >
                <DonutLarge />
                </IconButton>
                   <IconButton><Chat /></IconButton>
                   <IconButton onClick={logout}><ExitToApp /></IconButton>
                   
                   
                </div>
            </div>
            <div className='sidebar-search'>
            <div className='sidebar-searchContainer'>
                <SearchOutlined />
                <input placeholder="search or start new chat " type='text' />
            </div>
               
            </div>

            <div className='sidebar-chats'>
                    <SidebarChat addNewChat />
                    {rooms.map(room => (
                        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                        
                    ))}
                    
        
            </div>
        </div>
    )
}

export default Sidebar
