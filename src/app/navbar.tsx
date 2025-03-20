import Link from "next/link";

export default function Menu()
    {
        return (
    <header className=" py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
      <div>
        <Link href="/" className="hover:underline">Home</Link>
      </div>
        <h1 className="text-xl font-bold">Jay Montclaire</h1>
        <nav className="flex space-x-4">
          <Link href="/all-prints" className="hover:underline">About</Link>
          <Link href="/about" className="hover:underline">Contact</Link>
          <Link href="/about" className="hover:underline">Blog</Link>
        </nav>
      </div>
    </header>
        )
    }