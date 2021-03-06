import React, { useContext, useEffect, useRef, useState } from 'react'

import { ChatEngineContext } from './credLog'

import { getLatestChats } from './actions/chats'

import _ from 'lodash'

import ChatLoader from './ChatLoader'

import ChatForm from './NewChatForm'
import ChatCard from './ChatCard'

let count = 13
const interval = 13



const ListOfRooms = (props) => {

    const didMountRef = useRef(false)
    const [hasMoreChats, setHasMoreChats] = useState(true)
    const { chats, setChats, activeChat, setActiveChat } = useContext(ChatEngineContext)

    function renderChats(chats) {
        return chats.map((chat, index) => {
            if (!chat) return <div key={`chat_${index}`} />

            if (props.renderChatCard) {
                return <div key={`chat_${index}`}>{props.renderChatCard(chat, index)}</div>
                
            } else {
                return (
                    <div 
                        key={`chat_${index}`}
                        onClick={() => props.onChatClick && props.onChatClick()}
                    >
                        <ChatCard chat={chat} />
                    </div>
                )
            }
        })
    }

    function sortChats(chats) {
        return chats.sort((a, b) => { 
            const aDate = a.last_message.created ? new Date(a.last_message.created) : new Date(a.created)
            const bDate = b.last_message.created ? new Date(b.last_message.created) : new Date(b.created)
            return new Date(bDate) - new Date(aDate); 
        })
    }

    function onGetChats(chats, count) {
        const chatList = sortChats(chats)
    
        if (chatList.length > 0 && activeChat === null) {
            setActiveChat(chatList[0].id)
        }

        if(count && count > chatList.length) { setHasMoreChats(false) }
        
        const newChats = {...chats}
        setChats(_.mapKeys(newChats, 'id'))
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true
            getLatestChats(props, interval, (chats) => onGetChats(chats))
        }
    })

    function loadChats() {
        count = count + interval
        getLatestChats(props, count, (chats) => onGetChats(chats, count))
    }

    const chatList = sortChats(chats ? Object.values(chats) : [])

    if (props.renderChatList) return props.renderChatList(props)

    return (
        <div style={styles.chatListContainer} className='ce-chat-list'>
            <div style={styles.chatsContainer} className='ce-chats-container'>
                { renderChats(chatList) } 

                { hasMoreChats && chatList.length > 0 && <ChatLoader onVisible={() => loadChats()} /> }

                <div style={{ height: '64px' }} />

                {
                    props.renderNewChatForm ?
                    props.renderNewChatForm(props) :
                    <div style={styles.newChatContainer} className='ce-chat-form-container'>
                        <ChatForm className='ce-chat-form' />
                    </div>
                }
            </div>
        </div>
    )
}

export default ListOfRooms;