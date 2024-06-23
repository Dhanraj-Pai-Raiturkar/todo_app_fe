import { useState } from 'react';

const useUpdateTodo = () => {
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [editDetails, setEditDetails] = useState<boolean>(false);
  const [updatedTitle, setUpdatedTitle] = useState<string>('');
  const [updatedDetails, setUpdatedDetails] = useState<string>('');
  const [updateTodo, setUpdateTodo] = useState<boolean | null>();
  return {
    editTitle,
    editDetails,
    updatedTitle,
    updatedDetails,
    updateTodo,
    setEditTitle,
    setEditDetails,
    setUpdatedTitle,
    setUpdatedDetails,
    setUpdateTodo
  };
};

export default useUpdateTodo;
