import { Inter } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Navbar from "./Components/Navbar";
import { ConfigProvider } from "antd";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Notes App",
  description: "Notes APp",
};

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#2F2E2E",
              // Alias Token
              colorBgContainer: "#ffffff",
            },
          }}
        >
          <div className="page">
            <Navbar />
            {children}
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}
