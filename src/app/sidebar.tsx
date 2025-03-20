import Link from "next/link";



export default function Menu() {
    return (
        <div className="w-screen pl-54 pt-5">

            <div className="flex font-medium mx-4">
                <Link href="./page.tsx">Home</Link>
                <Link href="./about/page.tsx">About</Link>
                <Link href="./contact/page.tsx">Contact</Link>
                <Link href="./blog/page.tsx">Blog</Link>
            </div>
        </div>
    );
}