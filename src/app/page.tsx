import Image from "next/image";
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
  ClipboardDocumentListIcon,

} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between">
      <div className=" grow space-x-2 grid grid-cols-2 md:grid-cols-3 gap-10 lg:text-5xl text-4xl">
                <div className="flex flex-col items-center md:max-w-80 lg:max-w-96">
                  <SnowIcon color='#8DEBFF' />
                  <p className="hidden md:block">Термостат</p>
                </div>
                <div className="flex flex-col items-center md:max-w-80 lg:max-w-96">
                  <ThermoIcon color='blue' />
                  <p className="hidden md:block">Термоциклер</p>
                </div>
                <div className="flex flex-col items-center md:max-w-80 lg:max-w-96">
                  <PumpIcon color='#A39BFF' />
                  <p className="hidden md:block ">Термоциклер</p>
                </div>
                <div className="flex flex-col items-center md:max-w-80 lg:max-w-96">
                  <WaterDropIcon color='#9EEEFF' />
                  <p className="hidden md:block">Гидравлика</p>
                </div>
                <div className="flex flex-col items-center md:max-w-80 lg:max-w-96">
                  <ClipboardDocumentListIcon color='#FFE49F' />
                  <p className="hidden md:block">Журнал</p>
                </div>
                <div className="flex flex-col items-center md:max-w-80 lg:max-w-96">
                  <CogIcon color="#E59BFF" />
                  <p className="hidden md:block">Настройки</p>
                </div>
                

                
              </div>
              </main>
      
      
    
  );
}
