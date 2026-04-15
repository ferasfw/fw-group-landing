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
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-normal text-[#FFFFFF] leading-[1.1] tracking-tight max-w-5xl mb-12">
          FW Group: <br />
          We Finalize the Red Zone.
        </h1>
        <p className="text-base md:text-xl font-sans font-normal text-[#E0E0E0] tracking-wide max-w-3xl leading-[1.8] mb-16">
          We don’t manage pipelines; we finish them. We intervene in the final 10% of high-stakes negotiations where institutional gridlock and hesitation stall progress.
        </p>
        <a 
          href="mailto:feras@thefwgroup.co" 
          className="inline-block border border-[#2F2F2F] bg-transparent text-white px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
        >
          Request Representation
        </a>
      </header>

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
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">SaaS & Tech</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Finalizing Enterprise License Agreements and M&A exits.</p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 border-[#2F2F2F] flex flex-col justify-start">
            <span className="text-[#444444] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </span>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">Real Estate & Infrastructure</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Resolving valuation deadlocks and financing hurdles.</p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <span className="text-[#444444] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </span>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">Premium Media & Talent</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Bridging the gap between high-profile influence and institutional procurement.</p>
          </div>

          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-t border-[#2F2F2F] flex flex-col justify-start">
            <span className="text-[#444444] mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            </span>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-4">Strategic Banking</h4>
            <p className="text-[#A1A1A1] leading-[1.6] text-sm md:text-base">Navigating regulatory friction and final-stage capital allocation.</p>
          </div>

        </div>
      </section>

      {/* The Quantified Impact (The Proof) */}
      <section className="px-6 py-24 w-full max-w-7xl mx-auto border-b border-[#2F2F2F]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          
          <div className="flex flex-col">
            <span className="text-4xl md:text-6xl font-serif font-normal text-[#FFFFFF] mb-4">1.2M+ JOD</span>
            <span className="text-xs tracking-[0.2em] uppercase text-[#777777] font-bold">Stalled Capital Recovered</span>
          </div>

          <div className="flex flex-col">
            <span className="text-4xl md:text-6xl font-serif font-normal text-[#FFFFFF] mb-4">14 DAYS</span>
            <span className="text-xs tracking-[0.2em] uppercase text-[#777777] font-bold">Average Time-to-Signature Post-Intervention</span>
          </div>

          <div className="flex flex-col">
            <span className="text-4xl md:text-6xl font-serif font-normal text-[#FFFFFF] mb-4">100%</span>
            <span className="text-xs tracking-[0.2em] uppercase text-[#777777] font-bold">Anonymity & Operational Discretion</span>
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
          className="inline-block border border-[#2F2F2F] bg-[#FFFFFF] text-[#000000] px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#000000] hover:text-[#FFFFFF] transition-all duration-500 mb-8"
        >
          Application for Representation
        </a>

        <p className="text-xs md:text-sm text-[#777777] font-sans tracking-wide leading-relaxed max-w-2xl uppercase">
          FW Group only accepts engagements where the deal value exceeds 50,000 JOD and a clear 'Red Zone' blocker has been identified.
        </p>
      </footer>
      
    </div>
  );
}