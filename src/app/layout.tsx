import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from './StoreProvider';
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
       
            {children}
    
        </StoreProvider>
      </body>
    </html>
  );
}