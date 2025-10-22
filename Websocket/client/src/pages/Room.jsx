// import React from 'react'
// import {useSocket} from '../providers/socket'
// import ReactPlayer from 'react-player'
// import { useEffect ,useState} from 'react';
// import { usePeer } from '../providers/Peer';
// import { useCallback } from 'react';

// const RoomPage = () => {
//     const {socket} = useSocket();
//     const {peer,createOffer,createAnswer,setRemoteAns} = usePeer();
//     const [myStream, setMyStream] = useState(null);

//     const handleNewUserJoined = useCallback(async(data)=>{
//         const {userEmail} = data
//         console.log('New user joined room',userEmail);
//         const offer = await createOffer();
//         socket.emit('call-user',{userEmail,offer});
//     },
//     [createOffer,socket]
// );
// const handleIncomingCall= useCallback(async(data)=>{
//     const {from,offer} = data;
//     console.log("Incoming call from", from,offer);
//     const ans = await createAnswer(offer);
//     socket.emit('call-accepted',{userEmail:from,ans});
// },[createAnswer,socket]);

// const handleCallAccepted = useCallback(async(data)=>{
//     const {ans} = data;
//     await setRemoteAns(ans);
//     console.log('call got accepted',ans);
// },[setRemoteAns])

// const getUserMediaStream = useCallback(async()=>{
//     const stream = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
//     setMyStream(stream);
// },[])
    
//     useEffect(()=>{
//         socket.on('user-joined',handleNewUserJoined)
//         socket.on('incoming-call',handleIncomingCall);
//         socket.on('call-accepted',handleCallAccepted);

//         return()=>{
//             socket.off('user-joined',handleNewUserJoined);
//             socket.off('incoming-call',handleIncomingCall);
//             socket.off('call-accepted',handleCallAccepted);
//         }

//     },[ handleIncomingCall, handleCallAccepted, handleNewUserJoined,socket])

//     useEffect(()=>{
//         getUserMediaStream();
//     },[getUserMediaStream])

//   return (
//     <div className='room-page-container'>
//         <h1>Room Page</h1>
//         <ReactPlayer url = {myStream} playing muted />
//     </div>
    
//   )
// }

// export default RoomPage


// import React, { useEffect, useState, useCallback } from 'react';
// import { useSocket } from '../providers/socket';
// import { usePeer } from '../providers/Peer';
// import ReactPlayer from 'react-player';


// const RoomPage = () => {
//   const { socket } = useSocket();
//   const { peer, createOffer, createAnswer, setRemoteAns ,sendStream,remoteStream} = usePeer();
//   const [myStream, setMyStream] = useState(null);
// const [remoteEmailId,setRemoteEmailId] = useState();
//   const handleNewUserJoined = useCallback(async (data) => {
//     const { userEmail } = data;
//     console.log('New user joined room', userEmail);
//     const offer = await createOffer();
//     socket.emit('call-user', { userEmail, offer });
//     setRemoteEmailId(userEmail);
//   }, [createOffer, socket]);

//   const handleIncomingCall = useCallback(async (data) => {
//     const { from, offer } = data;
//     console.log('Incoming call from', from, offer);
//     const ans = await createAnswer(offer);
//     socket.emit('call-accepted', { userEmail: from, ans });
//     setRemoteEmailId(from);
//   }, [createAnswer, socket]);

//   const handleCallAccepted = useCallback(async (data) => {
//     const { ans } = data;
//     await setRemoteAns(ans);
//     console.log('Call got accepted', ans);

//   }, [setRemoteAns]);

//  const getUserMediaStream = useCallback(async () => {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
//     setMyStream(stream);
//     stream.getTracks().forEach(track => peer.addTrack(track, stream));
//   } catch (error) {
//     console.error("Media access error:", error);
//     alert("Please allow camera and microphone access in your browser settings.");
//   }
// }, []);


//   useEffect(() => {
//     socket.on('user-joined', handleNewUserJoined);
//     socket.on('incoming-call', handleIncomingCall);
//     socket.on('call-accepted', handleCallAccepted);

//     return () => {
//       socket.off('user-joined', handleNewUserJoined);
//       socket.off('incoming-call', handleIncomingCall);
//       socket.off('call-accepted', handleCallAccepted);
//     };
//   }, [handleIncomingCall, handleCallAccepted, handleNewUserJoined, socket]);

//   const handleNegotiation = useCallback(()=>{
//     const localOffer = peer.localDescription;

//     socket.emit('call-user',{userEmail:remoteEmailId,offer:localOffer})
//       console.log('negotiation needed');
//   },[peer.localDescription,remoteEmailId,socke]);

//   useEffect(()=>{
//     peer.addEventListener("negotiationneeded",handleNegotiation);
//     return ()=>{
//         peer.removeEventListener("negotiationneeded",handleNegotiation);
//     }
//   },[])

//   useEffect(() => {
//     getUserMediaStream();
//   }, [getUserMediaStream]);

//   return (
//     <div className='room-page-container'>
//       <h1>Room Page</h1>
//       <h4>You are connected to {remoteEmailId}</h4>
//       <button  onClick={(e)=> sendStream(myStream)}>Send my video</button>
//       <ReactPlayer url={myStream} playing muted />
//       <ReactPlayer url={remoteStream} playing />
//     </div>
//   );
// };

// export default RoomPage;




import React, { useEffect, useState, useCallback } from "react";
import { useSocket } from "../providers/socket";
import { usePeer } from "../providers/Peer";

const RoomPage = () => {
  const { socket } = useSocket();
  const { createOffer, createAnswer, setRemoteAns, sendStream, remoteStream } = usePeer();
  const [myStream, setMyStream] = useState(null);
  const [remoteEmailId, setRemoteEmailId] = useState(null);

  const handleNewUserJoined = useCallback(async ({ userEmail }) => {
    setRemoteEmailId(userEmail);
    const offer = await createOffer();
    socket.emit("call-user", { userEmail, offer });
  }, [createOffer, socket]);

  const handleIncomingCall = useCallback(async ({ from, offer }) => {
    setRemoteEmailId(from);
    const ans = await createAnswer(offer);
    socket.emit("call-accepted", { userEmail: from, ans });
  }, [createAnswer, socket]);

  const handleCallAccepted = useCallback(async ({ ans }) => {
    await setRemoteAns(ans);
  }, [setRemoteAns]);

  const getUserMediaStream = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setMyStream(stream);
      await sendStream(stream); // Send once
    } catch (err) {
      console.error(err);
      alert("Please allow camera and microphone access.");
    }
  }, [sendStream]);

  useEffect(() => { getUserMediaStream(); }, [getUserMediaStream]);

  useEffect(() => {
    socket.on("user-joined", handleNewUserJoined);
    socket.on("incoming-call", handleIncomingCall);
    socket.on("call-accepted", handleCallAccepted);

    return () => {
      socket.off("user-joined", handleNewUserJoined);
      socket.off("incoming-call", handleIncomingCall);
      socket.off("call-accepted", handleCallAccepted);
    };
  }, [socket, handleNewUserJoined, handleIncomingCall, handleCallAccepted]);

  return (
    <div className="room-page-container">
      <h1>Room Page</h1>
      <h4>Connected to: {remoteEmailId || "..."}</h4>

      {/* Local video */}
      <video
        autoPlay
        muted
        playsInline
        ref={el => el && myStream && (el.srcObject = myStream)}
        width="300"
      />

      {/* Remote video */}
      <video
        autoPlay
        playsInline
        ref={el => el && remoteStream && (el.srcObject = remoteStream)}
        width="300"
      />
    </div>
  );
};

export default RoomPage;


