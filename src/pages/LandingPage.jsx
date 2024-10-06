import grass from '../assets/grass.png';
import table from '../assets/table.png';
import onion from '../assets/onion.png';
import chips from '../assets/chips.png';
import greenPringles from '../assets/greenPringle.png';
import bluePringles from '../assets/bluePringle.png';
import orangePringles from '../assets/orangePringle.png';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';

export const LandingPage = () => {
    const blueRef=useRef(null);
    const greenRef=useRef(null);
    const orangeRef=useRef(null);

    useEffect(()=>{
        gsap.to(orangeRef.current,{
            delay:1,
            rotate:10,
            x:20,
            duration: 3,  
            repeat:-1,
            yoyo:true
        })
        gsap.to(blueRef.current,{
            delay:1,
            x:20,
            rotate:-9,
            duration: 3,  
            repeat:-1,
            yoyo:true
        })

        gsap.to(greenRef.current,{
            delay:1,
            x:20,
            duration: 3,  
            repeat:-1,
            yoyo:true
        })

    },[])
    return (
        <>
            {/* Outer div with cloud background */}
            <div className="bg-cover bg-center bg-fixed bg-[url('./assets/cloud.png')]" >

                {/* Bottom part  */}
                <div className='pt-24 flex items-end relative'>

                    {/* Grass */}
                    <img className="w-screen" src={grass} alt="grass" />

                    {/* Table */}
                    <div className='absolute top-72  w-max left-1/2 transform -translate-x-1/2'>
                        <img src={table} alt="table" className="w-[800px]" />
                    </div>

                    {/* Pringles packets */}
                    <div className=''>
                        {/* Blue pringles */}
                        <div ref={blueRef} className='absolute left-[40%] transform -translate-x-1/2 bottom-20'>
                            <img src={bluePringles} alt="greenPringles" className="w-[150px] h-[450px]" />
                        </div>
                        {/* Green Pringles */}
                        <div ref={greenRef} className='absolute left-1/2 transform -translate-x-1/2 bottom-20 z-10'>
                            <img src={greenPringles} alt="greenPringles" className="w-[150px] h-[450px]" />
                        </div>
                        {/* Orange Pringles */}
                        <div ref={orangeRef} className='absolute left-[60%] transform -translate-x-1/2 bottom-20'>
                            <img src={orangePringles} alt="greenPringles" className="w-[150px] h-[450px]" />
                        </div>
                    </div>

                    {/* Onion */}
                    <div className='absolute left-[40%] bottom-1/5 transform -translate-x-1/2 z-10 top-[65%]'>
                        <img src={onion} alt="onion" className="w-[270px] h-[270px]" />
                    </div>

                    {/* Chips */}
                    <div className='absolute left-[60%] transform -translate-x-1/2 top-[65%] z-10'>
                        <img src={chips} alt="chips" className="w-[320px] h-[320px]" />
                    </div>
                </div>

            </div>
        </>
    )
}
