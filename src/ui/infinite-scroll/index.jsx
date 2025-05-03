import bookings from "../../assets/Images/bookings.png";
import facebook from "../../assets/Images/facebook.png";
import linkedin from "../../assets/Images/linkedin.png";
import microsoft from "../../assets/Images/microsoft.png";
import uber from "../../assets/Images/uber.png";
import netflix from "../../assets/Images/netflix.png";

const logos = [bookings, facebook, linkedin, microsoft, uber, netflix];

const InfiniteScroll = () => {
  return (
    <div className="max-w-[1280px] overflow-hidden py-4 bg-white mx-auto">
      <div className="flex animate-loop-scroll whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="h-16 w-auto mx-6 inline-block aspect-4/2"
          />
        ))}
      </div>

      
    </div>
  );
};

export default InfiniteScroll;
