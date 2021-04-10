import React,{useEffect,useState} from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import { MoreVert, Chat, DonutLarge, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from '../firebase'
const Sidebar = () => {
    const [rooms, setRooms] = useState([])
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
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar />
                <div className='sidebar-headerRight'>
                <IconButton >
                <DonutLarge />
                </IconButton>
                   <IconButton><Chat /></IconButton>
                   <IconButton><MoreVert /></IconButton>
                   
                   
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
