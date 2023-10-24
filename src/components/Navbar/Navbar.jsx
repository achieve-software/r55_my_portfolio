import {Link, NavLink} from 'react-router-dom';
  

const Navbar = () => {
    return (
      <header>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
  
            <div className='logo'>
              <Link to='/' className='brand'>CV</Link>
            </div>
            <nav className='nav nav-pills'>
              <NavLink to='/' 
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Home</NavLink>
              <NavLink to='about'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >About</NavLink>
              <NavLink to='projects'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Projects</NavLink>
               <NavLink to='contact'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Contact</NavLink>
            </nav>
  
          </div>
        </div>
      </header>
    )}

    export default Navbar
