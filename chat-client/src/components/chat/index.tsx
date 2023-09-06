import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
type Props = {}
const socket = io('http://localhost:7001/index')


const Index = (props: Props) => {
    socket.on('message', message => {
        console.log(message)
    })
    const [messages, setMessages] = useState<any>([]);
    const [message, setMessage] = useState<any>('');

    useEffect(() => {
        socket.on('server', newMessage => {
            console.log(newMessage, 'mes')
            setMessages([...messages, newMessage]);
        });
        socket.on('connect', () => {
            console.log('Connected to server');
        });
        // 监听断开事件
        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    }, [messages]);

    const handleChange = (event: any) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        socket.emit('server', 123123);
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg: any, index: number) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your message"
                    value={message}
                    onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Index