import { Avatar,IconButton } from '@material-ui/core'
import { MoreVert,SearchOutlined, AttachFile, InsertEmoticon } from '@material-ui/icons';
import React,{useState,useEffect} from 'react'
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
    const [seed, setSeed] = useState('');
    const [message,setMessage] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
       
    }, [])
    const sendMessage = (e) => {
         e.preventDefault();
         setMessage('');
    }
    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  />
                <div className='chat-headerInfo'>
                    <h3>Rome name</h3>
                    <p>last seen at ..</p>
                </div>
                <div className='chat-headerRight'>
                <IconButton ><SearchOutlined /></IconButton>
                   <IconButton><AttachFile/></IconButton>
                   <IconButton><MoreVert /></IconButton>
                </div>
            </div>
            <div className='chat-body'>
                <p className={`chat-message ${true &&'chat-reciever'}`}>
                <span className='chat-name'>abdo</span>
                Hey Guys
                <span className='chat-timestamp'>3:52pm</span>
                </p>
            </div>
            <div className='chat-footer'>
                <InsertEmoticon />
                    <form>
                        <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='type a message'/>
                        <button type='submit' onClick={sendMessage}>Send message</button>
                    </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
