import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do App",
  description: "Generated by skouza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
