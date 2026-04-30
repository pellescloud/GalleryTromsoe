import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-8xl md:text-9xl text-arctic-midnight/10 absolute -z-10">404</h1>
        <h2 className="font-serif text-4xl text-arctic-midnight mb-6">Lost in the Blizzard</h2>
        <p className="text-arctic-charcoal/60 mb-10 max-w-md">
          The page you are looking for has been covered by the shifting Arctic snow. Let us guide you back to the gallery.
        </p>
        <Link href="/shop" className="bg-arctic-midnight text-white px-12 py-5 text-xs tracking-widest uppercase font-bold shadow-xl">
          Return to Archive
        </Link>
      </main>
      <Footer />
    </div>
  );
}
