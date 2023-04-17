import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiOutlineDownCircle } from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='px-3 overflow-hidden'>
      <div className='container m-auto text-white mb-24'>
        <header className='h-48 w-full flex flex-column items-center'>
          <div>
            <Image src={"/PLC_ONE_L_F.png"} alt='PLC Logo' width={200} height={100} />
          </div>
        </header>

        <div className='flex'>
          <div className='flex flex-column items-center m-auto flex-wrap'>
            <div style={{ marginRight: "-100px" }} className='text-5xl whitespace-nowrap md:mt-20'>
              Get Ready for<br />
              a <span className='font-bold'>new Chapter</span> in<br />
              Industrial Automation<br />
            </div>
            <Image style={{ marginRight: "-100px" }} src={"/PLC_G.png"} alt='PLC Logo' width={800} height={200} />
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 text-center mt-20'>
          <div>
            <div className='font-bold text-3xl md:text-4xl'>5×</div>
            <div className='mt-2 text-xl text-stone-400'>EFFICIENCY</div>
          </div>
          <div>
            <div className='font-bold text-3xl md:text-4xl'>10×</div>
            <div className='mt-2 text-xl text-stone-400'>CHEAPER</div>
          </div>
          <div>
            <div className='font-bold text-3xl md:text-4xl'>1 MIO×</div>
            <div className='mt-2 text-xl text-stone-400'>FASTER</div>
          </div>
        </div>

        <div>
          <Image className='m-auto' alt="PLC ONE CASE" src={"/Case.png"} width={1100} height={600} />
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24'>
          <h2 className='text-3xl font-bold mt-10'>One Simple Solution for the Tasks of the Future</h2>
          <Image src={"/Compare.png"} className='mt-10' alt="Compare" height={500} width={1000} />
          <div className='text-xl mt-12'>No special modules for just one purpose, because all data processing is done on one chip.
            No unnessesary wireing and power supplies, because you only need one modular PCB</div>
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-3xl font-bold mt-10'>All You Need in One Modular System</h2>
          <Image src={"/PLC_Example.png"} className='mt-10' alt="Compare" height={500} width={1000} />
          <div className='text-xl mt-12'>All extensions are compliant with the CRUVI Standard. Use not just our modules,
            but also extensions from industry leaders in the FPGA development space. Process data from a camera on the same
            chip that runs your industrial plant.</div>
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-3xl font-bold mt-10'>Not just an Industry Controller</h2>
          <Image src={"/PLC_System.png"} className='mt-10' alt="Compare" height={500} width={1000} />
          <div className='text-xl mt-12'>Our flexible modular system can be used as an industry controler, but the processing
            power also allows applications with neural networks and image processing. The ethernet extension then connects multiple systems.
            The low price and small size also allows the direct integration in robots as PCB.</div>
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-3xl font-bold mt-10'>We Only Have One Earth</h2>
          <div className='md:grid md:grid-cols-3 gap-3 text-center mt-10'>
            <div>
              <Image className='m-auto mt-10 md:mt-0' src={"/Minimalism.png"} alt="Minimalism" height={160} width={160} />
              <h2 className='font-bold text-2xl'>Minimalism is More than you Need</h2>
              <span>With only one chip and power supply, you need less electronics for more performance</span>
            </div>
            <div>
              <Image className='m-auto mt-10 md:mt-0' src={"/Modular.png"} alt="Modular" height={160} width={160} />
              <h2 className='font-bold text-2xl'>Fully Modular</h2>
              <span>Only replace what is necessary with the modular PCBs</span>
            </div>
            <div>
              <Image className='m-auto mt-10 md:mt-0' src={"/Energy.png"} alt="Energy" height={160} width={160} />
              <h2 className='font-bold text-2xl'>Less Electronics for the Best Energy Efficiency</h2>
              <span>Run your whole industrial plant
                with the energy of just one small battery pack</span>
            </div>
          </div>
        </div>

        <div className='text-center mt-10 max-w-4xl m-auto mt-24 text-xl'>
          <h2 className='text-3xl font-bold mt-10'>Contact</h2>
          <div className='text-xl mt-5'>Beier & Wiegand Industrial Gbr</div>
          <a href='mailto:info@plc-one.net'>info@plc-one.net</a>
          <div>Hornscher Weg 23</div>
          <div>32657 Lemgo</div>
        </div>

      </div>

      <footer className='container text-white text-center m-auto'>
        <div>Copyright © 2022 PLC-ONE.net</div>
      </footer>
    </main>
  )
}
