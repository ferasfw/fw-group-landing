import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-white selection:text-black font-sans antialiased [text-rendering:optimizeLegibility]">
      
      {/* Header Section */}
      <header className="px-6 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Scaled Logo Asset */}
        <div className="mt-[40px] mb-[60px] mx-auto flex justify-center opacity-100">
          <Image 
            src="/logo.svg" 
            alt="FW Group Logo" 
            width={250} 
            height={100} 
            priority
            className="h-[100px] w-auto object-contain"
            style={{ filter: 'invert(1) brightness(2)' }}
          />
        </div>
        
        {/* Main Heading - Forced Two-Line Architecture */}
        <h1 className="text-lg md:text-3xl font-serif font-normal tracking-[0.25em] text-[#FFFFFF] max-w-4xl leading-relaxed md:leading-loose uppercase">
          <span className="block">FINALIZING HIGH-STAKES DEALS</span>
          <span className="block">& RECOVERING STALLED REVENUE</span>
        </h1>
      </header>

      {/* Main Advisory Pillars Container */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 pt-[60px] pb-[20px]">
        
        {/* Pillar 1 */}
        <section className="flex flex-col border-t border-[#333333] pt-8">
          <h2 className="text-sm md:text-base font-sans font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-2">
            DEAL FINALIZATION
          </h2>
          <h3 className="text-xs md:text-sm font-serif italic tracking-[0.05em] text-[#CCCCCC] mb-6">
            We don’t manage pipelines; we finish them.
          </h3>
          <p className="text-sm md:text-base leading-[1.6] text-[#E5E5E5] font-sans font-normal">
            We specialize in the "Red Zone"—the final 10% of a negotiation where high-stakes deals typically stall. We provide the external pressure required to turn corporate and real estate handshakes into binding, finalized signatures.
          </p>
        </section>

        {/* Pillar 2 */}
        <section className="flex flex-col border-t border-[#333333] pt-8">
          <h2 className="text-sm md:text-base font-sans font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-2">
            REVENUE RECOVERY
          </h2>
          <h3 className="text-xs md:text-sm font-serif italic tracking-[0.05em] text-[#CCCCCC] mb-6">
            Turning stalled negotiations into liquid capital.
          </h3>
          <p className="text-sm md:text-base leading-[1.6] text-[#E5E5E5] font-sans font-normal">
            We don't audit or advise; we extract. We intervene in non-performing agreements and stagnant corporate disputes to recover revenue that has been lost to complexity, hesitation, or institutional gridlock.
          </p>
        </section>

        {/* Pillar 3 */}
        <section className="flex flex-col border-t border-[#333333] pt-8">
          <h2 className="text-sm md:text-base font-sans font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-2">
            CONTRACT MONETIZATION
          </h2>
          <h3 className="text-xs md:text-sm font-serif italic tracking-[0.05em] text-[#CCCCCC] mb-6">
            Converting influence and premium assets into realized growth.
          </h3>
          <p className="text-sm md:text-base leading-[1.6] text-[#E5E5E5] font-sans font-normal">
            We finalize the complex agreements that bridge the gap between global talent and institutional partnerships. We don't manage careers; we structure the final terms that transform high-profile influence into a paid reality.
          </p>
        </section>

      </main>

      {/* Structured Memorandum Footer Section */}
      <div className="w-full flex flex-col items-center text-center pb-[60px]">
        {/* Subtle Horizontal Anchor Line */}
        <div className="w-[60px] h-[1px] bg-[#333333] mx-auto mb-[30px]"></div>
        
        {/* Contact Us Block */}
        <footer className="flex flex-col items-center justify-center font-sans">
          {/* Raw Hyperlink Email */}
          <a 
            href="mailto:feras@thefwgroup.co" 
            className="text-sm md:text-base tracking-[0.2em] lowercase text-[#FFFFFF] no-underline hover:text-[#E5E5E5] transition-colors duration-300"
          >
            feras@thefwgroup.co
          </a>
          
          {/* Authoritative Appointment Text */}
          <span className="mt-[10px] text-[#CCCCCC] font-serif font-semibold tracking-[0.1em] text-xs md:text-sm text-center">
            By Appointment Only
          </span>
        </footer>
      </div>
      
    </div>
  );
}