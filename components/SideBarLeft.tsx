'use client';

import {
  Tingredients,
  addDefaultValue,
  onEdit,
} from '@/redux/features/ingredients-slice';
import { deleteInstructions } from '@/redux/features/instructions.slice';
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';

const SidebarLeft = () => {
  const dispatch = useDispatch();
  const { data } = useAppSelector((state) => state.ingredients);
  const handleClick = (value: Tingredients) => {
    dispatch(onEdit(false));
    dispatch(addDefaultValue(value));
    dispatch(deleteInstructions());
  };

  return (
    <div className='flex flex-col items-center '>
      {data.map((value, index) => {
        const payload = {
          ingredients: value.ingredients,
          measure: value.measure,
        };
        return (
          <p
            key={index}
            className='cursor-pointer'
            onClick={() => handleClick(payload)}
          >
            {value.ingredients}
          </p>
        );
      })}
    </div>
  );
};

export default SidebarLeft;
