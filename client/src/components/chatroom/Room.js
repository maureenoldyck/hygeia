import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';

const Room = () => {
    return (
        <ChatEngine
			height="100vh"
			userName="Tetris"
			userSecret="123123"
			projectID="3f78a1ff-b807-4a82-b8e1-aeab29b74a34"
			renderChatFeed={(chatroomProps) => <ChatFeed {... chatroomProps} /> }
		/>
    )
}

export default Room;