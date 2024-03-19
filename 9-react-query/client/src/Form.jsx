import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from './utils';
import { toast } from 'react-toastify';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task added');
      setNewItemName('');
    },
    onError: (error) => {
      // console.log(error.response.data.msg);
      toast.error(error.response.data.msg);
    },
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
