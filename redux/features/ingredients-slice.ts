import { dataIngredients } from '@/data/dataIngredients';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Tingredients = {
  measure: string;
  ingredients: string;
};

type defaultValue = {
  measure: string;
  ingredients: string;
};

type initialState = {
  data: string[];
  defaultValue: defaultValue;
  isEdit: boolean;
};

const initialState = {
  data: dataIngredients,
  defaultValue: {
    measure: '',
    ingredients: '',
  },
  isEdit: false,
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addDefaultValue: (state, action: PayloadAction<defaultValue>) => {
      state.defaultValue = action.payload;
    },
    onEdit: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload;
    },
    deleteDefaultValue: (state) => {
      state.defaultValue = {
        measure: '',
        ingredients: '',
      };
    },
  },
});

export const { addDefaultValue, onEdit, deleteDefaultValue } =
  ingredientsSlice.actions;
export default ingredientsSlice.reducer;
