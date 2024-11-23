import "./globals.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

export const metadata = {
  title: 'Cielo Apparel-best cloth market'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};