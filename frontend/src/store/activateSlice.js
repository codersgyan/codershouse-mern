import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    avatar: '',
};

export const activateSlice = createSlice({
    name: 'activate',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
    },
});

export const { setName, setAvatar } = activateSlice.actions;

export default activateSlice.reducer;
