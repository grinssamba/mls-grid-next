import Image from 'next/image';
import Link from 'next/link';

const ListingCard = ({ data }) => {
  return (
    <div className="group">
      {/* image */}
      <div className="relative rounded-2xl overflow-hidden">
        {data?.Media?.length ? (
          <Image
            src={data.Media[0].MediaURL}
            alt="listing_image"
            width={250}
            height={140}
            className="w-full h-[140px] object-cover"
          />
        ) : (
          <div className="w-full h-[140px] bg-gray-500" />
        )}
        <h3 className="hidden group-hover:block absolute top-0 left-0 rounded-br-[20px] text-white font-bold text-base px-4 py-1 bg-gray-900/50 backdrop-blur-sm">
          ${data.ListPrice}
        </h3>
      </div>

      {/* details */}
      <div className=" ">
        <h1 className="font-semibold text-lg text-gray-800">
          {data.MapCoordinateSource}
        </h1>
        <h2 className="font-thin text-gray-500">{data.PostalCity}</h2>
        <div className="text-sm text-gray-700">#{data.ListingId}</div>
      </div>
    </div>
  );
};

export default ListingCard;
