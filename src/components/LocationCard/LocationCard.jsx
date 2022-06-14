import "./LocationCard.scss";

const LocationCard = ({image, title, icon, duration, price}) => {
  return (
    <div className="location-card-container">
      <img src={image} />
      <div className="location-card-title">{title}</div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex"}}>
          <img src={icon} />
          <div className="location-card-duration" style={{marginLeft: "10px"}}>{duration}</div>
        </div>
        <div className="location-card-pricing">{price}</div>

      </div>
    </div>
  );
}
 
export default LocationCard;