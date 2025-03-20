'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
      <main>
          {/* Hero Section */}
        <section className="min-h-[10vh] flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl text-center">Fine Art Painter. <br /> Printmaker.</h1>
        </section>

        <section>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sand */}
            <div className="space-y-4">
              <Link href="/prints/sand">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6"
                    alt="Sand Print"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
              </div>
            </Link>
            <h4 className="text-xl text-center"><Link href="/prints/sand">Sand</Link></h4>
          </div>
          </div>
        </section>
      </main>
  );
}


