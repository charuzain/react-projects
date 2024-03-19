import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';
const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });

  const { isLoading, data, error, isError } = result;
  console.log(isLoading);
  console.log(error); // axios error
  console.log(isError); //booelan

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (error) {
    // return <p>{error.message}</p>; // display axios error
    return <p>{error.response.data}</p>; // display error message send by server
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
