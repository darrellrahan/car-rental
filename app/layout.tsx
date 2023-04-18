import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Car Rental",
  description:
    "An online platform that allows users to rent cars for personal or business use.",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-custom-white scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
