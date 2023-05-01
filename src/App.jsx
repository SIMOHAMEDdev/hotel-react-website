import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './components/Header'
import Rent from './components/Rent'
import Offers from './components/Offers'
import Advantages from './components/Advantages'
import Rooms from './components/Rooms'
import Banner from './components/Banner'
import Reviews from './components/Reviews'
import Map from './components/Map'
import Slider from './components/Slider'
import logo from './images/logo.png'

function App() {
  const Data = [
    {
      name: 'Jenny Wilson',
      id: '@Jennycat',
      desc: "That was the best hotel i've been to in a long time! Wonderful resting zones and cheap rooms with a great view.",
      class: "customer-img"
    },
    {
      name: 'Leslie Alexander',
      id: '@Leslll_',
      desc: "Honestly,that is the best place in georgia out of the ones I have been to. Great staff, comfortable rooms and great resting zones!",
      class: "customer-img o2"
    },
    {
      name: 'Bessie Cooper',
      id: '@Cooper_bessieee',
      desc: "We have travelled here from another country and did not regret it! Pleasant conditions and the best prices",
      class: "customer-img o3"
    },
    {
      name: 'Alexa Kenton',
      id: '@Alexa_3',
      desc: "That was the best hotel i've been to in a long time! Wonderful resting zones and cheap rooms with a great view.",
      class: "customer-img o4"
    }
  ]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const review = Data.map((item)=>(
    <Slider name={item.name}
    id={item.id}
    desc={item.desc}
    class={item.class}/>
  ))
  return (
    <div className="container">
      <Header />
      <Rent />
      <Offers />
      <Advantages />
      <Rooms />
      <Banner />
      <Carousel showDots={true} responsive={responsive}>
        {review}
      </Carousel>
      <Reviews />
      <Map />
      <footer>
        <div className="footer">
        <div className="rights">
          <img src={logo} alt="" className='logo'/>
          <span className="all">© All Rights Reserved</span>
          <button className="call">Place a call</button>
        </div>
        <ul className='ul1'>
          <li className='first-li'>Navigation</li>
          <li className='li1'>Home</li>
          <li className='li1'>Top Choises</li>
          <li className='li1'>Our Assortment</li>
          <li className='li1'>Hotel Rooms</li>
          <li className='li1'>Our Advantages</li>
          <li className='li1'>Reviews</li>
        </ul>
        <ul className='ul1'>
          <li className='first-li'>Rooms</li>
          <li className='li1'>Standard Room</li>
          <li className='li1'>Deluxe Room</li>
          <li className='li1'>Superior Room</li>
          <li className='li1'>Suite Room</li>
          <li className='li1'>Premier Suit</li>
          <li className='li1'>President Suit</li>
        </ul>
        <ul className='ul1'>
          <li className='first-li'>About Us</li>
          <li className='li1'>Contacts</li>
          <li className='li1'>Blog</li>
          <li className='li1'>Privacy Policy</li>
          <li className='li1'>Terms of Use</li>
        </ul>
        <ul className='ul1'>
          <li className='first-li'>Other</li>
          <li className='li1'>Refunds</li>
          <li className='li1'>Investor Relations</li>
          <li className='li1'>Business</li>
          <li className='li1'>Events</li>
        </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
