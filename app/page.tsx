import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black antialiased selection:bg-black selection:text-white font-sans font-black pervassive-bold">
      
      {/* Navigation Bar / Header */}
      <header className="w-full flex items-center justify-center relative px-6 py-6 border-b border-black md:px-12 md:py-8">
        <h1 className="text-center text-5xl md:text-7xl font-black tracking-tighter uppercase text-black mx-auto pervassive-bold">FW Group</h1>
        <div className="absolute right-6 top-6 flex items-center h-full pervassive-bold">
          <a 
            href="https://calendly.com/feras-thefwgroup/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center bg-black text-white px-6 py-4 text-lg font-black tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-xl pervassive-bold"
          >
            Buy This Market
          </a>
        </div>
      </header>

      {/* GMC Update Section (Resized and Dominant) */}
      <section className="py-16 px-6 text-center border-b border-black pervasive-bold">
        <h2 className="text-2xl md:text-4xl font-black text-black mb-16 tracking-tight pervasive-bold">
          We Own the Attention of the Male Decision Maker.
        </h2>
        
        <div className="flex flex-col items-center justify-center pervasive-bold gap-6">
          <span className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase text-black pervasive-bold GMC-title">
            Global Media Agency
          </span>
          {/* Dominate Size, Visually Dominant Number */}
          <span className="text-8xl md:text-[14rem] leading-none font-black text-black tracking-tighter GMC-number pervasive-bold">
            700,000+
          </span>
          <span className="text-2xl md:text-3xl font-black text-black tracking-[0.2em] uppercase pervasive-bold GMC-followers-label">
            Followers
          </span>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto pervasive-bold">
        
        {/* Talent Section 1: Rula Al-Hroub */}
        <section className="flex flex-col md:flex-row items-stretch min-h-[75vh] border-b border-black pervasive-bold">
          <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center pervasive-bold">
            <Image 
              src="/images/rula_photo.jpg" 
              alt="Rula Al-Hroub" 
              width={600}
              height={750}
              priority
              className="w-full max-w-md aspect-[4/5] object-cover shadow-2xl pervasive-bold" 
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white pervasive-bold">
            <div className="flex items-center justify-between mb-2 pervasive-bold gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black pervasive-bold">Rula Al-Hroub</h2>
              <a 
                href="https://www.facebook.com/rulaalhroob/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors pervasive-bold group relative"
                aria-label="Facebook Profile"
              >
                <svg className="w-12 h-12 pervasive-bold talent-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-center text-xs tracking-widest text-white pervasive-bold bg-black p-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile
                </span>
              </a>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-black mb-8 uppercase tracking-wide pervasive-bold">
              National Media Icon
            </h3>
            
            {/* Simplified Data Table */}
            <table className="w-full text-left border-collapse mb-10 pervasive-bold">
              <tbody className="pervasive-bold">
                <tr className="border-b border-gray-300 pervasive-bold">
                  <th className="py-4 font-black text-black uppercase text-xs tracking-widest pervasive-bold">Followers (FB, X, TikTok)</th>
                  <td className="py-4 font-black text-black text-right text-xl pervasive-bold">450,000+</td>
                </tr>
              </tbody>
            </table>

            <div className="pervasive-bold">
              <a 
                href="mailto:feras@thefwgroup.co" 
                className="inline-block bg-black text-white px-8 py-4 text-sm font-black tracking-widest uppercase hover:bg-gray-800 transition-colors pervasive-bold"
              >
                Inquire for Representation
              </a>
            </div>
          </div>
        </section>

        {/* Talent Section 2: Mira / Ephey */}
        <section className="flex flex-col md:flex-row-reverse items-stretch min-h-[75vh] border-b border-black pervasive-bold">
          <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center pervasive-bold">
            <Image 
              src="/images/mira_photo.jpg" 
              alt="Mira / Ephey" 
              width={600}
              height={750}
              className="w-full max-w-md aspect-[4/5] object-cover shadow-2xl pervasive-bold" 
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white pervasive-bold">
            <div className="flex items-center justify-between mb-2 pervasive-bold gap-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black pervasive-bold">Mira / Ephey</h2>
              <a 
                href="https://www.instagram.com/mira.nee/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors pervasive-bold group relative"
                aria-label="Instagram Profile"
              >
                <svg className="w-12 h-12 pervasive-bold talent-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                 <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-center text-xs tracking-widest text-white pervasive-bold bg-black p-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile
                </span>
              </a>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-black mb-8 uppercase tracking-wide pervasive-bold">
              Global Gaming Icon
            </h3>
            
            {/* Simplified Data Table */}
            <table className="w-full text-left border-collapse mb-10 pervasive-bold">
              <tbody className="pervasive-bold">
                <tr className="border-b border-gray-300 pervasive-bold">
                  <th className="py-4 font-black text-black uppercase text-xs tracking-widest pervasive-bold">Followers (X, Twitch, Insta)</th>
                  <td className="py-4 font-black text-black text-right text-xl pervasive-bold">330,000+</td>
                </tr>
                <tr className="border-b border-gray-300 pervasive-bold">
                  <th className="py-4 font-black text-black uppercase text-xs tracking-widest pervasive-bold">Analysis & Commentary Hrs</th>
                  <td className="py-4 font-black text-black text-right text-xl pervasive-bold">1500+ Hrs</td>
                </tr>
              </tbody>
            </table>

            <div className="pervasive-bold">
              <a 
                href="mailto:feras@thefwgroup.co" 
                className="inline-block bg-black text-white px-8 py-4 text-sm font-black tracking-widest uppercase hover:bg-gray-800 transition-colors pervasive-bold"
              >
                Inquire for Representation
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Bottom CTA Section */}
      <div className="w-full px-6 py-24 flex justify-center bg-gray-50 border-b border-black pervasive-bold">
        <a 
          href="https://calendly.com/feras-thefwgroup/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full max-w-2xl text-center bg-black text-white px-8 py-8 text-2xl md:text-3xl font-black tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-2xl pervasive-bold"
        >
          Buy This Market
        </a>
      </div>

      {/* Footer Section */}
      <footer className="py-16 px-6 text-center text-xs tracking-widest text-black font-black uppercase pervasive-bold footer">
        <a href="mailto:feras@thefwgroup.co" className="hover:underline transition-all duration-300 pervasive-bold footer-link text-sm">
          feras@thefwgroup.co
        </a>
        <span className="mx-4 text-black pervasive-bold footer-separator">|</span>
        <a href="https://www.linkedin.com/in/ferasalhroub/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-300 pervasive-bold footer-link text-sm">
          LinkedIn
        </a>
      </footer>
      
    </div>
  );
}