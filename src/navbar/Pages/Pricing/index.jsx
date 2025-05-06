import Navbar from "../../index";

const Pricing = () => {
    return (
        <>
        <Navbar />
      <div className="py-16 ">
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-gray-800 font-title text-center">Pay-for-what-you-use pricing</h1>
        <p className="text-gray-600 mb-6 font-title text-center">Try Missive risk-free for 30 days. No credit card required.</p>
  
        <div className="flex justify-center items-center gap-2 mb-10">
          <span className="text-gray-600 font-title font-semibold">Billed yearly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked readOnly />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">20% off</span>
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Starter */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 border-gray-200 flex flex-col gap-y-4">
            <h2 className="text-[30px] font-semibold mb-2 font-title">Starter</h2>
            <div className="flex flex-col ">
                <p className="text-3xl font-bold mb-1 font-title">$14<span className="text-base font-normal font-title"> per user/month</span></p>
                <p className="text-sm text-gray-500 mb-4 font-title">Billed yearly</p>
            </div>
            
            <ul className="text-left space-y-2 text-sm text-gray-700">
              <li className="font-title text-[16px]">✓ Email, SMS, social accounts</li>
              <li className="font-title text-[16px]">✓ Team spaces and inboxes</li>
              <li className="font-title text-[16px]">✓ Conversations and tasks</li>
              <li className="font-title text-[16px]">✓ SOC 2 Type II compliance</li>
            </ul>
          </div>
  
          {/* Productive */}
          <div className="border rounded-lg p-6 shadow-md bg-white border-gray-200 flex flex-col gap-y-4    ">
            <h2 className="text-[30px] font-semibold mb-2 font-title">Productive</h2>
            <div className="flex flex-col ">
                <p className="text-3xl font-bold mb-1 font-title">$24<span className="text-base font-normal font-title"> per user/month</span></p>
                <p className="text-sm text-gray-500 mb-4 font-title">Billed yearly</p>
            </div>
            
            <ul className="text-left space-y-2 text-sm text-gray-700">
              <li className="font-title text-[16px]">✓ Everything in <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">Starter</span> plus</li>
              <li className="font-title text-[16px]">✓ Integrations with external tools</li>
              <li className="font-title text-[16px]">✓ Rules & automations</li>
              <li className="font-title text-[16px]">✓ Basic analytics & reporting</li>
              <li className="font-title text-[16px]">✓ API access</li>
            </ul>
          </div>
  
          {/* Business */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 border-gray-200 flex flex-col gap-y-4">
            <h2 className="text-[30px] font-semibold mb-2 font-title">Business</h2>
            <div className="flex flex-col ">
                <p className="text-3xl font-bold mb-1 font-title">$36<span className="text-base font-normal font-title"> per user/month</span></p>
                <p className="text-sm text-gray-500 mb-4 font-title">Billed yearly</p>
            </div>
            
            <ul className="text-left space-y-2 text-sm text-gray-700">
              <li className="font-title text-[16px]">✓ Everything in <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs">Productive</span> plus</li>
              <li className="font-title text-[16px]">✓ SAML and SSO</li>
              <li className="font-title text-[16px]">✓ IP restriction</li>
              <li className="font-title text-[16px]">✓ Advanced analytics & reporting</li>
              <li className="font-title text-[16px]">✓ Personalized team onboarding</li>
            </ul>
          </div>
        </div>
  
        <div className="mt-10 flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Try for free
          </button>
        </div>
      </div>
      </>
    );
  };
  
  export default Pricing;
  