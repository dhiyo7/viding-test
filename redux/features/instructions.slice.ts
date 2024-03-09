import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InstructionsState {
  data: string[];
}

const initialState: InstructionsState = {
  data: [],
};

export const instructionsSlice = createSlice({
  name: 'instructions',
  initialState,
  reducers: {
    addInstructions: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);
    },
    deleteInstructions: (state) => {
      state.data = [];
    },
  },
});

export const { addInstructions, deleteInstructions } =
  instructionsSlice.actions;
export default instructionsSlice.reducer;
