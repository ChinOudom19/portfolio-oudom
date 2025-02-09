import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import Oudom from '../images/oudom.png';

const Home = () => {
  return (
    <section className='h-[800px] relative bg-accent/10 xl:bg-white'>
      <div className="container mx-auto h-full">
        <div className='relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10'>
          <div>
            <h1 className='h1'>
              <span className='text-accent'>Hello, I'm Chin</span> Oudom
            </h1>
            <h1 className='h1'>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["Graphic Designer", 2000, "Web Developer", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper='span'
                cursor={false}
              />
            </h1>
          </div>
          <p className='lead max-w-[476px] mb-7'>Delivering powerful, custom websites that blend aesthetics with performance.</p>
          <ScrollLink to='contact' smooth>
            <button className='btn btn-accent mb-8'>Contact me</button>
          </ScrollLink>
          <div>Stats</div>
        </div>
        <div className='hidden xl:flex justify-center w-[55vw] h-[800px] absolute top-0 right-0 bg-accent'>
          <div className='w-[558px] h-642px buttom-0 z-40'>
            <img
              src={Oudom}
              alt='oudom'
              className='object-contain h-[700px] mt-[100px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
