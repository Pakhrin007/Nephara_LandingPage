import { useState } from 'react';
import Navbar from '../../../../navbar/index';
import HeroSection from '../../../../landing-page/hero-section/index';
import Sidebar from '../../../../landing-page/sidebar/index';
import video from '../../../../assets/video/video.mp4';
import InfiniteScroll from '../../../../ui/infinite-scroll';
import Testimonial from '../../../../ui/testimonials';
import CTASection from '../../../../ui/cta';
import aiAssistantTestimonials from '../../../../constants/ai-assistant-testinomial/index';
import aiAssistant from "../../../../assets/Images/ai-assistant.png"
import Ai from "../../../../assets/Images/Ai.jpg"
const AiAssistant = () => {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <Navbar />

      <HeroSection
        title="AI Assistant for Smarter Collaboration"
        description="Leverage AI to analyze emails, extract key points, and boost your team's productivity effortlessly."
        video={video}
      />
      <InfiniteScroll />

      <div className="flex flex-col items-center gap-y-6 max-w-[1280px] mx-auto">
        {/* Content Section */}
        <div className="flex flex-col gap-y-6 w-full">
          <h1 className="text-[20px] font-title font-bold tracking-wide text-blue-300">
            Designed for Collaboration
          </h1>
          <p className="text-[46px] font-title leading-[45px] text-justify">
            Our AI assistant integrates seamlessly with your workflow, helping your team stay aligned, focused, and informed in real-time.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-title font-bold text-[24px]">Smarter Workflows</h1>
          <p className="sm:text-lg md:text-xl font-title font-medium">
            Let AI guide your team through smarter discussions, automatic summarization, and contextual awareness.
          </p>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">
            With intelligent email previews and key insight extraction, every message becomes an opportunity for efficiency.
          </p>
          <img src={aiAssistant} alt="ai-assistant" className="w-full h-full object-cover" />
        </div>

        {/* Two-column section */}
        <div className="flex justify-between sm:flex-row flex-col md:space-x-4">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-title font-bold text-[24px]">AI-Driven Team Support</h1>
            <p className="sm:text-lg md:text-xl font-title font-medium">
              Empower your team with AI-driven collaboration that understands your goals.
            </p>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">
              AI detects priorities, surfaces decisions, and ensures everyone is informed—before you even hit send.
            </p>
            <div className="flex justify-center bg-gray-300 rounded-md p-3">
              <img src={aiAssistant} alt="ai-assistant" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-title font-bold text-[24px]">AI-Powered Communication</h1>
            <p className="sm:text-lg md:text-xl font-title font-medium">
              Deliver clearer, more effective communication with AI-enhanced writing and review.
            </p>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">
              Get proactive suggestions, content restructuring, and language improvements on the fly.
            </p>
            <div className="flex justify-center bg-gray-300 rounded-md p-3">
              <img src={aiAssistant} alt="ai-assistant" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-6 bg-gray-100 pb-10 w-full mx-auto">
        {/* Content Section */}
        <div className="flex flex-col gap-y-6 w-full text-center max-w-[1280px] mx-auto mt-10">
          <h1 className="text-[20px] font-title font-bold tracking-wide text-blue-300">
            Designed for Collaboration
          </h1>
          <p className="text-[46px] font-title leading-[45px]">
            See what’s going on and collaborate behind the scenes - without changing your workflow.
          </p>
        </div>

        <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-y-2">
            <h1 className="font-title font-bold text-[24px]">AI Makes It Easier</h1>
            <p className="sm:text-lg md:text-xl font-title font-medium">
              Collaborate seamlessly with AI-enhanced support that adapts to your team’s pace.
            </p>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">
              Automatically track changes, feedback, and context—so everyone stays on the same page.
            </p>
            <img src={Ai} alt="ai-assistant" className="w-full h-full object-cover" />
          </div>

          {/* Two-column section */}
          <div className="flex justify-between sm:flex-row flex-col md:space-x-4">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-title font-bold text-[24px]">Real-Time Insights</h1>
              <p className="sm:text-lg md:text-xl font-title font-medium">
                Let AI surface action items, tasks, and critical points from your emails and messages.
              </p>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">
                Reduce time spent deciphering long threads with clear, concise summaries.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-title font-bold text-[24px]">Smarter Email Drafting</h1>
              <p className="sm:text-lg md:text-xl font-title font-medium">
                Use AI to draft responses, edit tone, and ensure clarity in every email.
              </p>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl font-title">
                Make sure your intent is delivered with accuracy and professionalism, effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-title font-bold text-blue-300 text-[20px] tracking-wide">
            Designed for Flexibility
          </h1>
          <p className="text-gray-500 text-base text-[40px] font-title">
            Customize AI workflows to adapt to your team’s unique needs—whether it’s summarizing meetings or drafting emails.
          </p>
        </div>
        <Sidebar />
      </div>

      <Testimonial testimonials={aiAssistantTestimonials} />
      <CTASection />
    </div>
  );
};

export default AiAssistant;
