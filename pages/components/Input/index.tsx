import React from 'react';
import { addToTodoList, setTodoo, buttony } from '@/redux/features/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SyntheticEvent } from 'react';
import { RootState } from '@/redux/store';

const Input = () => {
  const dispatch = useDispatch();

  const { todo } = useSelector((store: RootState) => store.home);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addToTodoList(todo));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex items-center gap-[6px] mb-[64px]'
      >
        <input
          type='text'
          className='py-[14px] pl-[18px] w-full rounded-xl border border-black'
          placeholder='Enter todo'
          required
          value={todo.name}
          onChange={(e) => dispatch(setTodoo(e.target.value))}
        />
        <button
          type='submit'
          className='bg-[#a61e4d] hover:bg-[#fff0f6] hover:text-black duration-300 text-white py-[14px] px-[16px] rounded-xl'
        >
          Add
        </button>
      </form>
      <button
        type='submit'
        className='bg-[#a61e4d] hover:bg-[#fff0f6] hover:text-black duration-300 text-white py-[14px] px-[16px] rounded-xl'
        onClick={() => dispatch(buttony(todo))}
      >
        edit
      </button>
    </div>
  );
};

export default Input;
