
import React from 'react'
import Switch from './Switch';


const Navbar = async () => {
    return (
        <header className='text-xl px-5 py-3  ml-auto '>
            <nav className='flex justify-end items-center z-10'>
                <div className='flex items-center gap-5 text-black'>
                    <Switch />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
