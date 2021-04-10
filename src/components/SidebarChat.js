import React,{useEffect,useState} from 'react'
import {Avatar} from '@material-ui/core'
import db from '../firebase'
import { Link } from 'react-router-dom';

const SidebarChat = ({addNewChat,name,id}) => {
    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
       
    }, [])
    const createChate = () => {
        const roomName = prompt('Please enter name for the chat');

        if (roomName){
            // adding rome name into the database
           db.collection('rooms').add({
               name: roomName
           })
        }
    }
    return !addNewChat ?  (
     <Link to={`/rooms/${id}`} >
            <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChat-info'>
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
     </Link>
    ):(
        <div onClick={createChate} className='sidebarChat'>
                <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
