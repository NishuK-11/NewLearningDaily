const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

const app = express();
const io = new Server({
    cors: true,
});

app.use(bodyParser.json());

const emailToSocketMapping = new Map();
const socketToEmailMapping = new Map();

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('join-room', (data) => {
  const { roomId, userEmail } = data;  // ✅ first extract values
  console.log('User', userEmail, "joined room", roomId);  // ✅ now safe to use

  emailToSocketMapping.set(userEmail, socket.id);
  socketToEmailMapping.set(socket.id,userEmail);
  socket.join(roomId);
  socket.emit('joined-room', { roomId });

  // notify others in the room
  socket.broadcast.to(roomId).emit('user-joined', { userEmail });
});

socket.on('call-user',(data)=>{
    const {userEmail,offer} = data;
    const fromEmail = socketToEmailMapping.get(socket.id);
    const socketId = emailToSocketMapping.get(userEmail);
    socket.to(socketId).emit('incoming-call',{from:fromEmail,offer})
})

socket.on('call-accepted',data=>{
    const {userEmail,ans} = data;
    const socketId = emailToSocketMapping.get(userEmail);
    socket.to(socketId).emit('call-accepted',{ans});
})

});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
io.listen(8001);