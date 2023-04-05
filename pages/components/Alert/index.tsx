import { useEffect } from 'react';

interface AlertProps {
  msg: string;
  type: string;
  removeAlert: () => void;
  list: { id: string; title: string }[];
}

const Alert = ({ msg, type, removeAlert, list }: AlertProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  return (
    <article>
      <div
        className={` px-2 py-2 text-center text-white inline-block rounded-lg   ${
          type === 'success' ? 'bg-green-600' : 'bg-red-700'
        }`}
      >
        {msg}
      </div>
    </article>
  );
};

export default Alert;
