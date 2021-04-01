import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';

const Room = () => {
	
    return (
		<>
			<div>
                <Header />
            </div>
			

			
            <div className="bg-brown-white w-full flex-col h-full mb-24">
				<div className="h-full w-screen z-0">
					<ChatEngine
						height="100vh"
						userName="Tetris"
						userSecret="123123"
						projectID="3f78a1ff-b807-4a82-b8e1-aeab29b74a34"
						renderChatFeed={(chatroomProps) => <ChatFeed {... chatroomProps} /> }
						
					/>
				</div>
			</div>
			

			<div>
                <Footer />
            </div>
		</>
    )
}

export default Room;