import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader';
import './Chat.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';




function Chat() {

    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                })
        }
 
    }, [channelId])

    const addMessage = (e) => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        });
        
        setInput('');
    }


    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className='chat__messages'>
                {messages.map((message)=>{
                    return ( <Message message={message} />)
                })}
            </div>
            <div className='chat__input'>
                <AddCircleIcon fontSize='large' />

                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={'Message ' + channelName}
                        disabled={!channelId}
                    />
                    <button
                        onClick={addMessage}
                        className='chat__inputButton'
                        type='submit'
                        disabled={!channelId}
                    >Send Message</button>
                </form>
                <div className='chat__inputIcons'>
                    <CardGiftcardIcon fontSize='large' />
                    <GifIcon fontSize='Large' />
                    <EmojiEmotionsIcon fontSize='Large' />

                </div>
            </div>
        </div>
    )
}

export default Chat
