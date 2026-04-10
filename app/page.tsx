import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col justify-between selection:bg-zinc-100 selection:text-black">
      
      {/* Header Section */}
      <header className="pt-32 pb-16 px-6 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-12 opacity-90">
          <Image 
            src="/logo.svg" 
            alt="FW Group Logo" 
            width={70} 
            height={70} 
            priority
            className="object-contain"
          />
        </div>
        <h1 className="text-lg md:text-2xl font-serif font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-zinc-300 max-w-2xl leading-relaxed">
          Strategic Business Development & Talent Management
        </h1>
      </header>

      {/* Main Advisory Pillars */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-32">
        
        {/* Pillar 1 */}
        <section className="flex flex-col border-t border-zinc-800 pt-8">
          <h2 className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] uppercase text-white mb-6">
            High-Ticket Sales
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-zinc-400 font-serif font-light">
            We close high-value deals in the real estate and corporate sectors. We identify and acquire the investors and multinational tenants that traditional sales teams miss.
          </p>
        </section>

        {/* Pillar 2 */}
        <section className="flex flex-col border-t border-zinc-800 pt-8">
          <h2 className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] uppercase text-white mb-6">
            Strategic Advisory
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-zinc-400 font-serif font-light">
            We manage the public image and private interests of high-profile figures. We provide the strategic infrastructure so leaders can focus on their mission.
          </p>
        </section>

        {/* Pillar 3 */}
        <section className="flex flex-col border-t border-zinc-800 pt-8">
          <h2 className="text-xs md:text-sm font-sans font-bold tracking-[0.2em] uppercase text-white mb-6">
            Global Talent Management
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-zinc-400 font-serif font-light">
            We represent elite creators and professionals across Western and Middle Eastern markets. We bridge the gap between global talent and premium brand partnerships.
          </p>
        </section>

      </main>

      {/* Minimalist Footer */}
      <footer className="py-16 px-6 flex flex-col items-center justify-center border-t border-zinc-900 text-[10px] md:text-xs tracking-[0.3em] uppercase text-zinc-500 font-sans">
        <a 
          href="mailto:feras@thefwgroup.co" 
          className="hover:text-zinc-200 transition-colors duration-300 mb-6"
        >
          feras@thefwgroup.co
        </a>
        <span className="text-zinc-600 italic font-serif tracking-widest lowercase text-sm">
          By Appointment Only
        </span>
      </footer>
      
    </div>
  );
}