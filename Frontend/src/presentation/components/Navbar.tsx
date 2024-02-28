
interface Props {
    isOpen:() => void
}
const Navbar = ({isOpen}:Props) => {
    return (
        <nav className="navbarColor border-4 border-white p-4 flex items-center px-2 py-2 justify-between mb-4 w-90% rounded-lg">
            <div>Logo</div>
            <button onClick={isOpen} className='bg-white text-black p-2 rounded-lg font-bold cursor-pointer navbarBoxColor hover:text-white transition-all duration-700 ease-in-out'>Add Device</button>
        </nav>
    )
}

export default Navbar
