'use client'
import Image from 'next/image';
import Link from 'next/link';
import Sand from './img/Sand.jpg'
import Satellite from './img/satellite.jpg'
import Ocean from './img/océan.jpg'
import Fresa from './img/fraise.jpg'
import Sangre from './img/sangre.jpg'
import Dune from './img/dune.jpg'
import Group from './img/Group+58.jpg'


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
                    src={Sand}
                    alt="Sand Print"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
              </div>
            </Link>
            <h4 className="text-xl text-center"><Link href="/prints/sand">Sand</Link></h4>
          </div>

          {/* Satellite */}
          <div className="space-y-4">
            <Link href="/prints/satellite">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src={Satellite}
                  alt="Satellite Print"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <h4 className="text-xl text-center"><Link href="/prints/satellite">Satellite</Link></h4>
          </div>

          {/* Ocean */}
          <div className="space-y-4">
            <Link href="/prints/ocean">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src={Ocean}
                  alt="Ocean Print"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <h4 className="text-xl text-center"><Link href="/prints/ocean">Ocean</Link></h4>
          </div>

          {/* Fresa */}
          <div className="space-y-4">
            <Link href="/prints/fresa">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src={Fresa}
                  alt="Fresa Print"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <h4 className="text-xl text-center"><Link href="/prints/fresa">Fresa</Link></h4>
          </div>

          {/* Sangre */}
          <div className="space-y-4">
            <Link href="/prints/fresa">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src={Sangre}
                  alt="Sangre Print"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <h4 className="text-xl text-center"><Link href="/prints/fresa">Fresa</Link></h4>
          </div>

          {/* Dune */}
          <div className="space-y-4">
            <Link href="/prints/fresa">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src={Dune}
                  alt="Dune Print"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <h4 className="text-xl text-center"><Link href="/prints/fresa">Fresa</Link></h4>
          </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image 
                src={Group}
                alt="Studio"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Contact</h2>
              <p className="text-lg">
                For custom paintings, or any questions you can contact me here:
                <br /><br />
                <a href="mailto:email@email.com" className="hover:underline">email@email.com</a><br />
                <a href="tel:+15555555555" className="hover:underline">(555) 555-5555</a>
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}


