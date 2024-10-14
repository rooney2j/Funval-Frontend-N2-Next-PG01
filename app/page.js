export default function Home() {
  return (
    <>
      {/* Este es el fondo negro */}
      <div className='bg-black w-screen h-screen flex justify-center items-center'>

        {/* Este es el fondo azul */}
        <div className='relative w-[calc(100%-10%)] h-[calc(100%-10%)] bg-[#002e63] flex justify-center items-center'>
          {/* Esquina superior izquierda */}
          <div className='h-14 w-56 absolute top-0 left-0'>
            <p className='text-white'><span className='text-amber-200'>longitude</span> - 28.6542</p>
            <p className='text-white'><span className='text-amber-200'>latitude</span> - 77.2373</p>
          </div>

          {/* Esquina superior derecha */}
          <div className='h-14 w-56 absolute top-0 right-0'>
            <p className='text-white text-end'>Chrome v119.0.0.0 - <span className='text-amber-200'>Browser</span></p>
            <p className='text-white text-end'>Windows 10 - <span className='text-amber-200'>OS</span></p>
          </div>

          {/* Esquina inferior izquierda */}
          <div className='h-14 w-56 absolute bottom-0 left-0'>
            <p className='text-white'><span className='text-amber-200'>Local Time</span> - 16.05</p>
            <p className='text-white'><span className='text-amber-200'>Time Spend</span> - 00.05</p>
          </div>

          {/* Esquina inferior derecha */}
          <div className='h-14 w-56 absolute bottom-0 right-0'>
            <p className='text-white text-end'>122.161.153.938 - <span className='text-amber-200'>IP</span></p>
            <p className='text-white text-end'>Delhi, India - <span className='text-amber-200'>Location</span></p>
          </div>

          {/* Saludo, nombre y habilidades */}
          <div className='h-[150px] w-[400px] flex flex-col justify-between'>
            <p className='text-slate-100 text-start text-3xl'>Hi, I am</p>
            <h1 className='text-white text-end text-4xl'>Jaspinder Signh</h1>
            <div className='flex items-center'>
              <span className='text-amber-200 text-start text-lg uppercase'>Web Developer &nbsp;</span>
              <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
              <span className='text-amber-200 text-start text-lg uppercase'>&nbsp; UI & UX Designer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
