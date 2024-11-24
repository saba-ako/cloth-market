import "./globals.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import RecoilWrapper from "./components/recoilWrapper/recoilWrapper";

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
        <RecoilWrapper>
          <main className="main">
            {children}
          </main>
        </RecoilWrapper>
        <Footer />
      </body>
    </html>
  );
};