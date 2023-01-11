import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const AppState = JSON.parse(localStorage.getItem('item')) || []

export const itemSlice = createSlice({
	name: 'items',
	AppState,
	reducers: {
		itemAdd: (state, action) => {
            const newItem = {
                uuid: uuidv4(),
                itemName: action.payload.itemName,
                itemStatus: false
            };
            state.push(newItem);
        },
		itemToggle: (state, action) => {
			const index = state.findIndex((todo) => todo.uuid === action.payload.uuid);
			state[index].itemStatus = action.payload.itemStatus;
		},
		itemDelete: (state, action) => {
			return state.filter((todo) => todo.uuid !== action.payload.uuid);
		},
	}
});

export const { itemAdd, itemToggle, itemDelete } = itemSlice.actions;

export default itemSlice.reducer;