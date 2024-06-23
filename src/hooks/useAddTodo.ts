import { useState } from 'react';

const useAddTodo = () => {
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  return { title, details, setTitle, setDetails };
};

export default useAddTodo;
