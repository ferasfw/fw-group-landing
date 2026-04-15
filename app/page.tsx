import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans antialiased selection:bg-white selection:text-black [text-rendering:optimizeLegibility]">
      
      {/* Navigation / Header */}
      <nav className="w-full border-b border-[#2F2F2F] px-6 py-8 flex justify-center md:justify-start">
        <div className="opacity-90">
          <Image 
            src="/logo.svg" 
            alt="FW Group Logo" 
            width={120} 
            height={48} 
            priority
            className="h-[48px] w-auto object-contain"
            style={{ filter: 'invert(1) brightness(2)' }}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-24 md:py-40 w-full max-w-7xl mx-auto flex flex-col items-start border-b border-[#2F2F2F]">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-normal text-[#FFFFFF] leading-[1.1] tracking-tight max-w-5xl mb-12 uppercase">
          Strategic Deal Finalization For High-Ticket Services & Platforms.
        </h1>
        <p className="text-base md:text-xl font-sans font-normal text-[#E0E0E0] tracking-wide max-w-3xl leading-[1.8] mb-16">
          We don't manage pipelines; we finalize transactions. We intervene at the final, psychological bottleneck of a negotiation, specializing in high-value transactions stalled by scope creep, decision hesitation, or structural commercial deadlock.
        </p>
        <a 
          href="mailto:feras@thefwgroup.co" 
          className="inline-block border border-[#2F2F2F] bg-transparent text-white px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
        >
          Request Representation
        </a>
      </header>

      {/* Main Service Grid (The 3 Pillars) */}
      <section className="px-6 py-24 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          
          <div className="flex flex-col">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">Deal Finalization</h2>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">
              We specialize in the "Red Zone"—the final 10% of a negotiation where high-stakes deals typically stall. We provide the external pressure required to turn high-value handshake agreements in SaaS, eSports, and service sectors into finalized signatures.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">Revenue Recovery</h2>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">
              We don't audit or advise; we extract. We intervene in non-performing payment agreements and commercial deadlocks by introducing external, logical pressure to recover revenue that has been lost to complexity or hesitation.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">Commercial Partnership Structuring</h2>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">
              We finalize the complex agreements that turn partnership intent into binding contracts, specializing in B2B vendor deals and platform sponsorships. We structure the final terms that transform influence into a paid reality.
            </p>
          </div>

        </div>
      </section>

      {/* The Logic (The Red Zone) */}
      <section className="px-6 py-24 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/3">
            <h2 className="text-xs md:text-sm font-sans font-bold tracking-[0.3em] uppercase text-[#777777]">
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

      {/* Sector-Agnostic Expertise Grid */}
      <section className="w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#2F2F2F] flex flex-col justify-start">
            <span className="text-[#444444] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            </span>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">SaaS & B2B Technology</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Finalizing enterprise pilots and commercial vendor agreements.</p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 border-[#2F2F2F] flex flex-col justify-start">
            <span className="text-[#444444] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
            </span>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">eSports & Gamified Platforms</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Securing corporate sponsorship and institutional revenue for digital platforms.</p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <span className="text-[#444444] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">High-Ticket Professional Services</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Finalizing consultancy or creative retainers stalled by scope creep.</p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <span className="text-[#444444] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </span>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">Business Acquisitions (SME)</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Resolving final valuation deadlocks and asset transfer terms.</p>
          </div>

        </div>
      </section>

      {/* Process Commitment (Replaces Stats) */}
      <section className="px-6 py-24 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="mb-16 md:mb-20 flex flex-col items-start">
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-[#FFFFFF] leading-[1.2]">
            Committed to <br className="hidden md:block" /> Operational Discretion.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-sm tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">01. Dedicated Focus</span>
            <span className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">
              Dedicated Focus per Engagement (No more than 3 clients accepted simultaneously).
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-sm tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">02. Direct Access</span>
            <span className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">
              Direct Access to the Principal (Your negotiation is not outsourced).
            </span>
          </div>

          <div className="flex flex-col border-t border-[#2F2F2F] pt-6 w-full">
            <span className="text-sm tracking-[0.2em] uppercase text-[#FFFFFF] font-bold mb-4">03. Strict Anonymity</span>
            <span className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">
              Full Non-Disclosure and Anonymity Guaranteed.
            </span>
          </div>
        </div>
      </section>

      {/* The Intake Gate (The Close) */}
      <footer className="px-6 py-32 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="w-[40px] h-[1px] bg-[#2F2F2F] mb-12"></div>
        
        <h2 className="text-lg md:text-2xl font-serif font-normal text-[#FFFFFF] tracking-[0.1em] italic mb-12">
          By Appointment Only
        </h2>

        <a 
          href="mailto:feras@thefwgroup.co" 
          className="inline-block border border-[#2F2F2F] bg-[#FFFFFF] text-[#000000] px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#000000] hover:text-[#FFFFFF] transition-all duration-500"
        >
          Application for Representation
        </a>
      </footer>
      
    </div>
  );
}