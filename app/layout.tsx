import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mini Netflix',
  description: 'A minimalist movie app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-gray-800 text-white py-4 shadow-lg">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold">Mini-Netflix</h1>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-10">
          <p>Mini-Netflix Code Test</p>
        </footer>
      </body>
    </html>
  );
}
