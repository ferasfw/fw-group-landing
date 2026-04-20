export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#E5E7EB] font-sans antialiased selection:bg-[#FFFFFF] selection:text-[#000000] [text-rendering:optimizeLegibility] overflow-x-hidden">
      
      {/* Navigation / Header - Unified Montserrat CSS Logo */}
      <nav className="w-full px-6 pt-16 pb-12 flex justify-center md:justify-start max-w-7xl mx-auto">
        <div className="inline-flex items-center select-none">
          <span 
            className="text-[2.5rem] md:text-[4rem] font-bold tracking-[0.4em] text-[#FFFFFF] uppercase leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            FW GROUP
          </span>
        </div>
      </nav>

      {/* Hero Section - Brutal 5th Grade Simplicity & High Legibility */}
      <header className="px-6 py-24 md:py-32 w-full max-w-7xl mx-auto flex flex-col items-start text-left border-b border-[#2F2F2F]">
        <h1 className="text-[12vw] md:text-[6rem] lg:text-[7rem] font-serif font-bold text-[#FFFFFF] leading-[0.9] tracking-tight mb-10 uppercase w-full">
          <span className="block">WE FINISH DEALS.</span>
          <span className="block">WE GET YOU PAID.</span>
        </h1>
        <p className="text-[20px] md:text-[22px] font-sans font-normal text-[#E5E7EB] tracking-wide max-w-[800px] leading-[1.7]">
          Most sales stop at the final hurdle. The customer hesitates. The contract stalls. We intervene to secure the signature.
        </p>
      </header>

      {/* The Logic - Centered Monument Hierarchy */}
      <section className="px-6 py-32 lg:py-48 w-full max-w-7xl mx-auto border-b border-[#2F2F2F] flex flex-col items-center text-center">
        <h2 className="text-[10vw] md:text-[5rem] lg:text-[6rem] font-serif font-bold text-[#FFFFFF] leading-[0.9] tracking-tight uppercase mb-20 md:mb-24 lg:mb-32">
          THE LOGIC.
        </h2>
        <h3 className="text-[8vw] md:text-[4.5rem] lg:text-[5rem] font-serif font-bold text-[#E5E7EB] leading-[1.05] tracking-tight max-w-6xl">
          You did the work. We get the signature. Most deals die in the final 10%. We step in with the logic needed to get the customer to say YES.
        </h3>
      </section>

      {/* What We Do - Structured Grid */}
      <section className="w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          <div className="p-12 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-2xl md:text-3xl font-serif font-bold tracking-tight uppercase text-[#FFFFFF] mb-8 leading-tight">
              DESIGN & SERVICE STUDIOS.
            </h4>
            <p className="text-[#E5E7EB] leading-[1.7] tracking-wide text-[20px] md:text-[22px]">
              We close your high-ticket proposals. If a client is stalling on your price or BOQ, we step in to finalize the deal.
            </p>
          </div>

          <div className="p-12 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-2xl md:text-3xl font-serif font-bold tracking-tight uppercase text-[#FFFFFF] mb-8 leading-tight">
              TECH COMPANIES.
            </h4>
            <p className="text-[#E5E7EB] leading-[1.7] tracking-wide text-[20px] md:text-[22px]">
              We bridge the gap between software builds and signed contracts. You build the tool; we ensure the client pays for it.
            </p>
          </div>

          <div className="p-12 md:p-16 lg:p-20 border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-2xl md:text-3xl font-serif font-bold tracking-tight uppercase text-[#FFFFFF] mb-8 leading-tight">
              SECURING PAYMENTS.
            </h4>
            <p className="text-[#E5E7EB] leading-[1.7] tracking-wide text-[20px] md:text-[22px]">
              If an invoice is stalled, we get it cleared. We negotiate firmly so you don't have to compromise your client relationship.
            </p>
          </div>

        </div>
      </section>

      {/* The Protocol / The Way We Work */}
      <section className="px-6 py-32 lg:py-48 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="mb-20 flex flex-col items-start">
          <h2 className="text-[10vw] md:text-[5rem] lg:text-[6rem] font-serif font-bold text-[#FFFFFF] leading-[0.9] tracking-tight uppercase">
            THE PROTOCOL.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          <div className="flex flex-col border-t-2 border-[#2F2F2F] pt-8 w-full">
            <span className="text-xl md:text-2xl tracking-widest uppercase text-[#FFFFFF] font-bold mb-6">
              01. DEDICATED FOCUS.
            </span>
            <span className="text-[#E5E7EB] leading-[1.7] tracking-wide text-[20px] md:text-[22px]">
              We only handle 3 interventions at a time to ensure total commitment to your closing.
            </span>
          </div>

          <div className="flex flex-col border-t-2 border-[#2F2F2F] pt-8 w-full">
            <span className="text-xl md:text-2xl tracking-widest uppercase text-[#FFFFFF] font-bold mb-6">
              02. SUCCESS-DRIVEN.
            </span>
            <span className="text-[#E5E7EB] leading-[1.7] tracking-wide text-[20px] md:text-[22px]">
              We only take a premium once the money is in your account. If you don’t get paid, we don't.
            </span>
          </div>

          <div className="flex flex-col border-t-2 border-[#2F2F2F] pt-8 w-full">
            <span className="text-xl md:text-2xl tracking-widest uppercase text-[#FFFFFF] font-bold mb-6">
              03. STRICT ANONYMITY.
            </span>
            <span className="text-[#E5E7EB] leading-[1.7] tracking-wide text-[20px] md:text-[22px]">
              We act as your external commercial lead. Your deal and your data stay private.
            </span>
          </div>
        </div>
      </section>

      {/* The Intake Gate - Request Intervention */}
      <section className="px-6 py-32 lg:py-48 w-full max-w-5xl mx-auto flex flex-col items-start text-left">
        <h2 className="text-[12vw] md:text-[4.5rem] lg:text-[6rem] font-serif font-bold text-[#FFFFFF] tracking-tight mb-8 uppercase leading-none">
          REQUEST INTERVENTION.
        </h2>
        <p className="text-[20px] md:text-[22px] text-[#E5E7EB] font-sans tracking-wide leading-[1.7] max-w-3xl mb-24">
          State the obstacle (e.g., stalled signature, price shock, outstanding payment).
        </p>

        {/* SECURE DATA CAPTURE */}
        <form 
          action="https://formspree.io/f/xgoroljy" 
          method="POST" 
          className="w-full flex flex-col gap-16 text-left"
        >
          <div className="flex flex-col md:flex-row gap-16 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="name" className="text-lg tracking-widest uppercase text-[#FFFFFF] mb-6 font-bold">NAME / COMPANY</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-5 text-[#E5E7EB] text-[22px] tracking-wide focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="Your Name or Company"
              />
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="email" className="text-lg tracking-widest uppercase text-[#FFFFFF] mb-6 font-bold">EMAIL ADDRESS</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-5 text-[#E5E7EB] text-[22px] tracking-wide focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="contact@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="industry" className="text-lg tracking-widest uppercase text-[#FFFFFF] mb-6 font-bold">INDUSTRY</label>
              <select 
                id="industry"
                name="industry"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-5 text-[#E5E7EB] text-[22px] tracking-wide focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
              >
                <option value="" className="bg-[#000000] text-[#E5E7EB]">Select Industry...</option>
                <option value="SaaS / Tech" className="bg-[#000000] text-[#E5E7EB]">SaaS / Tech</option>
                <option value="Design / Agency" className="bg-[#000000] text-[#E5E7EB]">Design / Agency</option>
                <option value="Service Provider" className="bg-[#000000] text-[#E5E7EB]">Service Provider</option>
                <option value="Other" className="bg-[#000000] text-[#E5E7EB]">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="value" className="text-lg tracking-widest uppercase text-[#FFFFFF] mb-6 font-bold">CONTRACT VALUE (USD/JOD)</label>
              <select 
                id="value"
                name="value"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-5 text-[#E5E7EB] text-[22px] tracking-wide focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
              >
                <option value="" className="bg-[#000000] text-[#E5E7EB]">Select Size...</option>
                <option value="Under 10k" className="bg-[#000000] text-[#E5E7EB]">Under 10k</option>
                <option value="10k - 50k" className="bg-[#000000] text-[#E5E7EB]">10k - 50k</option>
                <option value="50k - 100k" className="bg-[#000000] text-[#E5E7EB]">50k - 100k</option>
                <option value="100k+" className="bg-[#000000] text-[#E5E7EB]">100k+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full mb-10">
            <label htmlFor="obstacle" className="text-lg tracking-widest uppercase text-[#FFFFFF] mb-6 font-bold">STATE THE OBSTACLE</label>
            <textarea 
              id="obstacle"
              name="obstacle_description"
              rows={4}
              required
              className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-5 text-[#E5E7EB] text-[22px] tracking-wide focus:outline-none focus:border-[#FFFFFF] transition-colors resize-none rounded-none placeholder-[#333333]"
              placeholder="e.g., Stalled signature, price shock, outstanding payment..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full border-2 border-[#FFFFFF] bg-[#FFFFFF] text-[#000000] px-12 py-8 text-xl font-bold tracking-widest uppercase hover:bg-transparent hover:text-[#FFFFFF] transition-all duration-500 cursor-pointer"
          >
            SUBMIT REQUEST
          </button>
        </form>
      </section>

      {/* Footer */}
      <div className="w-full flex flex-col items-center text-center pt-8 pb-[100px]">
        <div className="w-[80px] h-[2px] bg-[#333333] mx-auto mb-[40px]"></div>
        <footer className="flex flex-col items-center justify-center font-sans">
          <span className="text-xl md:text-2xl tracking-widest lowercase text-[#FFFFFF]">
            feras@thefwgroup.co
          </span>
          <span className="mt-[16px] text-[#E5E7EB] font-sans font-bold tracking-widest text-sm md:text-base text-center uppercase">
            BY APPOINTMENT ONLY.
          </span>
        </footer>
      </div>
      
    </div>
  );
}