import Image from 'next/image';
import Header from '../components/Header';
import ad from '../public/images/AD.jpg';
import bing from '../public/images/bing.png';
import cd from '../public/images/CB.jpg';
import cnn from '../public/images/cnn.png';
import dailyMail from '../public/images/dailyMail.png';
import forbes from '../public/images/forbes.webp';
import global from '../public/images/global.png';
import yandex from '../public/images/yandex.jpg';
import Mailchimp from '../public/images/Mailchimp.png';

const supportedBy = [
  global,
  yandex,
  cd,
  cnn,
  ad,
  bing,
  dailyMail,
  forbes,
  Mailchimp,
  yandex,
  global,
  yandex,
  cd,
  cnn,
  ad,
  bing,
  dailyMail,
  forbes,
  Mailchimp,
  yandex,
];

export default function About() {
  function goTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>
      <Header />
      <div id="about" className="text-gray-800">
        <p className="min-h-screen px-5 md:px-10 py-10 md:py-20 text-center bg-black text-white text-6xl">
          Tomorrow needs a real estate group. One that lives ahead of the curve.
          One that looks forward when everything else goes sideways. Tomorrow
          needs a group that acts like a scrappy upstart, even though it’s been
          around for nearly two decades. And can get it done in a day as opposed
          to a week. Tomorrow needs a group that puts you at the center of
          everything it does.
        </p>

        <video autoPlay muted loop className="w-full">
          <source src="/videos/1-Top-1MW-3.mp4" type="video/mp4" />
        </video>

        <div className="px-5 md:px-10 py-10 md:py-20 text-center text-6xl">
          <p>
            A leader in the marketing and sale of real estate. That’s not a
            brag, it’s a promise: to deliver tomorrow’s value — today.
          </p>

          <div className="my-20">
            <h1 className="text-7xl mb-5">Let’s Talk & Text!</h1>
            <a className="text-blue-500" href="tel:612-400-9000">
              612-400-9000
            </a>
          </div>
        </div>

        <video controls className="w-full">
          <source
            src="/videos/1-Mike-Wilen-Final-Black-and-White.mp4#t=2.5"
            type="video/mp4"
          />
        </video>

        <div className="px-5 md:px-10 py-10 md:py-20 text-center text-6xl">
          <p className="font-[500] leading-[80px]">
            Mike Wilen,
            <br /> Real Estate Agent 600+ Listings Sold Representing Seller{' '}
            <br />
            14+ Awards <br /> 40,000+ Portfolio Valuations <br /> 200+ REO’s
            Sold Representing Seller <br /> Coldwell Banker Global Luxury
          </p>
          <p className="text-blue-500 font-[500] leading-[80px]">
            Fox News – Super Bowl Rental <br /> Business Journal – Listed at
            $2.6M <br /> Star Tribune – Home Sales <br /> USA Today – Historic
            Victorian <br /> Star Tribune – Queen Anne Mansion
          </p>

          <div className="my-20 font-[500] leading-[80px]">
            <h1 className="text-7xl mb-5">24/7 Talk & Text</h1>
            <a className="text-blue-500" href="tel:612-400-9000">
              612-400-9000
            </a>
            <h1 className="text-7xl mb-5">Our Inbox Is Always Open</h1>
            <h1 className="text-7xl mb-5">Mike@1MW.com</h1>
          </div>
        </div>

        <video autoPlay muted loop className="w-full">
          <source src="/videos/1-Minnesota-Video.mp4" type="video/mp4" />
        </video>

        <div className="px-5 md:px-10 py-10 md:py-20 text-center text-6xl">
          <p className="font-[500] leading-[80px]">
            NONMLS is a single entry no-code content hub to discover,
            personalize and recommend real estate to consumers – across multiple
            channels. It’s a platform that combines predictive analytics,
            reporting, data analytics, and data integration capabilities,
            natively out-of-the-box. This allows 1MW to uncover and amplify your
            property’s unique value, while modifying misconceptions along the
            way.
          </p>
        </div>

        <video autoPlay muted loop className="w-full">
          <source src="/videos/1-Downtown-Minneapolis.mp4" type="video/mp4" />
        </video>

        <div className="px-5 md:px-10 py-10 md:py-20 text-center text-6xl">
          <div className="my-20 font-[500] leading-[80px]">
            <a className="text-blue-500" href="tel:612-400-9000">
              612-400-9000
            </a>
            <h1 className="text-7xl mb-5">Mike@1MW.com</h1>
          </div>
        </div>

        <div className="px-5 md:px-10 py-10 md:py-20 text-center text-6xl">
          <div className="w-fit mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-20 justify-items-center justify-center">
            {supportedBy.map((el, i) => (
              <Image
                src={el}
                width={100}
                height={100}
                alt={'imageasd'}
                key={i}
                className="h-20 w-20 object-contain grayscale"
              />
            ))}
          </div>
        </div>

        <div
          title="Go To Top"
          onClick={goTop}
          className="bg-blue-500 hover:bg-blue-400 fixed bottom-5 right-5 px-3 py-1 rounded shadow-xl cursor-pointer text-2xl font-bold text-white"
        >
          ^
        </div>
      </div>
    </>
  );
}
