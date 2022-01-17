import { io } from "./express.js";

// THIS IS CALLED BY THE EXPRESS LOADER.
const socketLoader = () => {
  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
    socket.on("join", (room) => {
      socket.join(room);
    });
  });
}

export default socketLoader;