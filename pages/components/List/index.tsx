import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface ListProps {
  list: { id: string; title: string }[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

const List = ({ list, removeItem, editItem }: ListProps) => {
  return (
    <div>
      <div>
        <span className='font-bold'>Total todos: {list?.length}</span>
      </div>
      {list?.map((li) => {
        const { id, title } = li;
        return (
          <div
            key={id}
            className='flex items-center border mt-[30px] rounded-lg border-[#a61e4d] py-3 px-6 justify-between bg-white w-1/2 mb-[20px]'
          >
            <span> {title}</span>

            <div className='flex items-center gap-2'>
              <span>
                <AiFillEdit
                  className='cursor-pointer'
                  onClick={() => editItem(id)}
                />
              </span>
              <span>
                <AiFillDelete
                  className='text-red-700 cursor-pointer'
                  onClick={() => removeItem(id)}
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
