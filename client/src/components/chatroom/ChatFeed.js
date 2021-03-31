import React from 'react';
import MessageForm from './MessageForm';
import UserMessage from './UserMessage';
import RecievingMessage from './RecievingMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];
    console.log(chat, userName, messages);

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];

            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isUserMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isUserMessage
                            ? <UserMessage message={message} />
                            : <RecievingMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>

                    <div className="read-receipts" style={{ marginRight: UserMessage ? '18px' : '0px', marginLeft: UserMessage ? '0px' : '68px' }}>
                            read-receipts
                    </div>
                </div>
            );
        });
    };

    if (!chat) return 'Loading ...';

    return (
        <div id="Chat-feed">
            <div id="room-title">
                {chat.title}
            </div>
            
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div id="message-form-container">
                <MessageForm { ...props } chatId={activeChat} />
            </div>
        </div>
    );
}

export default ChatFeed;