import type { Metadata } from "next";
import Head from 'next/head';
import { Inter, Purple_Purse } from "next/font/google";
import "./globals.css";
import ToggleThemeButton from "../app/components/ToggleTheme"
import Link from 'next/link'; 
import WaterDropIcon from '../../public/WaterDropIcon';
import PumpIcon from '../../public/PumpIcon';
import SnowIcon from '../../public/SnowIcon';
import ThermoIcon from '../../public/ThermoIcon';
import CogIcon from '../../public/CogIcon';
import {
  MoonIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Cog8ToothIcon,
  FolderOpenIcon,
  EyeDropperIcon,
  SunIcon,
  RssIcon,

} from '@heroicons/react/24/outline';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <Head>
          <script src="../../public/script/toggleTheme.js" defer></script>
        </Head>
        <div className=" h-screen flex-col md:flex-row md:overflow-auto  max-w-[1444px] m-auto">

          <div className="w-full flex items-center px-3 py-4 gap-10 px-12 lg:text-5xl text-2xl justify-between">


            {/* <button className=" w-14" id="theme-toggle">
              <SunIcon />
            </button> */}
            <ToggleThemeButton />
            <p>прибор №2082018</p>

            <button className=" w-14">
              <CheckCircleIcon />
            </button>

          </div>
          {/* //   <body className={inter.className}>{children}</body> */}
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>

    </html>
  );
  // return (
  //   <html lang="en">
  //      <body className={`${inter.className} antialiased`}>{children}</body>
  //   </html>
  // );
}
