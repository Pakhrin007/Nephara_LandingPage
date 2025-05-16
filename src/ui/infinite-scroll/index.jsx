import bookings from "../../assets/Images/bookings.png";
import facebook from "../../assets/Images/facebook.png";
import linkedin from "../../assets/Images/linkedin.png";
import microsoft from "../../assets/Images/microsoft.png";
import uber from "../../assets/Images/uber.png";
import netflix from "../../assets/Images/netflix.png";

const logos = [bookings, facebook, linkedin, microsoft, uber, netflix];

const InfiniteScroll = () => {
  return (
    <div className="relative max-w-[1280px] overflow-hidden py-4 bg-white mx-auto">
      {/* Left gradient fade */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      {/* Right gradient fade */}
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex animate-loop-scroll whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-16 w-auto mx-6 inline-block aspect-[4/2]"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
