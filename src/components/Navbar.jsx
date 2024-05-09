import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className= "header">
        <NavLink to="/" className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00c6ff] to-[#0072ff] items-center justify-center flex font-bold shadow-md">
        <p className= "text-white">
            SYT
        </p>
        </NavLink>
        <nav className="flex text-lg gap-6 font-medium">
            <NavLink to= "/projects" className={({isActive}) => isActive ? 
            'text-blue-500' : "text-black"}>
                Projects
            </NavLink>
            <NavLink to= "/interests" className={({isActive}) => isActive ? 
            'text-blue-500' : "text-black"}>
                Interests
            </NavLink>
            <NavLink to= "/contact" className={({isActive}) => isActive ? 
            'text-blue-500' : "text-black"}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar