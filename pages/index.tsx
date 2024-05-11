import type { NextPage } from 'next'
import ServicesSection from "../src/services"
import Logo from "../src/components/Logo"
import ThemeChanger from '../src/components/ThemeChanger';
import { useTheme } from 'next-themes';

const Home: NextPage = () => {
  const { resolvedTheme } = useTheme()
  return (
    <div className='h-full w-full'>
      <div className="mt-20 absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="w-full h-48 absolute bg-blue-300 dark:bg-primary">
      <div className="flex justify-end pt-1 pr-2">
        <ThemeChanger />
      </div>
        <div className="sm:ml-0 ml-5 mr-0 mt-3 md:pl-80 md:pr-80 sm:w-full h-full">
          <Logo size={100} color={resolvedTheme === 'light' ? '#189AA7' : '#fff'} />
        </div>
      </div>
      <div className='mt-28 w-full absolute overflow-scroll'>
        <ServicesSection />
      </div>
    </div>
  )
}

export default Home;
