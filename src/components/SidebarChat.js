import React,{useEffect,useState} from 'react'
import {Avatar} from '@material-ui/core'

const SidebarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
       
    }, [])
    const createChate = () => {
        const roomName = prompt('Please enter name for the chat');

        if (roomName){
            //
        }
    }
    return !addNewChat ?  (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChat-info'>
                <h2>Rome name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChate} className='sidebarChat'>
                <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
