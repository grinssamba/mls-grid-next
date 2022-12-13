import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import { data } from './listingsData.js';

const Listing = () => {
  // // const [data, setdata] = useState([]);
  // const [loading, setloading] = useState(false);
  // const [page, setpage] = useState(1);

  // useEffect(() => {
  //   setloading(true);
  //   axios
  //     .get(`http://localhost:4000/listing?page=${page}`)
  //     .then((res) => {
  //       setdata(res.data);
  //       setloading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [page]);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700 my-5">Listings</h1>

      {/* {loading ? (
        <h1>Loading... </h1>
      ) : ( */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-[12px] gap-y-[60px]">
        {data?.value.map((el, i) => (
          <ListingCard key={i} data={el} />
        ))}
      </div>
      {/* )} */}
    </>
  );
};

export default Listing;
