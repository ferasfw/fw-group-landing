import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black antialiased selection:bg-black selection:text-white font-sans">
      
      {/* Header Section */}
      <header className="w-full flex flex-col items-center justify-center px-6 py-16 md:py-24 border-b border-black text-center">
        <h1 className="text-[15vw] md:text-[14rem] leading-none font-black tracking-tighter uppercase text-black">
          FW Group
        </h1>
        <span className="mt-[40px] text-xl md:text-4xl font-bold tracking-[0.6em] md:tracking-[0.8em] uppercase text-black">
          Global Media Agency
        </span>
        
        <h2 className="mt-16 text-2xl md:text-5xl font-black text-black tracking-tight max-w-5xl mx-auto">
          We Own the Attention of the Male Decision Maker.
        </h2>
        
        <div className="flex flex-col items-center justify-center mt-[30px]">
          <span className="text-[12vw] md:text-[10rem] leading-none font-black text-black tracking-tighter">
            880,000+
          </span>
          <span className="text-3xl md:text-5xl font-black text-black tracking-[0.2em] uppercase mt-[30px]">
            Followers
          </span>
        </div>
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
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start bg-white">
            
            {/* Aligned Heading & Logo */}
            <div className="flex items-end mb-1 relative">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-none m-0">Rula Al-Hroub</h2>
              <div className="relative ml-[11px]">
                <a 
                  href="https://www.facebook.com/rulaalhroob/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors block leading-none"
                  aria-label="Facebook Profile"
                >
                  <svg className="w-10 h-10 md:w-12 md:h-12 block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[14px] font-black tracking-widest uppercase text-gray-700 text-center whitespace-nowrap">
                  Click to Visit
                </span>
              </div>
            </div>
            
            <h3 className="text-xl md:text-3xl font-black text-black mb-10 uppercase tracking-wide">
              National Media Icon
            </h3>
            
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Total Followers</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">450,000+</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Audience</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">66% Male</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Age</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">25 - 44</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Monthly Views</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">3 Million</td>
                </tr>
              </tbody>
            </table>

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
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-start bg-white">
            
            {/* Aligned Heading & Logo */}
            <div className="flex items-end mb-1 relative">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-none m-0">Mira / Ephey</h2>
              <div className="relative ml-[11px]">
                <a 
                  href="https://www.instagram.com/mira.nee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors block leading-none"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-10 h-10 md:w-12 md:h-12 block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[14px] font-black tracking-widest uppercase text-gray-700 text-center whitespace-nowrap">
                  Click to Visit
                </span>
              </div>
            </div>
            
            <h3 className="text-xl md:text-3xl font-black text-black mb-10 uppercase tracking-wide">
              Global Gaming Icon
            </h3>
            
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Total Followers</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">330,000+</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Audience</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">95% Male</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Age</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">25 - 34</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-5 font-black text-black uppercase text-sm md:text-base tracking-widest">Live Analysis & Commentary</th>
                  <td className="py-5 font-black text-black text-right text-xl md:text-2xl">1,500+ Hours</td>
                </tr>
              </tbody>
            </table>

          </div>
        </section>

      </main>

      {/* Partner With Us Section */}
      <section className="py-24 px-6 bg-gray-50 border-b border-black text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-black mb-12">
          Partner With Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <a 
            href="https://calendly.com/feras-thefwgroup/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-1/2 text-center bg-black text-white px-8 py-8 text-xl md:text-2xl font-black tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-2xl"
          >
            Book a Strategy Call
          </a>
          <a 
            href="mailto:feras@thefwgroup.co" 
            className="w-full md:w-1/2 text-center bg-black text-white px-8 py-8 text-xl md:text-2xl font-black tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-2xl"
          >
            Contact via Email
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 px-6 flex flex-row items-center justify-center gap-[50px] text-xs md:text-sm tracking-widest text-black font-black uppercase">
        <a href="mailto:feras@thefwgroup.co" className="flex items-end hover:underline transition-all duration-300">
          <svg className="w-5 h-5 mr-2 relative top-[4px]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="leading-none">feras@thefwgroup.co</span>
        </a>
        
        <a href="https://www.linkedin.com/in/ferasalhroub/" target="_blank" rel="noopener noreferrer" className="flex items-end hover:underline transition-all duration-300">
          <svg className="w-5 h-5 mr-2 relative top-[4px]" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
          <span className="leading-none">LinkedIn</span>
        </a>
      </footer>
      
    </div>
  );
}