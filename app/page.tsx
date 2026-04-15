export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#D1D5DB] font-sans antialiased selection:bg-[#FFFFFF] selection:text-[#000000] [text-rendering:optimizeLegibility] overflow-x-hidden">
      
      {/* Navigation / Header - Precision CSS Logo */}
      <nav className="w-full px-6 pt-20 pb-12 flex justify-center md:justify-start max-w-7xl mx-auto">
        {/* Math Alignment: items-baseline forces the bottom of the letters to sit on the same invisible line. GROUP is slightly larger now. */}
        <div className="inline-flex items-baseline select-none">
          <span className="text-[4rem] font-serif font-black tracking-tighter text-[#FFFFFF] leading-none">
            FW
          </span>
          <span className="text-[2.2rem] font-sans font-bold tracking-[0.1em] ml-3 text-[#FFFFFF] uppercase leading-none">
            Group
          </span>
        </div>
      </nav>

      {/* Hero Section - Strict 2-Line Architecture */}
      <header className="px-6 py-24 md:py-32 w-full max-w-7xl mx-auto flex flex-col items-start text-left border-b border-[#2F2F2F]">
        <h1 className="text-[6vw] md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-serif font-normal text-[#FFFFFF] leading-[1.1] tracking-tight mb-12 uppercase w-full">
          <span className="block whitespace-nowrap">STRATEGIC DEAL FINALIZATION</span>
          <span className="block text-[#D1D5DB] whitespace-nowrap">FOR HIGH-TICKET SERVICES.</span>
        </h1>
        <p className="text-lg md:text-2xl font-sans font-normal text-[#D1D5DB] tracking-wide max-w-[800px] leading-[1.6] mb-16">
          We don't manage pipelines; we finalize transactions. We intervene at the final, psychological bottleneck of a negotiation, specializing in high-value transactions stalled by scope creep, decision hesitation, or structural commercial deadlock.
        </p>
      </header>

      {/* The Logic (The Red Zone / Manifesto) - Refined Hierarchy & Centered */}
      <section className="px-6 py-32 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        {/* items-center added to vertically center "The Logic" relative to the paragraph */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-[0.3em] uppercase text-[#D1D5DB]">
              The Logic
            </h2>
          </div>
          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-4xl lg:text-[3rem] font-serif font-normal text-[#FFFFFF] leading-[1.3]">
              Most deals die in the final stages. We provide the external pressure and structural logic required to secure the signature. When negotiations stall, we extract the friction.
            </h3>
          </div>
        </div>
      </section>

      {/* Sector-Agnostic Expertise Grid (Heavy Minimalist) */}
      <section className="w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-6">
              SaaS & Tech
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-lg md:text-xl">
              Finalizing Enterprise License Agreements and M&A exits.
            </p>
          </div>

          <div className="p-12 md:p-24 border-b md:border-b-0 border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-6">
              Esports & Gamified Platforms
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-lg md:text-xl">
              Securing corporate sponsorship and institutional revenue for digital platforms.
            </p>
          </div>

          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-6">
              High-Ticket Professional Services
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-lg md:text-xl">
              Finalizing consultancy or creative retainers stalled by scope creep.
            </p>
          </div>

          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-6">
              Business Acquisitions (SME)
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-lg md:text-xl">
              Resolving final valuation deadlocks and asset transfer terms.
            </p>
          </div>

        </div>
      </section>

      {/* Operational Certainty */}
      <section className="px-6 py-32 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="mb-24 flex flex-col items-start">
          <h2 className="text-4xl md:text-7xl font-serif font-normal text-[#FFFFFF] leading-[1.2]">
            Operational Certainty.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">
          <div className="flex flex-col border-t border-[#2F2F2F] pt-8 w-full">
            <span className="text-lg md:text-xl tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-6">
              01. Dedicated Focus
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-lg md:text-xl">
              Dedicated Focus per Engagement (No more than 3 clients accepted simultaneously).
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-8 w-full">
            <span className="text-lg md:text-xl tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-6">
              02. Direct Execution
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-lg md:text-xl">
              Direct, personal intervention. Every negotiation is handled in-house to ensure structural integrity and the absolute preservation of deal-logic.
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-8 w-full">
            <span className="text-lg md:text-xl tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-6">
              03. Strict Anonymity
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-lg md:text-xl">
              Full Non-Disclosure and Anonymity Guaranteed.
            </span>
          </div>
        </div>
      </section>

      {/* The Intake Gate (Live Formspree Integration) */}
      <section className="px-6 py-32 w-full max-w-5xl mx-auto flex flex-col items-start text-left">
        <h2 className="text-[5vw] md:text-4xl lg:text-5xl font-serif font-normal text-[#FFFFFF] tracking-[0.05em] mb-8 uppercase whitespace-nowrap">
          Request Operational Support
        </h2>
        <p className="text-lg md:text-xl text-[#D1D5DB] font-sans tracking-wide leading-relaxed max-w-3xl mb-24">
          All applications are confidential. We review for complex deadlocks and critical 'Red Zone' factors.
        </p>

        {/* SECURE DATA CAPTURE */}
        <form 
          action="https://formspree.io/f/xgoroljy" 
          method="POST" 
          className="w-full flex flex-col gap-16 text-left"
        >
          <div className="flex flex-col md:flex-row gap-16 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="name" className="text-sm md:text-base tracking-[0.2em] uppercase text-[#D1D5DB] mb-4 font-bold">Name / Company</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#FFFFFF] text-2xl focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="Your Name or Entity"
              />
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="email" className="text-sm md:text-base tracking-[0.2em] uppercase text-[#D1D5DB] mb-4 font-bold">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#FFFFFF] text-2xl focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="contact@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="industry" className="text-sm md:text-base tracking-[0.2em] uppercase text-[#D1D5DB] mb-4 font-bold">Primary Industry</label>
              <select 
                id="industry"
                name="industry"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#FFFFFF] text-2xl focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
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
              <label htmlFor="value" className="text-sm md:text-base tracking-[0.2em] uppercase text-[#D1D5DB] mb-4 font-bold">Estimated Contract Value (USD)</label>
              <select 
                id="value"
                name="value"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#FFFFFF] text-2xl focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
              >
                <option value="" className="bg-[#000000] text-[#D1D5DB]">Select Value...</option>
                <option value="Under $100k" className="bg-[#000000] text-[#FFFFFF]">Under $100k</option>
                <option value="$100k - $250k" className="bg-[#000000] text-[#FFFFFF]">$100k - $250k</option>
                <option value="$250k - $500k" className="bg-[#000000] text-[#FFFFFF]">$250k - $500k</option>
                <option value="$500k+" className="bg-[#000000] text-[#FFFFFF]">$500k+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full mb-8">
            <label htmlFor="deadlock" className="text-sm md:text-base tracking-[0.2em] uppercase text-[#D1D5DB] mb-4 font-bold">Describe the Current Negotiation Gridlock</label>
            <textarea 
              id="deadlock"
              name="deadlock_description"
              rows={4}
              required
              className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#FFFFFF] text-xl md:text-2xl focus:outline-none focus:border-[#FFFFFF] transition-colors resize-none rounded-none placeholder-[#333333]"
              placeholder="e.g., Scope creep, decision hesitation, valuation deadlock..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full border-2 border-[#FFFFFF] bg-[#FFFFFF] text-[#000000] px-12 py-8 text-lg md:text-xl font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#FFFFFF] transition-all duration-500 cursor-pointer"
          >
            Application For Representation
          </button>
        </form>
      </section>

      {/* Structured Memorandum Footer Section */}
      <div className="w-full flex flex-col items-center text-center pt-16 pb-[80px]">
        {/* Subtle Horizontal Anchor Line */}
        <div className="w-[80px] h-[2px] bg-[#333333] mx-auto mb-[40px]"></div>
        
        <footer className="flex flex-col items-center justify-center font-sans">
          <span className="text-lg md:text-xl tracking-[0.2em] lowercase text-[#FFFFFF]">
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