import '../styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { CartProvider } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Gallery Tromsø | Arctic Fine Art & Photography',
  description: 'Exquisite photography and physical prints from Northern Norway and the Arctic.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-arctic-charcoal font-sans antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
