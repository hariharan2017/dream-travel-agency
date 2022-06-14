import "./CityCard.scss";

const CityCard = ({ image, country, place, subtext }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})`}}
      className="city-card-container"
    >
      <div>
        <span className="city-card-country">{country}</span>
      </div>
      <div className="city-card-bottom-container">
        <div className="city-card-place">{place}</div>
        <div className="city-card-subtext">{subtext}</div>
      </div>
    </div>
  );
};

export default CityCard;
