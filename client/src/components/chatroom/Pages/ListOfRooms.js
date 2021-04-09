import React from 'react'
import { ChatCard, ChatEngineWrapper, ChatList, Socket } from 'react-chat-engine'


const Chats = () => {
    return (
        <div style={{ height: '100vh' }}>
            <ChatEngineWrapper style={{ height: '100vh' }}>
                <Socket 
                    projectID='3f78a1ff-b807-4a82-b8e1-aeab29b74a34'
                    userName='Tetris'
                    userSecret='123123'
                />
                
                <ChatList 
                    style={{ height: '100vh' }} 
                    renderChatCard={(chat, index) => <ChatCard />}
                />                        
            </ChatEngineWrapper>
            
        </div>
    )
}

export default Chats;