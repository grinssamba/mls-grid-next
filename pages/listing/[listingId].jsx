import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import RiSlider from '../../components/RiSlider';

const SingleListing = () => {
  const { query } = useRouter();

  const [data, setdata] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/listing/${query.listingId}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [query.listingId]);

  const sliderImages = data?.Media?.map((el) => {
    return el.MediaURL;
  });

  console.log('data', sliderImages);

  return (
    <div>
      <div className="flex [&>div]:flex-1 items-center space-x-5 border-b">
        <RiSlider items={sliderImages || []} />
        <div>
          <h1 className="font-bold text-gray-800 text-4xl ">
            #{data?.ListingId}
          </h1>
          <p className="mb-5 text-gray-500">{data?.Directions}</p>

          <h2 className="text-lg font-bold text-gray-600">Public Remarks</h2>
          <p className="text-gray-700">{data?.PublicRemarks}</p>

          <h2 className="text-lg font-bold text-gray-600 mt-5">Room Types</h2>
          <ul className="mb-5 grid grid-cols-2 list-disc list-inside text-gray-700">
            {data?.RoomType?.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      </div>

      <h1 className="font-bold text-3xl mb-5 mt-20 text-blue-600">
        Full Details
      </h1>

      <div className="text-gray-800 grid md:grid-cols-2 gap-5">
        {data &&
          Object.entries(data).map((el, i) => {
            return (
              (typeof el[1] === 'string' || typeof el[1] === 'number') && (
                <div key={i} className="border-b py-2">
                  <span className="font-bold">{el[0]}: </span>
                  <span> {el[1]}:</span>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default SingleListing;
