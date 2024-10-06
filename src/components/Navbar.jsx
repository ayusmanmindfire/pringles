import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'

export const Navbar=()=>{
    return (
        <>
        <div className='flex px-20 py-10 fixed w-full justify-between z-10 '>
            {/* logo */}
            <img className="h-24 w-20" src={logo} alt="logo" />
            {/* menu button */}
            <button className='py-5'><img className="pb-5 h-20" src={menu} alt="logo" /></button>
        </div>
        </>
    )
}