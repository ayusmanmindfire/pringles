import flyingChips from '../assets/flyingChips.png';

export const PringleDesign = ({ textColor, text, imageString, bgColor }) => {
    return (
        <>
            {/* <div className='h-screen'> */}
            
            
            <div className='h-screen sticky top-0 z-10'  >
                
            {/* Flying chips background (scrolls independently) */}
            <div className='absolute left-1/2 w-full transform -translate-x-1/2' style={{ backgroundColor: bgColor }}>
                <div className='flex justify-center items-center'>
                    <img src={flyingChips} alt="flying-chips" className='h-screen' />
                </div>
            </div>
                {/* Sticky section with text and Pringles image */}
                    <div className='relative h-screen z-20' >
                        {/* Text */}
                        <div
                            className="absolute left-1/2 top-1/2 w-full transform -translate-x-1/2 text-7xl font-bold font-Rubik"
                            style={{ color: textColor }}
                        >
                            {text}
                        </div>

                        {/* {/ Chips packet /} */}
                        <div className='absolute left-1/2 bottom-20 transform -translate-x-1/2'>
                            <img src={imageString} alt="pringles" className='w-[150px] h-[450px]' />
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
};
