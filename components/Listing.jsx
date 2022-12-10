import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';

const Listing = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:4000/listing?limit=500')
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700 my-5">Listings</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {data?.map((el, i) => (
            <ListingCard key={i} data={el} />
          ))}
        </div>
      )}
    </>
  );
};

export default Listing;
