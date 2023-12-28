import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiOutlineDownCircle } from 'react-icons/ai';
import { RiPlantLine } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='pt-3 pb-0 m-0 overflow-hidden'>
      <title>PLC-ONE</title>
      <div className='container m-auto text-white mb-24'>
        <header className='h-32 w-full flex flex-column absolute xl:ml-16'>
          <div>
            <Image src={"/Logo_SVG-ONE-plc.svg"} alt='PLC Logo' className="mt-10" width={260} height={150} />
          </div>
        </header>

        <div className='flex'>
          <div className='flex flex-column items-center m-auto flex-wrap mt-32 md:mt-10'>
            <div style={{ marginRight: "-94px" }} className='text-4xl md:text-5xl whitespace-nowrap md:mt-20'>
              Get Ready for<br />
              a <span className='font-bold'>New Chapter</span> in<br />
              Industrial Automation<br />
            </div>
            <Image style={{ marginRight: "-100px" }} src={"/PLC_G.png"} alt='PLC Logo' width={800} height={500} />
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 text-center mt-20'>
          <div>
            <div className='font-bold text-3xl md:text-6xl'>5×</div>
            <div className='mt-2 text-xl text-stone-400 md:text-3xl'>EFFICIENCY*</div>
          </div>
          <div>
            <div className='font-bold text-3xl md:text-6xl'>10×</div>
            <div className='mt-2 text-xl text-stone-400 md:text-3xl'>CHEAPER*</div>
          </div>
          <div>
            <div className='font-bold text-3xl md:text-6xl'>1 MIO×</div>
            <div className='mt-2 text-xl text-stone-400 md:text-3xl'>FASTER*</div>
          </div>
        </div>

        <div>
          <Image className='m-auto mt-10' alt="PLC ONE CASE" src={"/Case.png"} width={1100} height={600} />
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24'>
          <h2 className='text-4xl font-bold mt-10'>One Simple Solution for the Tasks of the Future</h2>
          <Image src={"/Compare.png"} className='mt-10' alt="Compare" height={500} width={1000} />
          <div className='text-xl mt-12'>No special modules for just one purpose, because all data processing is done on one chip.
            No unnecessary wiring and power supplies, only one modular PCB is needed</div>
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-4xl font-bold mt-10'>All You Need in One Modular System</h2>
          <Image src={"/PLC_Example.png"} className='mt-10' alt="Compare" height={500} width={1000} />
          <div className='text-xl mt-12'>All extensions are compliant with the CRUVI Standard. Use not just our modules,
            but also extensions from industry leaders in the FPGA development space. Process data from a camera on the same
            chip that runs your industrial plant.</div>
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-4xl font-bold mt-10'>Not an ordinary Industrial Controller</h2>
          <Image src={"/PLC_System.png"} className='mt-10' alt="Compare" height={500} width={1000} />
          <div className='text-xl mt-12'>Our modular system can be used as an industrial controller, the processing power also allows applications with neural networks and image processing.
            The ethernet extension then connects multiple systems. Low price and small form factor also allows direct integration in robotics as PCB.</div>
        </div>

        <div className='text-center mt-5 max-w-4xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-4xl font-bold mt-10'>We Only Have One Earth</h2>
          <div className='md:grid md:grid-cols-3 gap-3 text-center mt-10'>
            <div>
              <TfiWorld style={{ height: 140, width: 140, color: "#0092db" }} className='text-center m-auto p-3' />
              <h2 className='font-bold text-2xl'>Minimalistic</h2>
              <span>One chip and power supply, less electronics, more performance</span>
            </div>
            <div>
              <Image className='m-auto mt-10 md:mt-0' src={"/Modular.png"} alt="Modular" height={140} width={140} />
              <h2 className='font-bold text-2xl'>Fully Modular</h2>
              <span>Only replace what is necessary</span>
            </div>
            <div>
              <RiPlantLine style={{ height: 140, width: 140, color: "#1ED760" }} className='text-center m-auto mt-10 md:mt-0' />
              <h2 className='font-bold text-2xl'>Best Energy Efficiency</h2>
              <span>Run data processing for a whole industrial plant of just one small battery pack</span>
            </div>
          </div>
        </div>


        <div className='text-center mt-5 max-w-2xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-4xl font-bold mt-10'>Our Team</h2>
          <div className='md:grid md:grid-cols-3 text-center mt-10'>
            <div>
              <div className='m-auto md:mt-0' >
                <Image className='m-auto md:mt-0' src={"/Leon.png"} alt="Modular" height={170} width={170} />
              </div>
              <div className='text-xl mt-2'>Leon Beier</div>
              <div>
                <a className='text-stone-300 hover:text-stone-100' href='https://www.linkedin.com/in/leon-beier-55bbb7230/' target='_blank'>LinkedIn</a>
              </div>
              <div>
                <a className='text-stone-300 hover:text-stone-100' href='mailto:lbeier@plc-one.net'>lbeier@plc-one.net</a>
              </div>
            </div>
            <div>
              <div className='m-auto md:mt-0' >
                <Image className='m-auto md:mt-0' src={"/Leo.png"} alt="Modular" height={170} width={170} />
              </div>
              <div className='text-xl mt-2'>Leo Wiegand</div>
              <div>
                <a className='text-stone-300 hover:text-stone-100' href='https://www.linkedin.com/in/leo-wiegand-b27aa0272/' target='_blank'>LinkedIn</a>
              </div>
              <div>
                <a className='text-stone-300 hover:text-stone-100' href='mailto:lwiegand@plc-one.net'>lwiegand@plc-one.net</a>
              </div>
            </div>
            <div>
              <div className='m-auto md:mt-0' >
                <Image className='m-auto md:mt-0' src={"/Ali.png"} alt="Modular" height={170} width={170} />
              </div>
              <div className='text-xl mt-2'>Ali Durmaz</div>
              <div>
                <a className='text-stone-300 hover:text-stone-100' href='https://www.linkedin.com/in/ali-durmaz-1a0799215/' target='_blank'>LinkedIn</a>
              </div>
              <div>
                <a className='text-stone-300 hover:text-stone-100' href='mailto:adurmaz@plc-one.net'>adurmaz@plc-one.net</a>
              </div>
            </div>

          </div>
        </div>

        <div className='text-center mt-5 max-w-2xl m-auto mt-24 lg:mt-32'>
          <h2 className='text-4xl font-bold mt-10'>The Story Behind our Idea</h2>
          <div className='mt-10 text-lg' >
            Our experience with other PLCs led to PLC One. We were tired of old IDEs and complex PLCs that cost a fortune.
            We thought about how we can make PLCs as simple as possible and created a revolutionary modular and environmentally friendly Controller.
            Our focus was to deliver the easiest solution starting from the purchase process all the way to installation and maintenance.
          </div>
        </div>

        <div className='mt-10 text-center text-sm'>*Compared to a system that uses a Cyclone V FPGA with embedded ARM processor and RTOS which is similar to common PLCs,
            running a typical program  with a cycle time of 100 ms. The FPGA in the PLC ONE needs less than 100 ns to process the data. Price includes only production costs of named examples.</div>

      </div>

      <div className='bg-white text-black py-5 m-0 shadow-inner shadow-slate-800'>
        <div className='text-center max-w-2xl m-auto lg:mt-10'>
          <h2 className='text-4xl font-bold mt-0'>Our Partners</h2>
          <div className='md:grid md:grid-cols-4 text-center mt-10'>
            <div>
              <img className='m-auto md:mt-0' src={"/Partner/Partner1.jpg"} alt="EXIST" />
            </div>
            <div>
              <img className='m-auto md:mt-0' src={"/Partner/Partner2.jpg"} alt="European Union" />
            </div>
            <div>
              <img className='m-auto md:mt-0' src={"/Partner/Partner3.jpg"} alt="Bundesregierung für Wirtschaft und Klimaschutz" />
            </div>
            <div>
              <img className='m-auto md:mt-0' src={"/Partner/Partner4.jpg"} alt="ESF" />
            </div>
          </div>
        </div>


        <footer className='container text-center m-auto'>

          <div className='mt-5 text-stone-500 hover:text-stone-100'>
            <Link href="/contact" >Contact / Impressum</Link>
          </div>

          <div className='mt-5'>Copyright © 2022 PLC-ONE.net</div>
        </footer>
      </div>
    </main>
  )
}
