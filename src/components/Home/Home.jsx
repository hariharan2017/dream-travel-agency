import "./Home.scss";
import IconCard from "../IconCard";

import Logo from "../../assests/page1/Logo.png";
import page2logo1 from "../../assests/page2/distance.png";
import page2logo2 from "../../assests/page2/travel.png";
import page2logo3 from "../../assests/page2/walk.png";


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

  return (
    <div>
      {page1()}
      {page2()}
    </div>
  );
}
 
export default Home;