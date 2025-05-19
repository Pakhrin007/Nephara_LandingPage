import Navbar from "../navbar/index";
import HeroSection from "./hero-section";
import CTASection from "../ui/cta";
import InfiniteScroll from "../ui/infinite-scroll";
import Testimonial from "../ui/testimonials";
import Sidebar from "./sidebar/index";
import testimonials from "../constants/landing-page-testimonial/index";
import fulldashoard from "../assets/video/full-dashboard.mp4";
import aiassistant from "../assets/Images/ai-assistant.png";
import Svg1 from "../assets/Images/svg/svg1";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-y-8 bg-gray-50 min-h-screen font-body">
      <Navbar />
      <HeroSection
        title="Inbox collaborations for teams that run on email"
        description="See what’s going on, know who’s doing what, and collaborate behind the scenes — without changing your workflow."
        video={fulldashoard}
      />
      <InfiniteScroll />

      {/* Designed for Collaboration Section */}
      <div className="flex flex-col items-center py-12 px-4 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-y-2 w-full">
          <h1 className="text-3xl font-mono  text-blue-300">
            Designed for Collaboration
          </h1>
          <p className="text-2xl font-sans text-gray-900 ">
            See what’s going on and collaborate behind the scenes – without changing your workflow. Empower your team to share insights, communicate in real-time, and streamline decisions effortlessly.
          </p>
        </div>
      </div>

      {/* AI-Driven Team Support Sections */}
      <div className="flex flex-col gap-y-12 px-4 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <Svg1 />
          </div>
          <h2 className="text-2xl font-sans font-medium">Discuss, review, and get things done with your team.</h2>
          <p className="text-gray-500 text-lg font-sans leading-normal">
            Easily help one another with information and context, before the email is sent.
          </p>
          <img src={aiassistant} className="w-full h-auto object-cover rounded-lg" alt="AI Assistant" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <Svg1 />
            </div>
            <h2 className="text-2xl font-sans font-medium">AI-Driven Team Support</h2>
            <p className="text-gray-500 text-lg font-sans leading-normal">
              Easily help one another with information and context, before the email is sent.
            </p>
            <div className="flex justify-center bg-gray-200 rounded-md p-4">
              <img src={aiassistant} className="w-full h-auto object-cover" alt="AI Assistant" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <Svg1 />
            </div>
            <h2 className="text-2xl font-sans font-medium">AI-Driven Team Support</h2>
            <p className="text-gray-500 text-lg font-sans leading-normal">
              Easily help one another with information and context, before the email is sent.
            </p>
            <div className="flex justify-center bg-gray-200 rounded-md p-4">
              <img src={aiassistant} className="w-full h-auto object-cover" alt="AI Assistant" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Designed for Collaboration Section */}
      <div className="flex flex-col gap-y-12 bg-gray-100 py-12 w-full mx-auto">
        <div className="flex flex-col gap-y-2 md:ml-64 px-4 max-w-[1280px] ">
          <h1 className="text-3xl font-mono font-medium text-blue-300 ">
            Designed for Collaboration
          </h1>
          <p className="text-2xl font-sans font-body">
            See what’s going on and collaborate behind the scenes - without changing your workflow.
          </p>
        </div>

        <div className="flex flex-col gap-y-6 mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <Svg1 />
            </div>
            <h2 className="text-xl font-sans font-medium">AI-Driven Team Support</h2>
            <p className="text-gray-500 text-lg font-sans leading-normal">
              Easily help one another with information and context, before the email is sent.
            </p>
            <img src={aiassistant} className="w-full h-auto object-cover rounded-lg" alt="AI Assistant" />
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="flex-1 flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <Svg1 />
              </div>
              <h2 className="text-xl font-sans font-medium">AI-Driven Team Support</h2>
              <p className="text-gray-500 text-lg font-sans leading-normal">
                Easily help one another with information and context, before the email is sent.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <Svg1 />
              </div>
              <h2 className="text-xl font-sans font-medium">AI-Driven Team Support</h2>
              <p className="text-gray-500 text-lg font-sans leading-normal">
                Easily help one another with information and context, before the email is sent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Designed for Flexibility Section */}
      <div className="flex flex-col gap-y-12 py-2 max-w-[1280px] w-full mx-auto ">
        <div className="flex flex-col gap-y-2 mb-2">
        <h1 className="text-3xl font-mono text-blue-300 ">
            Make pen work for you.
          </h1>
          <p className="text-2xl font-sans font-body">
            See what’s going on and collaborate behind the scenes - without changing your workflow.
          </p>
        </div>
        <Sidebar />
      </div>

      <Testimonial testimonials={testimonials} />
      <CTASection />
    </div>
  );
};

export default LandingPage;