import "./globals.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { RecoilRoot } from "recoil";

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
        <RecoilRoot>
          <Header />
          <main className="main">
            {children}
          </main>
        </RecoilRoot>
        <Footer />
      </body>
    </html>
  );
};