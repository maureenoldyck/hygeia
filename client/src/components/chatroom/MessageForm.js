import React, { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
    
    const [value, setValue] = useState('');
    const { creds, chatID } = props;
    console.log(props);
    console.log({creds});

    const handleChange = (event) => {
        setValue(event.target.value);
    
        isTyping(props, chatID);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const text = value.trim();
    
        if (text.length > 0) {
            sendMessage(creds, chatID, { text });
        }
    
        setValue('');
    };
    
    const handleUpload = (event) => {
        sendMessage(creds, chatID, { files: event.target.files, text: '' });
    };

    return (
        <>
            <form className="w-full p-4" onSubmit={handleSubmit}>
                <div className="flex flex-row bg-white rounded-lg">
                    <input
                        type="text"
                        className="w-full min-h-6 h-auto m-2 p-2 bg-brown-sand bg-opacity-25 rounded-md"
                        placeholder="Send a message..."
                        value={value}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                    <div className="flex flex-row w-24 justify-around">
                        <label htmlFor="upload-button">
                            <span className="flex flex-row mt-6">
                                <PictureOutlined className="picture-icon" />
                            </span>
                        </label>
                        <input
                            type="file"
                            multiple={false}
                            id="upload-button"
                            style={{ display: 'none' }}
                            onChange={handleUpload.bind(this)}
                        />
                        <button type="submit" className="flex flex-row mt-6">
                            <SendOutlined className="send-icon" />
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default MessageForm;