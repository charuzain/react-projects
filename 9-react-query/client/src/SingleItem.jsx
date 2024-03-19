import { QueryClient, useMutation } from "@tanstack/react-query";
import customFetch from "./utils";

const SingleItem = ({ item }) => {

  const queryClient = new QueryClient();

  const result = useMutation({
    mutationFn: ({ taskId, isDone }) => { return customFetch.patch(`/${taskId}`) },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['tasks']})
    }
})

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() =>
          result.mutate({ taskId: item.id, isDone: !item.isDone })
        }
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => console.log('delete task')}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
