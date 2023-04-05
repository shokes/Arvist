import { useState } from 'react';
import List from './components/List';
import Alert from './components/Alert';
import { SyntheticEvent } from 'react';

const Home = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState<{ id: string; title: string }[]>([]);
  const [isEditing, setIsEditing] = useState<boolean | null>(false);
  const [editID, setEditID] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!item) {
      // display alert

      setAlert({ show: true, msg: 'please enter a', type: 'danger' });
    } else if (item && isEditing) {
      // deal with the editing

      setList(
        list.map((li) => {
          if (li.id === editID) {
            return { ...li, title: item };
          }

          return li;
        })
      );
      setAlert({ show: true, msg: 'Todo changed', type: 'success' });
      setItem('');
      setIsEditing(null);
    } else {
      const newItems = {
        id: new Date().getTime().toString(),
        title: item,
      };
      setList([...list, newItems]);
      setAlert({ show: true, msg: 'Todo added', type: 'success' });
      setItem('');
    }
  };

  const removeItem = (id: string) => {
    const filtered = list.filter((li) => li.id !== id);

    setList(filtered);
  };

  const removeAlert = () => {
    setAlert({ show: false, msg: '', type: '' });
  };

  const editItem = (id: string) => {
    const edited = list.find((li) => li.id === id);
    setIsEditing(true);

    setEditID(id);
    setItem(edited!.title);
  };

  return (
    <section className=' w-[350px] md:w-[600px]  mx-auto my-[60px]'>
      {alert.show && <Alert {...alert} removeAlert={removeAlert} list={list} />}
      <h3 className='text-center font-bold text-3xl mb-[30px]'>Todo App</h3>
      <form
        onSubmit={handleSubmit}
        className='flex items-center gap-[6px] mb-[64px]'
      >
        <input
          type='text'
          placeholder='Enter todo'
          className='py-[14px] pl-[18px] w-full rounded-xl border border-black'
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button className='bg-[#a61e4d] hover:bg-[#fff0f6] hover:text-black duration-300 text-white py-[14px] px-[16px] rounded-xl'>
          {' '}
          {isEditing ? 'Edit' : 'Add'}
        </button>
      </form>

      {list && (
        <div>
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button
            className='bg-[#a61e4d] hover:bg-[#fff0f6] hover:text-black duration-300 rounded-md text-white px-[3px] py-[1px]'
            onClick={() => {
              setList([]);
              setAlert({ show: true, msg: 'cleared', type: 'danger' });
            }}
          >
            Clear all todos
          </button>
        </div>
      )}
    </section>
  );
};

export default Home;
