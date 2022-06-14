import "./Home.scss";

import Logo from "../../assests/page1/Logo.png";

import LeftArrow from "../../assests/page3/LeftArrow.png";
import RightArrow from "../../assests/page3/RightArrow.png";

import page2logo1 from "../../assests/page2/distance.png";
import page2logo2 from "../../assests/page2/travel.png";
import page2logo3 from "../../assests/page2/walk.png";

import image1 from "../../assests/page3/image1.png";
import image2 from "../../assests/page3/image2.png";

import location1 from "../../assests/page4/location1.png";
import location2 from "../../assests/page4/location2.png";
import location3 from "../../assests/page4/location3.png";
import location4 from "../../assests/page4/location4.png";
import clockIcon from "../../assests/page4/clock.png";

import amadeus from "../../assests/page5/partner-amadeus.png";
import booking from "../../assests/page5/partner-booking.com.png";
import trivago from "../../assests/page5/partner-trivago.png";
import trainline from "../../assests/page5/partner-trainline.png";
import cheapflights from "../../assests/page5/partner-cheapflights.png";
import momondo from "../../assests/page5/partner-momondo.png";

import city1 from "../../assests/page6/city1.png";
import city2 from "../../assests/page6/city2.png";
import city3 from "../../assests/page6/city3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IconCard from "../IconCard";
import LocationCard from "../LocationCard/LocationCard";
import CityCard from "../CityCard";

const navItems = [
  {
    text: "find a trip",
    link: ""
  },
  {
    text: "destinations",
    link: ""
  },
  {
    text: "why Dtravel",
    link: ""
  },
  {
    text: "contact",
    link: ""
  }
];

const page2IconItems = [
  {
    icon: page2logo1,
    title: "Select Destination",
    desc: "At first choose the place you wanted to go"
  },
  {
    icon: page2logo2,
    title: "Book a Trip",
    desc: "Book your trip from our exclusive sponsors"
  },
  {
    icon: page2logo3,
    title: "Take your Flight",
    desc: "Take your flight on selected date and enjoy"
  }
]

const locationItems = [
  {
    image: location1,
    title: "Spain Places",
    icon: clockIcon,
    duration: "7 Days/6 Nights",
    price: "$544.00"
  },
  {
    image: location2,
    title: "Japa Places",
    icon: clockIcon,
    duration: "7 Days/6 Nights",
    price: "$544.00"
  },
  {
    image: location3,
    title: "London Places",
    icon: clockIcon,
    duration: "7 Days/6 Nights",
    price: "$544.00"
  },
  {
    image: location4,
    title: "Canada Places",
    icon: clockIcon,
    duration: "7 Days/6 Nights",
    price: "$544.00"
  }
]

// const partnerLogos = [
//   [amadeus, booking, trivago, trainline],
//   [cheapflights, momondo]
// ]

const partnerLogos = [
  [{ image: amadeus, height: "27px", width: "205px" }, { image: booking, height: "34px", width: "205px" } , { image: trivago, height: "52px", width: "205px" }, { image: trainline, height: "44px", width: "205px" }],
  [{ image: cheapflights, height: "27px", width: "180px" } , { image: momondo, height: "32px", width: "205px" }]
]

const cities = [
  {
    country: "Japan",
    place: "Japan",
    image: city1,
    subtext: "10 Popular Places"
  },
  {
    country: "Indonesia",
    place: "Bali",
    image: city2,
    subtext: "10 Popular Places"
  },
  {
    country: "Barcelona",
    place: "Spain",
    image: city3,
    subtext: "10 Popular Places"
  }
]

