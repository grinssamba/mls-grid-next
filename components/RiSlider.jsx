import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { AiOutlineFullscreenExit } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiShareForwardBoxFill } from 'react-icons/ri';

const RiSlider = ({ items }) => {
  const [selected, setSelected] = useState(0);
  const [full, setfull] = useState(false);
  const [hovered, sethovered] = useState(false);

  function goPrev() {
    if (selected < 1) {
      return;
    }
    setSelected((prev) => prev - 1);
  }
  function goNext() {
    if (selected === items.length - 1) {
      return;
    }
    setSelected((prev) => prev + 1);
  }
  return (
    <div
      className={`w-full bg-white select-none ${
        full ? 'fixed inset-0 z-50' : 'my-8'
      }`}
    >
      {/* main image */}
      <div
        className="relative w-full bg-gray-900"
        onMouseOver={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
      >
        <Image
          width={1000}
          height={1000}
          src={items[selected]}
          alt=""
          className={`mx-auto w-full aspect-video ${
            full ? 'h-[calc(100vh-124px)] object-contain' : 'object-cover'
          }`}
        />

        {/* controller icons */}
        <div>
          <div
            className={`${
              !hovered ? 'opacity-0' : ''
            } transition-opacity absolute top-5 right-[100px] text-white p-2 rounded-full cursor-pointer bg-blue-500/50`}
          >
            <RiShareForwardBoxFill size={24} />
          </div>

          <div
            className={`${
              !hovered ? 'opacity-0' : ''
            } transition-opacity absolute top-5 right-5 text-white p-2 rounded-full cursor-pointer bg-blue-500/50`}
          >
            <MdOutlineFavoriteBorder size={24} />
          </div>

          {!!selected > 0 && (
            <div
              onClick={goPrev}
              className={`${
                !hovered ? 'opacity-0' : ''
              } transition-opacity absolute top-[45%] left-5 text-white p-2 rounded cursor-pointer bg-blue-500/50`}
            >
              <AiOutlineArrowLeft size={24} />
            </div>
          )}

          {!!(selected < items.length - 1) && (
            <div
              onClick={goNext}
              className={`${
                !hovered ? 'opacity-0' : ''
              } transition-opacity absolute top-[45%] right-5 text-white p-2 rounded cursor-pointer bg-blue-500/50`}
            >
              <AiOutlineArrowRight size={24} />
            </div>
          )}

          <div
            onClick={() => setfull(!full)}
            className={`${
              !hovered ? 'opacity-0' : ''
            } transition-opacity absolute bottom-5 right-5 text-white p-2 rounded cursor-pointer bg-blue-500/50`}
          >
            {full ? (
              <AiOutlineFullscreenExit size={24} />
            ) : (
              <AiOutlineFullscreen size={24} />
            )}
          </div>
        </div>
      </div>

      {/* slider */}
      <div
        className={`flex gap-2 py-2 overflow-auto [&::-webkit-scrollbar]:bg-blue-500/20 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-blue-500 [&::-webkit-scrollbar-thumb]:rounded-full ${
          full ? 'bg-gray-900' : ''
        }`}
      >
        {items.map((el, i) => (
          <Image
            width={400}
            height={400}
            onClick={() => setSelected(i)}
            key={i}
            src={el}
            alt=""
            className={`w-20 md:w-[100px] aspect-square object-cover border-2 cursor-pointer ${
              i === selected ? 'border-blue-500' : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RiSlider;
