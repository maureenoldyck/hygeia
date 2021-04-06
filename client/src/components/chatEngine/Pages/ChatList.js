import React, { Component } from 'react'

import { ChatEngine, newChat, addPerson } from 'react-chat-engine'

const ChatList = () => {
    const state = {
        username: ''
    }

    const createDirectChat = (creds) => {
        newChat(
            creds,
            {is_direct_chat: true},
            (chat) => addPerson(creds, chat.id, state.username)
        )
    }

    const renderChatForm = (creds) => {
        return (
            <div>
                <input placeholder='Username' value={state.username} onChange={(e) => setState({username: e.target.value})} />
                <button onClick={() => createDirectChat(creds)}>Chat</button>
            </div>
        )
    };

    return (
        <div style={{ position: 'absolute', top: '0px', width: '100%' }}>
            <ChatEngine 
                height='100vh'
                userName={'Adam_La_Morre'}
                userSecret={'pass1234'}
                projectID={'1ed59673-1fd6-46ed-9eb9-56239a6a4f82'}
                renderNewChatForm={(creds) => renderChatForm(creds)}
            />
        </div>
    )


}

export default ChatList;