const Home = () => {

  const page1 = () => {
    return (
      <div className="landing-page-container">
        <div className="navbar-container">
          <img src={Logo}/>
          <div>
            {navItems.map((item) => {
              return <a className="navbar-item" href={item.link}>{item.text}</a>
            })}
          </div>
          <button className="navbar-button">Create Account</button>
        </div>
        <div>
          <div className="main-title" style={{marginTop: "20vh"}}>Exploring The World</div>
          <div className="main-title">In Comfort.</div>
          <div className="main-subtitle" style={{marginTop: "2vh"}}>You do not have the right to remain silent... let us know</div>
          <div className="main-subtitle">what it takes to challenge you</div>
        </div>
      </div>
    )
  }

  const page2 = () => {
    return (
      <div className="section-2-container">
        <div className="section-2-text-container">
          <div className="section-2-title">We Provide Best</div>
          <div className="section-2-desc">Take high quality online courses from the best online instrictors</div>
          <div className="section-2-desc">around the world & develop your skills.</div>
        </div>
        <div className="section-2-icon-items-container">
        {page2IconItems.map((iconItem) => {
          return <IconCard icon={iconItem.icon} title={iconItem.title} desc={iconItem.desc} />
        })}
        </div>
      </div>
    )
  }

  const page3 = () => {
    return (
      <div className="section-3-container">
        <div className="section-3-main-text-container">
          <div style={{minWidth: "30vw"}}>
            <div className="section-3-sub-header">About Us</div>
            <div className="section-3-main-header">Explore all corners of</div> 
            <div className="section-3-main-header">the world with us.</div>
          </div>
          <div className="section-3-main-desc">
            These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series of focus groups comprising of parents.
          </div>
        </div>
        <div style={{width: "50vw", margin: "0 25% 10%", display: "flex", justifyContent: "center"}}>
        <Carousel showThumbs={false} autoPlay={true}>
          <div>
            <img src={image1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={image2} />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
        </div>
      </div>
    )
  }

  const page4 = () => {
    return (
      <div className="section-4-container">
        <div>
          <div className="section-4-header">Featured Tour Places</div>
          <div className="section-4-subtitle" style={{marginTop: "1%"}}>There are many variations of passages of Lorem Ipsum available,</div>
          <div className="section-4-subtitle" style={{marginBottom: "3%"}}>but the majority have suffered alteration.</div>  
        </div>
        <div className="location-cards-container">
          {locationItems.map((locationItem) => {
            return (
            <LocationCard 
              title={locationItem.title}
              image={locationItem.image}
              icon={locationItem.icon}
              duration={locationItem.duration}
              price={locationItem.price}/>
            )
          })}
        </div>
      </div>
    )
  }

  const page5 = () => {
    return (
      <div className="section-5-container">
        <div className="section-5-text-container">
          <div className="section-5-title">Our Tour Partner</div>
          <div className="section-5-subtitle" style={{marginTop: "3%"}}>There are many variations of passages of Lorem Ipsum available,</div>
          <div className="section-5-subtitle" style={{marginBottom: "5%"}}>but the majority have suffered alteration.</div>
        </div>
        <div>
          {/* {partnerLogos.map((arrayItem) => {
            return <div style={{display: "flex"}}>
              {arrayItem.map((item) => {
                return <img src={item}/>
              })}
            </div>
          })} */}
          {partnerLogos.map((arrayItem) => {
            return <div className="partner-logos-container">
              {arrayItem.map((item) => {
                return <img src={item.image} height={item.height} width={item.width}/>
              })}
            </div>
          })}
        </div>
      </div>
    )
  }

  const page6 = () => {
    return (
      <div className="section-6-container">
        <div style={{display: "flex", justifyContent: "space-between", padding: "2% 8%"}}>
          <div className="section-text-container">
            <div className="section-6-subheading">Top Cities</div>
            <div className="section-6-heading">Our popular cities</div>
            <div className="section-6-text">We’re a team of humans with the strategy, tools,</div>
            <div className="section-6-text">and solutions and digital products.</div>
          </div>
          <div>
            <img src={LeftArrow} />
            <img src={RightArrow} />
          </div>
        </div>
        <div className="cities-container">
          {cities.map((city) => {
            return <CityCard image={city.image} country={city.country} place={city.place} subtext={city.subtext}/>
          })}
        </div>
      </div>
    )
  }

  return (
    <div>
      {page1()}
      {page2()}
      {page3()}
      {page4()}
      {page5()}
      {page6()}
    </div>
  );
}
 
export default Home;