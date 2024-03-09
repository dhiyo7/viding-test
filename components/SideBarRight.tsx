'use client';

import {
  Tingredients,
  addDefaultValue,
  deleteDefaultValue,
  onEdit,
} from '@/redux/features/ingredients-slice';
import {
  addInstructions,
  deleteInstructions,
} from '@/redux/features/instructions.slice';
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline, MdOutlineCancel } from 'react-icons/md';

const SidebarRight = () => {
  const dispatch = useDispatch();
  const { data } = useAppSelector((state) => state.instructions);
  const dataIngredients = useAppSelector((state) => state.ingredients.data);
  const isEdit = useAppSelector((state) => state.ingredients.isEdit);
  const { ingredients, measure } = useAppSelector(
    (state) => state.ingredients.defaultValue
  );

  const handleAddInstructions = (value: string) => {
    dispatch(addInstructions(value));
  };

  const onChangeMeasure = (values: string) => {
    dispatch(
      addDefaultValue({
        ingredients,
        measure: values,
      } as Tingredients)
    );
  };

  const onBlurMeasure = () => {
    dispatch(
      addDefaultValue({
        ingredients,
        measure,
      } as Tingredients)
    );
    dispatch(onEdit(false));
    dispatch(deleteInstructions());
  };

  const onBlurIngredient = () => {
    dispatch(
      addDefaultValue({
        ingredients,
        measure,
      } as Tingredients)
    );
    dispatch(onEdit(false));
    dispatch(deleteInstructions());
  };

  const onChangeIngredients = (values: string) => {
    dispatch(
      addDefaultValue({
        measure,
        ingredients: values,
      } as Tingredients)
    );
  };

  const onTataCara = () => {
    dispatch(addDefaultValue({ measure: '1kg', ingredients: 'Apel' }));
  };

  const onDelete = () => {
    dispatch(deleteDefaultValue());
    dispatch(deleteInstructions());
  };

  const onEditMode = () => {
    dispatch(onEdit(true));
  };

  const onCancelEdit = () => {
    dispatch(onEdit(false));
  };

  return (
    <div className='flex flex-col gap-3'>
      <div>
        <input
          placeholder='Nama Resep'
          className='px-4 py-2 rounded-md border border-gray-300 w-full'
        />
      </div>

      <div>
        <p>Bahan:</p>
        <div className='grid md:grid-cols-3 gap-4 items-center'>
          {isEdit ? (
            <>
              {measure && ingredients && (
                <>
                  <input
                    placeholder='contoh 2kg'
                    className='px-4 py-2 rounded-md border border-gray-300 w-full'
                    defaultValue={measure}
                    onChange={(e) => onChangeMeasure(e.target.value)}
                    onBlur={onBlurMeasure}
                  />
                  <select
                    className='px-4 py-2 rounded-md border border-gray-300 w-full'
                    defaultValue={ingredients}
                    onChange={(e) => onChangeIngredients(e.target.value)}
                    onBlur={onBlurIngredient}
                  >
                    <option value=''>Pilih bahan</option>
                    {dataIngredients.map((value, index) => (
                      <option key={index} value={value.ingredients}>
                        {value.ingredients}
                      </option>
                    ))}
                  </select>

                  <div className='flex gap-1'>
                    <span className='cursor-pointer' onClick={onCancelEdit}>
                      <MdOutlineCancel className='text-xl' />
                    </span>
                    <span className='cursor-pointer' onClick={onDelete}>
                      <MdDeleteOutline className='text-xl' />
                    </span>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <p>{measure}</p>
              <p>{ingredients}</p>
              {measure && ingredients && (
                <div className='flex gap-1'>
                  <span className='cursor-pointer' onClick={onEditMode}>
                    <CiEdit className='text-xl' />
                  </span>
                  <span className='cursor-pointer' onClick={onDelete}>
                    <MdDeleteOutline className='text-xl' />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-3 mt-8'>
        <span
          onClick={!measure && !ingredients ? onTataCara : () => {}}
          className={!measure && !ingredients ? 'cursor-pointer' : ''}
        >
          Tata cara:
        </span>
        <ol>
          {data.map((value, index) => (
            <li key={index}>
              {index + 1}. {value}
            </li>
          ))}
        </ol>
        <input
          placeholder='Input tata cara'
          className='px-4 py-2 rounded-md border border-gray-300 w-full'
          onKeyPress={(e) =>
            e.key === 'Enter' && handleAddInstructions(e.currentTarget.value)
          }
        />
      </div>
    </div>
  );
};

export default SidebarRight;
