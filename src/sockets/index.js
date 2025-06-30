import { ratingHandler } from "./socketHandlers/ratingHandler.js";

export default function initSocket(io) {
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        ratingHandler(socket, io);

        socket.on('disconnect', () => {
            console.log('User disconnected:',socket.id);
        });
    });
}