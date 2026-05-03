export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center antialiased selection:bg-white selection:text-black">
      
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold max-w-5xl tracking-tighter leading-[1.1] mb-12 uppercase">
        I close the deals your team can't. Commission only.
      </h1>
      
      <a 
        href="https://wa.me/962790098352" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white text-black font-bold text-xl md:text-2xl px-12 py-6 uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300"
      >
        Get Results Now
      </a>

    </div>
  );
}