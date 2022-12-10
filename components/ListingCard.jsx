import Image from 'next/image';
import Link from 'next/link';

const ListingCard = ({ data }) => {
  return (
    <div className="border rounded shadow-lg">
      {/* image */}
      <div className="relative">
        <div className="bg-green-500 font-bold text-sm px-3 py-1 text-white absolute top-0 left-0">
          For Sale
        </div>
        {data?.Media?.length ? (
          <Image
            src={data.Media[0].MediaURL}
            alt="listing_image"
            width={240}
            height={240}
            className="w-full h-[240px] object-cover border-b"
          />
        ) : (
          <div className="w-full h-[240px] object-cover border-b bg-gray-500" />
        )}
        <h3 className="absolute right-0 bottom-0 text-white font-bold text-xl px-5 py-3 bg-gray-900/50 backdrop-blur-sm">
          ${data.ListPrice}
        </h3>
      </div>

      {/* details */}
      <div className="p-3 ">
        <h1 className="font-semibold text-lg text-gray-800">
          {data.MapCoordinateSource}
        </h1>
        <h2 className="font-thin text-gray-500">{data.PostalCity}</h2>
        <div className="text-sm text-gray-700">#{data.ListingId}</div>
        <Link
          href={`/listing/${data.ListingId}`}
          className="bg-blue-600 block w-fit ml-auto hover:bg-blue-500 text-white font-bold rounded hover px-3 py-1"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
