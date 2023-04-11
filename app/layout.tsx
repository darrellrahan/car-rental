import "./globals.css";

export const metadata = {
  title: "Car Rental",
  description:
    "An online platform that allows users to rent cars for personal or business use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
