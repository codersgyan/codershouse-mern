import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audioElements: {},
    connections: {},
    socket: null,
    localMediaStream: null,
    clientsRef: [],
};

export const webRTCSlice = createSlice({
    name: 'webRTC',
    initialState,
    reducers: {
        setSocket(state, action) {
            state.socket = action.payload;
        },
        setClientsRef(state, action) {
            state.clientsRef = action.payload;
        },
        setLocalMediaStream(state, action) {
            state.localMediaStream = action.payload;
        },
    },
});

export const { setSocket, setClientsRef, setLocalMediaStream } =
    webRTCSlice.actions;

export default webRTCSlice.reducer;
