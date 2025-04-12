import React from 'react';

const Stats = ({ items }) => {
  const totalItem = items.length;
  const numItemPacked = items.filter((item) => item.isPacked === true).length;
  let percentPacked;
  if (numItemPacked > 0) {
    percentPacked = Math.floor((numItemPacked / totalItem) * 100);
  }

  return (
    <div>
      <p>
        You have {totalItem} items on your list, and you have already packed
        {` ${numItemPacked} `} {numItemPacked > 1 ? 'items' : 'item'} (
        {percentPacked ? percentPacked : '0'} %)
      </p>
    </div>
  );
};

export default Stats;
