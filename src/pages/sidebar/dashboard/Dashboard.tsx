import './styles.css'
import logo from '../../../assets/logo.png'
import { CaretRight, HouseLine, MagnifyingGlass } from 'phosphor-react'
export function Dashboard() {
    return (
        <nav className='sidebar'>
            <header>
                <div className='imageText'>
                    <span className='image'>
                        <img src={logo} alt="logo" />
                    </span>

                    <div className='headerText'>
                        <span className='name'>Codinglab</span>
                        <span className='profession'>Web developer</span>
                    </div>
                </div>
                <CaretRight className='toggle' size={20} />
            </header>


            <div className='menubar'>
                <div className='menu'>
                    <li className='searchLink'>
                        <span className='search'> <MagnifyingGlass size={20} color="#707070" /> </span>
                        <input type="search" placeholder='Search...' />
                    </li>

                    <ul className='menuLink'>
                        <li className='navLink'>
                            <a href="#">
                                <span className='icon'><HouseLine size={20} color="#707070" /></span>
                                <span className='navText'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}
