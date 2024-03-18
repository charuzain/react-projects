import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';
const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });

  const { isLoading, data } = result;
  console.log(isLoading);


  return (
    <div className="items">
      {isLoading && <p>Loading..... </p>}
      {!isLoading &&
        data.data.taskList.map((item) => {
          return <SingleItem key={item.id} item={item} />;
        })}
    </div>
  );
};
export default Items;
