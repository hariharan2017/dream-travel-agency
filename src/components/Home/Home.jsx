import "./Home.scss";
import IconCard from "../IconCard";

import Logo from "../../assests/page1/Logo.png";

import page2logo1 from "../../assests/page2/distance.png";
import page2logo2 from "../../assests/page2/travel.png";
import page2logo3 from "../../assests/page2/walk.png";

import location1 from "../../assests/page4/location1.png";
import location2 from "../../assests/page4/location2.png";
import location3 from "../../assests/page4/location3.png";
import location4 from "../../assests/page4/location4.png";
import clockIcon from "../../assests/page4/clock.png";
import LocationCard from "../LocationCard/LocationCard";

import amadeus from "../../assests/page5/partner-amadeus.png";
import booking from "../../assests/page5/partner-booking.com.png";
import trivago from "../../assests/page5/partner-trivago.png";
import trainline from "../../assests/page5/partner-trainline.png";
import cheapflights from "../../assests/page5/partner-cheapflights.png";
import momondo from "../../assests/page5/partner-momondo.png";

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
        <div>
          TODO: Carousel Image Display
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

  return (
    <div>
      {page1()}
      {page2()}
      {page3()}
      {page4()}
      {page5()}
    </div>
  );
}
 
export default Home;