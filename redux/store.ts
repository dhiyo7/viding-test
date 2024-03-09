import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import ingredientsReducer from '@/redux/features/ingredients-slice';
import instructionsReducer from '@/redux/features/instructions.slice';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    instructions: instructionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
