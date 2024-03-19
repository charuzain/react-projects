import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from './utils';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const result = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
  });
  console.log(result);
  let isLoading = result.isLoading;
  let addTask = result.mutate;
    console.log(isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newItemName);
  
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
