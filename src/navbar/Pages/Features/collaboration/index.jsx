import { useState } from 'react';
import Navbar from '../../../../navbar/index';
import HeroSection from '../../../../landing-page/hero-section/index';
import Sidebar from './sidebar/index';
import video from '../../../../assets/video/video.mp4';
import InfiniteScroll from '../../../../ui/infinite-scroll';
import Testimonial from '../../../../ui/testimonials';
import CTASection from '../../../../ui/cta';
import collaborationTestimonials from '../../../../constants/collaboration-testinomial/index';
import aiassistant from "../../../../assets/Images/ai-assistant.png";

// Reusable card component
const CollaborationCard = ({ subtitle, description, image }) => (
  <div className="flex flex-col gap-y-2 w-full">
    <p className="sm:text-lg md:text-xl font-title font-medium text-gray-800">{subtitle}</p>
    <p className="text-gray-600 text-base sm:text-lg md:text-xl font-title">{description}</p>
    {image && (
      <div className="flex justify-center bg-gray-100 rounded-md p-3">
        <img src={image} alt="Collaboration in action" className="w-full h-auto object-contain" />
      </div>
    )}
  </div>
);

const Collaboration = () => {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <Navbar />

      <HeroSection
        title="Collaboration for Smarter Decision Making"
        description="Leverage collaboration to analyze emails, extract key points, and boost your team's productivity effortlessly."
        video={video}
      />

      <InfiniteScroll />

      {/* Main Collaboration Section */}
      <section className="flex flex-col items-center gap-y-10 max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col gap-y-6 w-full">
          <h1 className="text-[20px] font-title font-bold tracking-wide text-blue-300">
            Designed for Collaboration
          </h1>
          <p className="text-[28px] text-gray-900 text-justify">
            See what’s going on and collaborate behind the scenes – without changing your workflow.
            Empower your team to share insights, communicate in real-time, and streamline decisions effortlessly.
          </p>
        </div>

        <CollaborationCard
          subtitle="Work as one team"
          description="Discuss, review, and get things done with your team. Share context, provide feedback, and stay aligned—before the email is even sent."
          image={aiassistant}
        />

        {/* Two-column section */}
        <div className="flex justify-between sm:flex-row flex-col md:space-x-4 w-full gap-y-6">
          <CollaborationCard
            subtitle="Real-time collaboration"
            description="Stay in sync with your teammates as you collaborate live on emails, notes, and decisions. No more waiting for replies or switching between tools."
            image={aiassistant}
          />
          <CollaborationCard
            subtitle="Smarter decision-making"
            description="Use built-in AI to summarize conversations, highlight key points, and offer suggestions—all while working in your natural workflow."
            image={aiassistant}
          />
        </div>
      </section>

      {/* Additional Section with Different Styling */}
      <section className="flex flex-col items-center gap-y-10 bg-gray-100 py-12 w-full px-4">
        <div className="flex flex-col gap-y-6 text-center max-w-[1280px] mx-auto">
          <h1 className="text-[20px] font-title font-bold tracking-wide text-blue-300">
            Designed for Collaboration
          </h1>
          <p className="text-[32px] sm:text-[38px] md:text-[46px] leading-tight font-title text-gray-900">
            See what’s going on and collaborate behind the scenes – without changing your workflow.
          </p>
        </div>

        <div className="flex flex-col gap-y-8 max-w-[1280px] mx-auto w-full">
          <CollaborationCard
            subtitle="Efficient reviews"
            description="Keep everyone on the same page by centralizing discussions and decisions in one place. Context stays clear and actions move faster."
            image={aiassistant}
          />
          <div className="flex justify-between sm:flex-row flex-col md:space-x-4 w-full gap-y-6">
            <CollaborationCard
              subtitle="Context-aware suggestions"
              description="Leverage AI to offer timely suggestions, detect risks, and keep conversations productive."
            />
            <CollaborationCard
              subtitle="Cross-functional coordination"
              description="Help teams across departments stay aligned with shared visibility and seamless communication."
            />
          </div>
        </div>
      </section>

      {/* Sidebar and Final Section */}
      <section className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-title font-bold text-blue-300 text-[20px] tracking-wide">Designed for flexibility</h1>
          <p className="text-gray-800 text-[28px] sm:text-[36px] md:text-[40px] font-title font-semibold">
            Make collaboration work for you.
          </p>
        </div>
        <Sidebar />
      </section>

      <Testimonial testimonials={collaborationTestimonials} />
      <CTASection />
    </div>
  );
};

export default Collaboration;
