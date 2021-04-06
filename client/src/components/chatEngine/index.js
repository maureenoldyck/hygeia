import React, { useContext, useState, useEffect } from 'react'

import user from './.config/chat.config'

import _ from 'lodash'

import { ChatEngine, ChatEngineContext } from 'react-chat-engine'

const ChatEngineApp = props => {
    const { chats, messages, setActiveChat } = useContext(ChatEngineContext)
    const [hasSetLink, setLink] = useState(false)

    useEffect(() => {
        const { id } = props
        if (id && chats && chats[id] && !_.isEmpty(messages) && !hasSetLink) {
            setActiveChat(id)
            setLink(true)
        }
    }, [chats, messages, props, setActiveChat, hasSetLink, setLink])
    console.log(props);

    return (
        <div className="bg-brown-white w-full flex-col h-full mb-24">
            <div className="h-full w-screen z-0">
                <ChatEngine
                    height="100vh"
                    development={!props.prod}
                    userName={user.userName}
                    userSecret={user.userSecret}
                    projectID={user.projectID}
                />
            </div>
        </div>
    )
}

export default ChatEngineApp