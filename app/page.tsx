import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-white selection:text-black font-sans antialiased [text-rendering:optimizeLegibility]">
      
      {/* Header Section */}
      <header className="px-6 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Scaled Logo Asset - 25% Larger with 60px bottom margin */}
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
        
        {/* Main Heading - Luxury Tracking (0.25em) */}
        <h1 className="text-lg md:text-3xl font-serif font-normal tracking-[0.25em] uppercase text-[#FFFFFF] max-w-4xl leading-relaxed">
          Business Development & Talent Management
        </h1>
      </header>

      {/* Main Advisory Pillars Container - Reduced bottom padding to tighten gap */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 pt-[80px] pb-[40px]">
        
        {/* Pillar 1 */}
        <section className="flex flex-col border-t border-[#333333] pt-8">
          <h2 className="text-sm md:text-base font-sans font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-6">
            High-Ticket Sales
          </h2>
          <p className="text-sm md:text-base leading-[1.6] text-[#E5E5E5] font-sans font-normal">
            We close high-value deals in the real estate and corporate sectors. We identify and acquire the investors and multinational tenants that traditional sales teams miss.
          </p>
        </section>

        {/* Pillar 2 */}
        <section className="flex flex-col border-t border-[#333333] pt-8">
          <h2 className="text-sm md:text-base font-sans font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-6">
            Strategic Advisory
          </h2>
          <p className="text-sm md:text-base leading-[1.6] text-[#E5E5E5] font-sans font-normal">
            We manage the public image and private interests of high-profile figures. We provide the strategic infrastructure so leaders can focus on their mission.
          </p>
        </section>

        {/* Pillar 3 */}
        <section className="flex flex-col border-t border-[#333333] pt-8">
          <h2 className="text-sm md:text-base font-sans font-bold tracking-[0.2em] uppercase text-[#FFFFFF] mb-6">
            Global Talent Management
          </h2>
          <p className="text-sm md:text-base leading-[1.6] text-[#E5E5E5] font-sans font-normal">
            We represent elite creators and professionals across Western and Middle Eastern markets. We bridge the gap between global talent and premium brand partnerships.
          </p>
        </section>

      </main>

      {/* Structured Memorandum Footer Section */}
      <div className="w-full flex flex-col items-center text-center pb-[80px]">
        {/* Subtle Horizontal Separator */}
        <div className="w-[80px] h-[1px] bg-[#333333] mx-auto"></div>
        
        {/* Contact Us Block */}
        <footer className="mt-[20px] flex flex-col items-center justify-center font-sans">
          {/* Subtle Hyperlink Email */}
          <a 
            href="mailto:feras@thefwgroup.co" 
            className="text-sm md:text-base tracking-[0.2em] lowercase text-[#CCCCCC] hover:text-[#FFFFFF] transition-colors duration-300"
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