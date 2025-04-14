"use client"

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import {useCartStore} from '../app/store/cartStore';


export default function Header()
    {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
      const items = useCartStore((state) => state.items);
      const itemCount = items.reduce((total, item) => total + item.quantity, 0);

        return (
          <header className="">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="hover:text-foreground/80">
                  About
                </Link>
                <Link href="/blog" className="hover:text-foreground/80">
                  Blog
                </Link>
                <Link href="/contact" className="hover:text-foreground/80">
                  Contact
                </Link>
              </nav>
    
              {/* Logo */}
              <div className="text-center flex-1">
                <Link href="/" className="text-2xl font-medium">
                  CHOC-MAN
                </Link>
              </div>
    
              {/* Cart */}
              <div className="md:w-1/3 flex justify-end">
              <Link href="./cart">
              <button className="cursor-pointer">
                <ShoppingCart className="h-8 w-8" />
                {itemCount > 0 && 
                  (
                    <span>{itemCount}</span>
                  )
                }
              </button>
              </Link>
              </div>
            </div>
    
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4">
                <nav className="flex flex-col space-y-4">
                  <Link href="/about" className="hover:text-foreground/80">
                    About
                  </Link>
                  <Link href="/blog" className="hover:text-foreground/80">
                    Blog
                  </Link>
                  <Link href="/contact" className="hover:text-foreground/80">
                  Contact
                </Link>
                </nav>
              </div>
            )}
          </div>
        </header>
        )
    }