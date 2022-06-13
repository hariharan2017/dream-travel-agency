import "./IconCard.scss";

const IconCard = ({ icon, title, desc }) => {
  return (
    <div className="icon-card-container">
      <div className="icon-div"><img src={icon} height={"90px"} width={"90px"}/></div>
      <div className="icon-card-title">{title}</div>
      <div className="icon-card-desc">{desc}</div>
    </div>
  );
}
 
export default IconCard;