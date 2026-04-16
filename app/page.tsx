export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#D1D5DB] font-sans antialiased selection:bg-[#FFFFFF] selection:text-[#000000] [text-rendering:optimizeLegibility] overflow-x-hidden">
      
      {/* Navigation / Header - Precision CSS Logo */}
      <nav className="w-full px-6 pt-20 pb-12 flex justify-center md:justify-start max-w-7xl mx-auto">
        {/* Math Alignment: items-center correctly aligns the 2rem GROUP precisely in the vertical center of the 4rem FW */}
        <div className="inline-flex items-center select-none">
          <span className="text-[4rem] font-serif font-black tracking-tighter text-[#FFFFFF] leading-none">
            FW
          </span>
          <span className="text-[2rem] font-sans font-bold tracking-[0.1em] ml-3 text-[#FFFFFF] uppercase leading-none">
            Group
          </span>
        </div>
      </nav>

      {/* Hero Section - Authority Shift */}
      <header className="px-6 py-24 md:py-32 w-full max-w-7xl mx-auto flex flex-col items-start text-left border-b border-[#2F2F2F]">
        <h1 className="text-[10vw] md:text-[4rem] lg:text-[5rem] font-serif font-normal text-[#FFFFFF] leading-[1.1] tracking-tight mb-12 uppercase w-full">
          <span className="block">Contract Negotiation &</span>
          <span className="block">Strategic Revenue Recovery.</span>
        </h1>
        <p className="text-[20px] md:text-[22px] font-sans font-normal text-[#D1D5DB] tracking-wide max-w-[800px] leading-[1.6] mb-16">
          Specializing in finalizing high-value service contracts for B2B boutique firms.
        </p>
      </header>

      {/* The Logic (The Red Zone / Manifesto) - Inverted Oversized Hierarchy */}
      <section className="px-6 py-32 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-[0.2em] uppercase text-[#FFFFFF] leading-snug">
              FW Group: We Finalize Your "Red Zone."
            </h2>
          </div>
          <div className="w-full lg:w-3/4 mt-4 lg:mt-0">
            {/* The Largest Text on the Screen */}
            <h3 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-serif font-normal text-[#FFFFFF] leading-[1.15]">
              Most deals die in the final stages. We provide the external negotiation pressure and strategic commercial logic needed to move a high-value B2B contract from 'pending' to 'signed'.
            </h3>
          </div>
        </div>
      </section>

      {/* Sector-Agnostic Expertise Grid - 3 Pillar Grounding Fix */}
      <section className="w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase text-[#FFFFFF] mb-8">
              High-Ticket Service Agencies
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-[20px] md:text-[22px]">
              Recovering stalled proposals for Interior Designers, HR Firms, and Marketing Agencies blocked by pricing hesitation or scope creep.
            </p>
          </div>

          <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase text-[#FFFFFF] mb-8">
              Boutique Software & App Development
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-[20px] md:text-[22px]">
              Bridging the commercial gap between a successful technical demo and a finalized B2B vendor agreement.
            </p>
          </div>

          <div className="p-12 md:p-16 border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase text-[#FFFFFF] mb-8">
              Contractual Revenue Recovery
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-[20px] md:text-[22px]">
              Intervening in stalled receivables and paused payment plans through a negotiation-first approach.
            </p>
          </div>

        </div>
      </section>

      {/* Operational Integrity - Minority Fix */}
      <section className="px-6 py-32 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="mb-24 flex flex-col items-start">
          <h2 className="text-4xl md:text-7xl font-serif font-normal text-[#FFFFFF] leading-[1.2]">
            Operational Integrity.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          <div className="flex flex-col border-t border-[#2F2F2F] pt-8 w-full">
            <span className="text-xl md:text-2xl tracking-[0.15em] uppercase text-[#FFFFFF] font-bold mb-6">
              01. Dedicated Focus
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-[20px] md:text-[22px]">
              Dedicated Focus per Engagement (No more than 3 clients accepted simultaneously).
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-8 w-full">
            <span className="text-xl md:text-2xl tracking-[0.15em] uppercase text-[#FFFFFF] font-bold mb-6">
              02. Direct Intervention
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-[20px] md:text-[22px]">
              Negotiations are handled personally by our lead strategist. We do not outsource your deal.
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-8 w-full">
            <span className="text-xl md:text-2xl tracking-[0.15em] uppercase text-[#FFFFFF] font-bold mb-6">
              03. Strict Anonymity
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-[20px] md:text-[22px]">
              Full Non-Disclosure and Anonymity Guaranteed.
            </span>
          </div>
        </div>
      </section>

      {/* The Intake Gate (Live Formspree Integration, Updated Fields) */}
      <section className="px-6 py-32 w-full max-w-6xl mx-auto flex flex-col items-start text-left">
        <h2 className="text-[6vw] md:text-5xl lg:text-6xl font-serif font-normal text-[#FFFFFF] tracking-[0.05em] mb-16 uppercase whitespace-nowrap">
          Request Operational Support
        </h2>

        {/* SECURE DATA CAPTURE */}
        <form 
          action="https://formspree.io/f/xgoroljy" 
          method="POST" 
          className="w-full flex flex-col gap-16 text-left"
        >
          <div className="flex flex-col md:flex-row gap-16 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="name" className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] mb-4 font-bold">Name / Company</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#D1D5DB] text-[20px] md:text-[22px] focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="Your Name or Entity"
              />
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="email" className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] mb-4 font-bold">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#D1D5DB] text-[20px] md:text-[22px] focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none placeholder-[#333333]"
                placeholder="contact@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="industry" className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] mb-4 font-bold">Primary Industry</label>
              <select 
                id="industry"
                name="industry"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#D1D5DB] text-[20px] md:text-[22px] focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
              >
                <option value="" className="bg-[#000000] text-[#D1D5DB]">Select Industry...</option>
                <option value="Agencies / Consultancies" className="bg-[#000000] text-[#D1D5DB]">Agencies / Consultancies</option>
                <option value="SaaS / App Development" className="bg-[#000000] text-[#D1D5DB]">SaaS / App Development</option>
                <option value="Real Estate" className="bg-[#000000] text-[#D1D5DB]">Real Estate</option>
                <option value="Other" className="bg-[#000000] text-[#D1D5DB]">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="value" className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] mb-4 font-bold">Estimated Contract Value ($ USD)</label>
              <select 
                id="value"
                name="value"
                required
                className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#D1D5DB] text-[20px] md:text-[22px] focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer"
              >
                <option value="" className="bg-[#000000] text-[#D1D5DB]">Select Value...</option>
                <option value="Under $10k" className="bg-[#000000] text-[#D1D5DB]">Under $10k</option>
                <option value="$10k - $50k" className="bg-[#000000] text-[#D1D5DB]">$10k - $50k</option>
                <option value="$50k - $100k" className="bg-[#000000] text-[#D1D5DB]">$50k - $100k</option>
                <option value="$100k+" className="bg-[#000000] text-[#D1D5DB]">$100k+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full mb-8">
            <label htmlFor="deadlock" className="text-base md:text-lg tracking-[0.2em] uppercase text-[#FFFFFF] mb-4 font-bold">Describe the nature of the deadlock or hesitation</label>
            <textarea 
              id="deadlock"
              name="deadlock_description"
              rows={4}
              required
              className="w-full bg-transparent border-b-2 border-[#2F2F2F] py-4 text-[#D1D5DB] text-[20px] md:text-[22px] focus:outline-none focus:border-[#FFFFFF] transition-colors resize-none rounded-none placeholder-[#333333]"
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
      <div className="w-full flex flex-col items-center text-center pt-8 pb-[80px]">
        {/* Subtle Horizontal Anchor Line */}
        <div className="w-[80px] h-[2px] bg-[#333333] mx-auto mb-[40px]"></div>
        
        <footer className="flex flex-col items-center justify-center font-sans">
          <span className="text-lg md:text-xl tracking-[0.2em] lowercase text-[#FFFFFF]">
            feras@thefwgroup.co
          </span>
          <span className="mt-[16px] text-[#D1D5DB] font-serif font-normal tracking-[0.1em] text-[20px] md:text-[22px] text-center">
            By Appointment Only
          </span>
        </footer>
      </div>
      
    </div>
  );
}