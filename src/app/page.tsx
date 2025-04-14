'use client'
import ProductGrid from './components/productGrid';


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-8">
      <ProductGrid />
    </div>
  </main>
  );
}

