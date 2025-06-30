import { emitNewRating } from "../socketEmitters/ratingEmitter.js";

export const ratingHandler = (socket, io) => {
    socket.on('new-rating', (data) => {
        emitNewRating(io, data);
    })
}