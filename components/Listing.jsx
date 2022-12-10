import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';

const Listing = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [limit, setlimit] = useState(20);
  const [page, setpage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/listing?page=${page}&limit=${limit}`)
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, [limit, page]);

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
      <br />

      <div className="my-5 py-5 text-center border-t">
        <div className="w-fit mx-auto mb-5">
          <h3 className="text-gray-600 font-bold mb-2">Data per page</h3>
          <div className="flex gap-4">
            {[10, 20, 50, 100].map((el, i) => (
              <div
                key={i}
                onClick={() => setlimit(el)}
                className={`rounded bg-blue-500 hover:bg-blue-400 text-white font-bold px-3 cursor-pointer py-1 ${
                  el === limit ? 'bg-gray-400' : ''
                }`}
              >
                {el}
              </div>
            ))}
          </div>
        </div>

        <div className="w-fit mx-auto">
          <h3 className="text-gray-600 font-bold mb-2">Page No</h3>
          <div className="flex gap-4 flex-wrap justify-center">
            {new Array(500 / limit).fill(null).map((el, i) => (
              <div
                key={i}
                onClick={() => setpage(i)}
                className={`rounded bg-blue-500 hover:bg-blue-400 text-white font-bold px-3 cursor-pointer py-1 ${
                  i === page ? 'bg-gray-400' : ''
                }`}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
