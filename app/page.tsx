export default function Home() {
  return (
    <div className="bg-white text-gray-900 antialiased selection:bg-gray-900 selection:text-white font-sans">
      
      {/* Header Section */}
      <header className="py-24 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">FW Group</h1>
        <p className="mt-6 text-xs md:text-sm font-light tracking-[0.3em] uppercase text-gray-500">
          Specialised Talent Representation
        </p>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto">
        
        {/* Talent Section 1: Rula Al-Hroub */}
        <section className="flex flex-col md:flex-row items-stretch min-h-[75vh] border-b border-gray-100">
          <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
            <img 
              src="/images/rula_photo.jpg" 
              alt="Rula Al-Hroub" 
              className="w-full max-w-md aspect-[4/5] object-cover shadow-2xl" 
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-gray-50/30">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Rula Al-Hroub</h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-8 uppercase tracking-wide">
              The National Authority
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <span className="mr-4 text-gray-900 font-bold">—</span>
                <span className="text-lg leading-relaxed text-gray-800">Secretary General of Jordan Labor Party</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-gray-900 font-bold">—</span>
                <span className="text-lg leading-relaxed text-gray-800">Former Member of Parliament</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-gray-900 font-bold">—</span>
                <span className="text-lg leading-relaxed text-gray-800">National Media Icon</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Talent Section 2: Mira / Ephey */}
        <section className="flex flex-col md:flex-row-reverse items-stretch min-h-[75vh] border-b border-gray-100">
          <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
            <img 
              src="/images/mira_photo.jpg" 
              alt="Mira / Ephey" 
              className="w-full max-w-md aspect-[4/5] object-cover shadow-2xl" 
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Mira / Ephey</h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-8 uppercase tracking-wide">
              Global Broadcast & Gaming
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <span className="mr-4 text-gray-900 font-bold">—</span>
                <span className="text-lg leading-relaxed text-gray-800">Global Broadcast Analyst for Dota 2</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-gray-900 font-bold">—</span>
                <span className="text-lg leading-relaxed text-gray-800">Renowned Variety Streamer</span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 text-gray-900 font-bold">—</span>
                <span className="text-lg leading-relaxed text-gray-800">Specialized Tech & Gaming Influence</span>
              </li>
            </ul>
          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="py-16 px-6 text-center text-xs tracking-widest text-gray-400 font-medium uppercase">
        <a href="mailto:feras@thefwgroup.co" className="hover:text-gray-900 transition-colors duration-300">
          feras@thefwgroup.co
        </a>
        <span className="mx-4 text-gray-300">|</span>
        <a href="https://thefwgroup.co" className="hover:text-gray-900 transition-colors duration-300">
          thefwgroup.co
        </a>
      </footer>
      
    </div>
  );
}