// import React, {useState,useEffect,useCallback} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSocket } from '../providers/socket'

// const Homepage = () => {
//     const {socket} = useSocket();

//     const [email,setEmail] = useState("");
//     const [roomId,setRoomId] = useState("");
//     const navigate = useNavigate();

//     const handleRoomJoined = useCallback(({roomId})=>{
//         console.log("Successfully joined room:",roomId);
//         navigate(`/room/${roomId}`);
//     },[navigate]);

//     useEffect(()=>{
//         socket.on('joined-room',handleRoomJoined);
//         return()=>{
//             socket.off('joined-room',handleRoomJoined);
//         }
//     },[handleRoomJoined,socket]);

//     const handleJoinRoom = ()=>{
//             socket.emit('join-room',{
//                 roomId,
//                 userEmail:email
//             });
//     }
//   return (
//     <div className='homepage-container'>
//         <div className='input-container'>
//             <input type="email" placeholder='enter your email' value={email} onChange={e=> setEmail(e.target.value)}/>
//             <input type="text" value={roomId} onChange={e=> setRoomId(e.target.value)} placeholder='enter your room' />
//             <video
//   autoPlay
//   playsInline
//   ref={(el) => {
//     if (el && remoteStream) el.srcObject = remoteStream;
//   }}
//   width="300"
// />

//         </div>
//     </div>
//   )
// }

// export default Homepage


import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../providers/socket';
import { usePeer } from '../providers/Peer';

const Homepage = () => {
    const { socket } = useSocket();
    const { remoteStream } = usePeer();

    const [email, setEmail] = useState("");
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const handleRoomJoined = useCallback(({ roomId }) => {
        console.log("Successfully joined room:", roomId);
        navigate(`/room/${roomId}`);
    }, [navigate]);

    useEffect(() => {
        socket.on('joined-room', handleRoomJoined);
        return () => socket.off('joined-room', handleRoomJoined);
    }, [handleRoomJoined, socket]);

    const handleJoinRoom = () => {
        if (!email || !roomId) {
            alert("Enter both email and room ID");
            return;
        }
        socket.emit('join-room', { roomId, userEmail: email });
    };

    return (
        <div className='homepage-container'>
            <div className='input-container'>
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Enter room ID' 
                    value={roomId} 
                    onChange={e => setRoomId(e.target.value)}
                />
                <button onClick={handleJoinRoom}>Join Room</button>

                {/* Optional remote preview */}
                <video
                    autoPlay
                    playsInline
                    ref={(el) => {
                        if (el && remoteStream) el.srcObject = remoteStream;
                    }}
                    width="300"
                />
            </div>
        </div>
    );
};

export default Homepage;
