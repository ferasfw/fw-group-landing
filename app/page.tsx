import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black antialiased selection:bg-black selection:text-white font-sans">
      
      {/* Header Section */}
      <header className="py-24 px-6 text-center border-b border-black">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-black">FW Group</h1>
        <p className="mt-6 text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-black">
          Specialised Talent Representation
        </p>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto">
        
        {/* Talent Section 1: Rula Al-Hroub */}
        <section className="flex flex-col md:flex-row items-stretch min-h-[75vh] border-b border-black">
          <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
            <Image 
              src="/images/rula_photo.jpg" 
              alt="Rula Al-Hroub" 
              width={600}
              height={750}
              priority
              className="w-full max-w-md aspect-[4/5] object-cover shadow-2xl" 
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-black">Rula Al-Hroub</h2>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-8 uppercase tracking-wide">
              The National Authority
            </h3>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start">
                <span className="mr-4 text-black font-black">—</span>
                <span className="text-lg leading-relaxed text-black font-medium">Secretary General of Jordan Labor Party</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black font-black">—</span>
                <span className="text-lg leading-relaxed text-black font-medium">Former Member of Parliament</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black font-black">—</span>
                <span className="text-lg leading-relaxed text-black font-medium">National Media Icon</span>
              </li>
            </ul>
            <div>
              <a 
                href="mailto:feras@thefwgroup.co" 
                className="inline-block bg-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
              >
                Inquire for Representation
              </a>
            </div>
          </div>
        </section>

        {/* Talent Section 2: Mira / Ephey */}
        <section className="flex flex-col md:flex-row-reverse items-stretch min-h-[75vh] border-b border-black">
          <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
            <Image 
              src="/images/mira_photo.jpg" 
              alt="Mira / Ephey" 
              width={600}
              height={750}
              className="w-full max-w-md aspect-[4/5] object-cover shadow-2xl" 
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-black">Mira / Ephey</h2>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-8 uppercase tracking-wide">
              Global Broadcast & Gaming
            </h3>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start">
                <span className="mr-4 text-black font-black">—</span>
                <span className="text-lg leading-relaxed text-black font-medium">Global Broadcast Analyst for Dota 2</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black font-black">—</span>
                <span className="text-lg leading-relaxed text-black font-medium">Renowned Variety Streamer</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-black font-black">—</span>
                <span className="text-lg leading-relaxed text-black font-medium">Specialized Tech & Gaming Influence</span>
              </li>
            </ul>
            <div>
              <a 
                href="mailto:feras@thefwgroup.co" 
                className="inline-block bg-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
              >
                Inquire for Representation
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="py-16 px-6 text-center text-xs tracking-widest text-black font-bold uppercase">
        <a href="mailto:feras@thefwgroup.co" className="hover:underline transition-all duration-300">
          feras@thefwgroup.co
        </a>
        <span className="mx-4 text-black">|</span>
        <a href="https://www.linkedin.com/in/ferasalhroub/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-300">
          LinkedIn
        </a>
      </footer>
      
    </div>
  );
}