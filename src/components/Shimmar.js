import { Image, Shimmer } from "react-shimmer";
const Shimmar = () => {
  return (
    <div className="cls-card-wrapper">
    {

        Array(10).fill("").map((e,index)=> <div key={index} className="cls-restrau-cards">
        <Shimmer width={300} height={180} />
        <div className="cls-prod-name">
          <Shimmer height={"25px"} width={280} />
        </div>
        <div className="cls-prod-cuisines">
          <Shimmer height={"25px"} width={280} />
        </div>
        <div className="cls-prod-name">
          <Shimmer height={"25px"} width={280} />
        </div>
      </div>)

    }
    
    
    </div>
  );
};

export default Shimmar;
