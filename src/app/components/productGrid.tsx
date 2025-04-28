'use client';
import Image from 'next/image'
import Link from 'next/link';
import { products } from '../data/products';
import Group from '../img/Group.jpg'



export default function ProductGrid() {
  return (
    <div className="min-h-screen  py-8">
      {/* Hero Section */}
        <section className="min-h-[10vh] flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-center">Fine Art Painter. Printmaker.</h1>
        </section>

        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
            <Link
              key={product.id}
              href={`../products/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-center">{product.name}</h3>
                <p className="text-gray-600 text-center">${product.price}</p>
              </div>
            </Link>
        ))}
        </div>
        
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
      </div>
  );
}