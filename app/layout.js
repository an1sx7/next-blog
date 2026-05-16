import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'

export const metadata = {
  title: "Blog",
  description: "simple blog app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body className="min-h-full">
          <main className="mx-auto md:w-[70%]">
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
