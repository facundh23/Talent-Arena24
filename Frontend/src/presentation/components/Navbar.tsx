import React from 'react'


interface Props {
    isOpen:() => void
}
const Navbar = ({isOpen}:Props) => {
    return (
        <nav className="bg-indigo-600 flex items-center px-2 py-2 justify-between mb-4 w-90% rounded-lg">
            <div>Logo</div>
            <button onClick={isOpen} className='bg-black p-2 rounded-lg font-bold cursor-pointer hover:bg-gray-700 transition-all duration-200 ease-in-out'>Add Device</button>
            
        </nav>
    )
}

export default Navbar
