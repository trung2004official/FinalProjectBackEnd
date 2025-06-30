export const emitNewRating = (io, data) => {
    io.emit('update-rating', data);
}