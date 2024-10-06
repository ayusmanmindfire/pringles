import flyingChips from '../assets/flyingChips.png'

export const PringleDesign = ({ textColor, text, imageString, bgColor }) => {
    // const outerDiv=`h-max bg-[${bgColor}] relative`
    // const textDiv=`absolute left-1/2 top-1/2 w-full transform -translate-x-1/2  text-8xl font-Rubik text-["${textColor}"]`
    return (
        <>
            {/* <div className='sticky top-0'> */}
            <div className="h-screen sticky top-0"
                style={{ backgroundColor: bgColor }}
            >

                {/* chips flying */}
                <div className='flex justify-center items-center'>
                    <img src={flyingChips} alt="flying-chips" className='h-screen' />
                </div>

                {/* text */}
                <div className="absolute left-1/2 top-1/2 w-full transform -translate-x-1/2  text-7xl font-bold font-Rubik"
                    style={{ color: textColor }}
                >
                    {text}
                </div>

                {/* chips packet */}
                <div className='absolute left-1/2 bottom-20 transform -translate-x-1/2'>
                    <img src={imageString} alt="pringles" className='w-[150px] h-[450px]' />
                </div>
            </div>
            {/* </div> */}
        </>
    )
}