import React from 'react';
import { ChatEngineWrapper, ChatSocket, ChatList } from 'react-chat-engine';
import ListOfRooms from './ListOfRooms';
import user from '../chatEngine/.config/chat.config'


const List = () => {

    const prod = false // window.location.host.indexOf('chatengine.io') !== -1

    return (
        <div>
            <ChatEngineWrapper>
                <ChatSocket 
                    development={!prod}
                    projectID={user.projectID}
                    chatID={user.chatID}
                    chatAccessKey={user.accessKey}
                    senderUsername={user.userName}
                /> 

                <ListOfRooms development={!prod}/>                        
            </ChatEngineWrapper>
        </div>
    )
}

export default List;