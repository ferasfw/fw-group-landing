export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#D1D5DB] font-sans antialiased selection:bg-[#FFFFFF] selection:text-[#000000] [text-rendering:optimizeLegibility]">
      
      {/* Navigation / Header - Precision CSS Logo */}
      <nav className="w-full px-6 pt-16 pb-8 flex justify-center md:justify-start max-w-7xl mx-auto">
        <div className="flex items-center select-none">
          <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tighter text-[#FFFFFF] leading-none">
            FW
          </span>
          <span className="text-xl md:text-2xl lg:text-3xl font-sans font-bold tracking-[0.1em] ml-3 text-[#FFFFFF] uppercase leading-none mt-2 md:mt-3">
            Group
          </span>
        </div>
      </nav>

      {/* Hero Section - Restored Spacing & 2-Line Architecture */}
      <header className="px-6 py-20 md:py-28 w-full max-w-7xl mx-auto flex flex-col items-start text-left border-b border-[#2F2F2F]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#FFFFFF] leading-[1.1] tracking-tight max-w-[1000px] mb-10 uppercase">
          <span className="block">Strategic Deal Finalization</span>
          <span className="block text-[#D1D5DB]">for high-ticket services.</span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-sans font-normal text-[#D1D5DB] tracking-wide max-w-[800px] leading-[1.6] mb-8">
          We don't manage pipelines; we finalize transactions. We intervene at the final, psychological bottleneck of a negotiation, specializing in high-value transactions stalled by scope creep, decision hesitation, or structural commercial deadlock.
        </p>
      </header>

      {/* The Logic (The Red Zone / Manifesto) - Refined Hierarchy */}
      <section className="px-6 py-24 md:py-32 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-[0.2em] uppercase text-[#D1D5DB]">
              The Logic
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#FFFFFF] leading-[1.3]">
              Most deals die in the final stages. We provide the external pressure and structural logic required to secure the signature. When negotiations stall, we extract the friction.
            </h3>
          </div>
        </div>
      </section>

      {/* Sector-Agnostic Expertise Grid */}
      <section className="w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-10 md:p-16 lg:p-20 border-b md:border-b-0 md:border-r border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              SaaS & Tech
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-base md:text-lg">
              Finalizing Enterprise License Agreements and M&A exits.
            </p>
          </div>

          <div className="p-10 md:p-16 lg:p-20 border-b md:border-b-0 border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              Esports & Gamified Platforms
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-base md:text-lg">
              Securing corporate sponsorship and institutional revenue for digital platforms.
            </p>
          </div>

          <div className="p-10 md:p-16 lg:p-20 border-b md:border-b-0 md:border-r md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              High-Ticket Professional Services
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-base md:text-lg">
              Finalizing consultancy or creative retainers stalled by scope creep.
            </p>
          </div>

          <div className="p-10 md:p-16 lg:p-20 border-b md:border-b-0 md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              Business Acquisitions (SME)
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-base md:text-lg">
              Resolving final valuation deadlocks and asset transfer terms.
            </p>
          </div>

        </div>
      </section>

      {/* Operational Certainty */}
      <section className="px-6 py-24 md:py-32 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="mb-16 md:mb-20 flex flex-col items-start">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-[#FFFFFF] leading-[1.2]">
            Operational Certainty.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">
              01. Dedicated Focus
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-base md:text-lg">
              Dedicated Focus per Engagement (No more than 3 clients accepted simultaneously).
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">
              02. Direct Execution
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-base md:text-lg">
              Direct, personal intervention. Every negotiation is handled in-house to ensure structural integrity and the absolute preservation of deal-logic.
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">
              03. Strict Anonymity
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-base md:text-lg">
              Full Non-Disclosure and Anonymity Guaranteed.
            </span>
          </div>
        </div>
      </section>

      {/* The Intake Gate (Live Formspree Integration) */}
      <section className="px-6 py-24 md:py-32 w-full max-w-5xl mx-auto flex flex-col items-start text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#FFFFFF] tracking-[0.05em] mb-6 uppercase">
          Request Operational Support
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#D1D5DB] font-sans tracking-wide leading-relaxed max-w-3xl mb-16">
          All applications are confidential. We review for complex deadlocks and critical 'Red Zone' factors.
        </p>

        {/* SECURE DATA CAPTURE */}
        <form 
          action="https://formspree.io/f/xgoroljy" 
          method="POST" 
          className="w-full flex flex-col gap-12 text-left"
        >
          <div className="flex flex-col md:flex-row gap-12 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="name" className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#D1D5DB] mb-3 font-bold">Name / Company</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-3 text-[#FFFFFF] text-xl focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="Your Name or Entity"
              />
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="email" className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#D1D5DB] mb-3 font-bold">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-3 text-[#FFFFFF] text-xl focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="contact@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="industry" className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#D1D5DB] mb-3 font-bold">Primary Industry</label>
              <select 
                id="industry"
                name="industry"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-3 text-[#FFFFFF] text-xl focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
              >
                <option value="" className="bg-[#000000] text-[#D1D5DB]">Select Industry...</option>
                <option value="SaaS / Tech" className="bg-[#000000] text-[#FFFFFF]">SaaS / Tech</option>
                <option value="Esports / Gaming" className="bg-[#000000] text-[#FFFFFF]">Esports / Gaming</option>
                <option value="Real Estate" className="bg-[#000000] text-[#FFFFFF]">Real Estate</option>
                <option value="Professional Services" className="bg-[#000000] text-[#FFFFFF]">Professional Services</option>
                <option value="Other" className="bg-[#000000] text-[#FFFFFF]">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="value" className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#D1D5DB] mb-3 font-bold">Estimated Contract Value (USD)</label>
              <select 
                id="value"
                name="value"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-3 text-[#FFFFFF] text-xl focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
              >
                <option value="" className="bg-[#000000] text-[#D1D5DB]">Select Value...</option>
                <option value="Under $100k" className="bg-[#000000] text-[#FFFFFF]">Under $100k</option>
                <option value="$100k - $250k" className="bg-[#000000] text-[#FFFFFF]">$100k - $250k</option>
                <option value="$250k - $500k" className="bg-[#000000] text-[#FFFFFF]">$250k - $500k</option>
                <option value="$500k+" className="bg-[#000000] text-[#FFFFFF]">$500k+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full mb-6">
            <label htmlFor="deadlock" className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#D1D5DB] mb-3 font-bold">Describe the Current Negotiation Gridlock</label>
            <textarea 
              id="deadlock"
              name="deadlock_description"
              rows={4}
              required
              className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-3 text-[#FFFFFF] text-xl focus:outline-none focus:border-[#FFFFFF] transition-colors resize-none rounded-none placeholder-[#333333]"
              placeholder="e.g., Scope creep, decision hesitation, valuation deadlock..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full border-2 border-[#FFFFFF] bg-[#FFFFFF] text-[#000000] px-10 py-6 text-base md:text-lg font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#FFFFFF] transition-all duration-500 cursor-pointer"
          >
            Application For Representation
          </button>
        </form>
      </section>

      {/* Structured Memorandum Footer Section */}
      <div className="w-full flex flex-col items-center text-center pt-8 pb-[80px]">
        {/* Subtle Horizontal Anchor Line */}
        <div className="w-[80px] h-[2px] bg-[#333333] mx-auto mb-[40px]"></div>
        
        <footer className="flex flex-col items-center justify-center font-sans">
          <span className="text-base md:text-lg tracking-[0.2em] lowercase text-[#FFFFFF]">
            feras@thefwgroup.co
          </span>
          <span className="mt-[16px] text-[#D1D5DB] font-serif font-normal tracking-[0.1em] text-sm md:text-base text-center">
            By Appointment Only
          </span>
        </footer>
      </div>
      
    </div>
  );
}