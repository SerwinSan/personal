import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-p5-red text-p5-white text-center overflow-hidden relative">
      
      {/* Background Text Besar */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-heading opacity-10 select-none text-p5-black">
        404
      </h1>

      <div className="relative z-10 transform -rotate-3">
        <h2 className="font-heading text-8xl md:text-9xl text-p5-black bg-p5-white px-4 shadow-[15px_15px_0px_rgba(0,0,0,1)]">
          MISSING?
        </h2>
        <p className="mt-6 font-body text-2xl bg-p5-black inline-block px-6 py-2 transform skew-x-[-10deg] border-2 border-p5-yellow">
          Target not found in the Metaverse.
        </p>
        
        <div className="mt-10">
            <Link href="/" className="font-heading text-3xl hover:text-p5-yellow hover:underline decoration-4 underline-offset-8">
                RETURN TO HIDEOUT &rarr;
            </Link>
        </div>
      </div>
    </div>
  );
}