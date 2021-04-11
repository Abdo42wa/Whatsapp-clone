import { Avatar,IconButton } from '@material-ui/core'
import { MoreVert,SearchOutlined, AttachFile, InsertEmoticon } from '@material-ui/icons';
import React,{useState,useEffect} from 'react'
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from 'react-router-dom'
import db from '../firebase';
import { useSelector } from 'react-redux';
import firebase from 'firebase'

const Chat = () => {
    const [seed, setSeed] = useState('');
    const [userMessage,setUserMessage] = useState('')
    const [roomName, setRoomName] = useState('');
    const [getMessages, setGetMessages] = useState([])
    const {roomId} = useParams('')
    const user = useSelector((state) => state.user)
    const { currentUser } = user;

    useEffect(() => {
        if(roomId) {
            
           db.collection('rooms').doc(roomId).onSnapshot((snapshot)=> setRoomName(snapshot.data().name))
                
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot((snapshot) => (
                setGetMessages(snapshot.docs.map((doc)=> doc.data()))
            ))
        }
        console.log(roomId);

    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
       
    }, [])
    const sendMessage = (e) => {
         e.preventDefault();

        db.collection("rooms").doc(roomId).collection("messages").add({
            message: userMessage,
            name: currentUser.username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        console.log('msm: ', userMessage, 'name:' ,currentUser.username)
        // db.collection("rooms").doc(roomId).collection("messages").add({
        //     message: input,
        //     name: user.displayName,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //   });

         setUserMessage('');
    }
    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  />
                <div className='chat-headerInfo'>
                    <h3>{roomName}</h3>
                    <p>last seen at  {new Date(
                        getMessages[getMessages.length - 1]?.timestamp?.toDate()
                    ).toUTCString() }</p>
                </div>
                <div className='chat-headerRight'>
                <IconButton ><SearchOutlined /></IconButton>
                   <IconButton><AttachFile/></IconButton>
                   <IconButton><MoreVert /></IconButton>
                </div>
            </div>
            <div className='chat-body'>
            {getMessages.map(sms => (
                <p key={sms.id} className={`chat-message ${sms.name === currentUser.username &&'chat-reciever'}`}>
                <span className='chat-name'>{sms.name}</span>
                {sms.message}
                <span className='chat-timestamp'>{new Date (sms.timestamp?.toDate()).toUTCString()}</span>
                </p>
            ))}
               
            </div>
            <div className='chat-footer'>
                <InsertEmoticon />
                    <form>
                        <input type='text' value={userMessage} onChange={(e) => setUserMessage(e.target.value)} placeholder='type a message'/>
                        <button type='submit' onClick={sendMessage}>Send message</button>
                    </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
