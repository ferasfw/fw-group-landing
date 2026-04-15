export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#D1D5DB] font-sans antialiased selection:bg-[#FFFFFF] selection:text-[#000000] [text-rendering:optimizeLegibility]">
      
      {/* Navigation / Header - Pure CSS Logo */}
      <nav className="w-full border-b border-[#2F2F2F] px-6 py-8 flex justify-center md:justify-start">
        <div className="flex items-baseline select-none">
          <span className="text-4xl md:text-5xl font-serif font-black tracking-tighter text-[#FFFFFF] leading-none">
            FW
          </span>
          <span className="text-[0.5em] font-sans font-bold tracking-[0.3em] ml-2 text-[#FFFFFF] uppercase align-baseline">
            Group
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-24 md:py-40 w-full max-w-7xl mx-auto flex flex-col items-start border-b border-[#2F2F2F]">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-normal text-[#FFFFFF] leading-[1.1] tracking-tight max-w-5xl mb-12 uppercase">
          <span className="block">Strategic Deal Finalization</span>
          <span className="block">For High-Ticket Services.</span>
        </h1>
        <p className="text-base md:text-xl font-sans font-normal text-[#D1D5DB] tracking-wide max-w-3xl leading-[1.8] mb-16">
          We don't manage pipelines; we finalize transactions. We intervene at the final, psychological bottleneck of a negotiation, specializing in high-value transactions stalled by scope creep, decision hesitation, or structural commercial deadlock.
        </p>
      </header>

      {/* The Logic (The Red Zone) */}
      <section className="px-6 py-24 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-xs md:text-sm font-sans font-bold tracking-[0.3em] uppercase text-[#FFFFFF]">
              The Logic
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl md:text-4xl font-serif font-normal text-[#FFFFFF] leading-[1.4]">
              Most deals die in the final stages. We provide the external pressure and structural logic required to secure the signature. When negotiations stall, we extract the friction.
            </h3>
          </div>
        </div>
      </section>

      {/* Sector-Agnostic Expertise Grid (No Icons, Pure Brutalism) */}
      <section className="w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              SaaS & Tech
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-sm md:text-base">
              Finalizing Enterprise License Agreements and M&A exits.
            </p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              Esports & Gamified Platforms
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-sm md:text-base">
              Securing corporate sponsorship and institutional revenue for digital platforms.
            </p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              High-Ticket Professional Services
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-sm md:text-base">
              Finalizing consultancy or creative retainers stalled by scope creep.
            </p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <h4 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">
              Business Acquisitions (SME)
            </h4>
            <p className="text-[#D1D5DB] leading-[1.6] text-sm md:text-base">
              Resolving final valuation deadlocks and asset transfer terms.
            </p>
          </div>

        </div>
      </section>

      {/* Operational Discretion (The Proof/Commitment) */}
      <section className="px-6 py-24 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="mb-16 md:mb-20 flex flex-col items-start">
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#FFFFFF] leading-[1.2]">
            Operational Discretion.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-sm tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">
              01. Dedicated Focus
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-sm md:text-base">
              Dedicated Focus per Engagement (No more than 3 clients accepted simultaneously).
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-sm tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">
              02. Direct Execution
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-sm md:text-base">
              Negotiations are handled directly, personally by FW Group. We do not outsource your deal to junior associates.
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-sm tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">
              03. Strict Anonymity
            </span>
            <span className="text-[#D1D5DB] leading-[1.6] text-sm md:text-base">
              Full Non-Disclosure and Anonymity Guaranteed.
            </span>
          </div>
        </div>
      </section>

      {/* The Intake Gate (Functional Form) */}
      <section className="px-6 py-24 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-serif font-normal text-[#FFFFFF] tracking-[0.05em] mb-6 uppercase">
          Request Operational Support
        </h2>
        <p className="text-sm md:text-base text-[#D1D5DB] font-sans tracking-wide leading-relaxed max-w-2xl mb-16">
          All applications are confidential. We review for complex deadlocks and critical 'Red Zone' factors.
        </p>

        <form className="w-full flex flex-col gap-8 text-left" action="mailto:feras@thefwgroup.co" method="POST" encType="text/plain">
          
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] mb-2 font-bold">Name / Company</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-[#2F2F2F] pb-3 text-[#FFFFFF] text-base focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none"
                placeholder="Your Name or Entity"
              />
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] mb-2 font-bold">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-b border-[#2F2F2F] pb-3 text-[#FFFFFF] text-base focus:outline-none focus:border-[#FFFFFF] transition-colors rounded-none"
                placeholder="contact@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] mb-2 font-bold">Primary Industry</label>
              <select className="w-full bg-transparent border-b border-[#2F2F2F] pb-3 text-[#D1D5DB] text-base focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer">
                <option value="" className="bg-[#000000] text-[#D1D5DB]">Select Industry...</option>
                <option value="SaaS / Tech" className="bg-[#000000] text-[#FFFFFF]">SaaS / Tech</option>
                <option value="Esports / Gaming" className="bg-[#000000] text-[#FFFFFF]">Esports / Gaming</option>
                <option value="Real Estate" className="bg-[#000000] text-[#FFFFFF]">Real Estate</option>
                <option value="Professional Services" className="bg-[#000000] text-[#FFFFFF]">Professional Services</option>
                <option value="Other" className="bg-[#000000] text-[#FFFFFF]">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] mb-2 font-bold">Estimated Contract Value</label>
              <select className="w-full bg-transparent border-b border-[#2F2F2F] pb-3 text-[#D1D5DB] text-base focus:outline-none focus:border-[#FFFFFF] transition-colors appearance-none rounded-none cursor-pointer">
                <option value="" className="bg-[#000000] text-[#D1D5DB]">Select Value...</option>
                <option value="250k+" className="bg-[#000000] text-[#FFFFFF]">250,000+ JOD</option>
                <option value="100k-250k" className="bg-[#000000] text-[#FFFFFF]">100,000 - 250,000 JOD</option>
                <option value="50k-100k" className="bg-[#000000] text-[#FFFFFF]">50,000 - 100,000 JOD</option>
                <option value="Under 50k" className="bg-[#000000] text-[#FFFFFF]">Under 50,000 JOD</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full mb-8">
            <label className="text-[10px] tracking-[0.2em] uppercase text-[#FFFFFF] mb-2 font-bold">Describe the Current Negotiation Gridlock</label>
            <textarea 
              rows={4}
              required
              className="w-full bg-transparent border-b border-[#2F2F2F] pb-3 text-[#FFFFFF] text-base focus:outline-none focus:border-[#FFFFFF] transition-colors resize-none rounded-none mt-2"
              placeholder="e.g., Scope creep, decision hesitation, valuation deadlock..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto self-center border border-[#FFFFFF] bg-[#FFFFFF] text-[#000000] px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#FFFFFF] transition-all duration-500 cursor-pointer"
          >
            Application For Representation
          </button>
        </form>
      </section>

      {/* Structured Memorandum Footer Section */}
      <div className="w-full flex flex-col items-center text-center pb-[60px]">
        {/* Subtle Horizontal Anchor Line */}
        <div className="w-[60px] h-[1px] bg-[#333333] mx-auto mb-[30px]"></div>
        
        <footer className="flex flex-col items-center justify-center font-sans">
          <a 
            href="mailto:feras@thefwgroup.co" 
            className="text-sm md:text-base tracking-[0.2em] lowercase text-[#FFFFFF] no-underline hover:text-[#D1D5DB] transition-colors duration-300"
          >
            feras@thefwgroup.co
          </a>
          
          <span className="mt-[10px] text-[#D1D5DB] font-serif font-semibold tracking-[0.1em] text-xs md:text-sm text-center">
            By Appointment Only
          </span>
        </footer>
      </div>
      
    </div>
  );
}