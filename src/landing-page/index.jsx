import Navbar from "../navbar/index"
import HeroSection from "./hero-section"
import CTASection from "../ui/cta"
import InfiniteScroll from "../ui/infinite-scroll"
import Testimonial from "../ui/testimonials"
import Sidebar from "./sidebar"
import testimonials from "../constants/landing-page-testinomial"
import fulldashoard from "../assets/video/full-dashboard.mp4"
import aiassistant from "../assets/Images/ai-assistant.png"
const LandingPage = () => {
  return (
    <div className="flex flex-col gap-y-[24px]  ">
      <Navbar />
      <HeroSection title="Inbox collaborations for teams that run on email" description="See what’s going on, know who’s doing what, and collaborate behind the scenes — without changing your workflow." video={fulldashoard} />
      <InfiniteScroll />
      {/* -------------------------designed for Collaboration-------------------------- */}

      <div className="flex flex-col items-center gap-y-6  max-w-[1280px] mx-auto">
      
      {/* Content Section */}
      <div className="flex flex-col gap-y-6 w-full ">
        <h1 className="text-[20px] font-title font-bold tracking-wide text-blue-300  ">
            Designed for Collaboration
        </h1>
        <p className=" text-[46px] font-title leading-[45px] text-justify">
          See what’s going on and collaborate behind the scenes - without changing your workflow.
        </p>

        
      </div>

      
      
    </div>
    <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-y-2">
      <h1 className="">pen</h1>
      <p className="sm:text-lg md:text-xl font-title font-medium">Discuss, review, and get things done with your team.</p>
      <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">Easily help one another with information and context, before the email is sent.</p>
      {/* <video src={fulldashoard} autoPlay loop muted className="w-full h-full object-cover"></video> */}
      <img src={aiassistant} className="w-full h-full object-center" alt="" />
      </div>
     

      {/* -------------------------two video section-------------------------- */}
      <div className="flex justify-between sm:flex-row flex-col md:space-x-4">
        <div className="flex flex-col gap-y-2 ">
          <h1 className="">pen</h1>
          <p className="sm:text-lg md:text-xl font-title font-medium">Discuss, review, and get things done with your team.</p>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">Easily help one another with information and context, before the email is sent.</p>
          <div className="flex justify-center bg-gray-300 rounded-md p-3">
          <img src={aiassistant} className="w-full h-full object-center" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
        <h1 className="">pen</h1>
          <p className="sm:text-lg md:text-xl font-title font-medium">Discuss, review, and get things done with your team.</p>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">Easily help one another with information and context, before the email is sent.</p>
          <div className="flex justify-center bg-gray-300 rounded-md p-3">
          <img src={aiassistant} className="w-full h-full object-center" alt="" />
          </div>
        </div>

      </div>



    </div>

    <div className="flex flex-col items-center gap-y-6 bg-gray-100 pb-10 w-full mx-auto">
      
      {/* Content Section */}
      <div className="flex flex-col gap-y-6 w-full text-center max-w-[1280px] mx-auto mt-10">
        <h1 className="text-[20px] font-title font-bold tracking-wide text-blue-300  ">
            Designed for Collaboration
        </h1>
        <p className=" text-[46px] font-title leading-[45px] ">
          See what’s going on and collaborate behind the scenes - without changing your workflow.
        </p>

        
      </div>

      <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-y-2">
      <h1 className="">pen</h1>
      <p className="sm:text-lg md:text-xl font-title font-medium">Discuss, review, and get things done with your team.</p>
      <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">Easily help one another with information and context, before the email is sent.</p>
      <img src={aiassistant} className="w-full h-full object-center" alt="" />
      </div>
     

      {/* -------------------------two video section-------------------------- */}
      <div className="flex justify-between sm:flex-row flex-col md:space-x-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="">pen</h1>
          <p className="sm:text-lg md:text-xl font-title font-medium">Discuss, review, and get things done with your team.</p>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">Easily help one another with information and context, before the email is sent.</p>
         
        </div>
        <div className="flex flex-col gap-y-2">
        <h1 className="">pen</h1>
          <p className="sm:text-lg md:text-xl font-title font-medium">Discuss, review, and get things done with your team.</p>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">Easily help one another with information and context, before the email is sent.</p>
 
        </div>

      </div>



    </div>

      
      
    </div>

    <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto" >
    <div className="flex flex-col gap-y-2">
      <h1 className="font-title font-bold text-blue-300 text-[20px] tracking-wide">Designed for flexibility</h1>
      <p className="text-gray-500 text-base text-[40px] font-title">Make pen work for you.</p>
      </div>
      <Sidebar />

    </div>
   

    

    

     
      <Testimonial testimonials={testimonials} />
      <CTASection />
    </div>
  );
};

export default LandingPage;
