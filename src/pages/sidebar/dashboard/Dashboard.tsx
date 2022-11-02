import './styles.css'
import logo from '../../../assets/logo.png'
import { Bell, CaretRight, ChartBar, ChartPie, Heart, HouseLine, MagnifyingGlass, Moon, SignOut, Sun, Wallet } from 'phosphor-react'
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
                        <span className='search'> <MagnifyingGlass size={20} /> </span>
                        <input type="search" placeholder='Search...' />
                    </li>

                    <ul className='menuLink'>
                        <li className='navLink'>
                            <a href="#">
                                <HouseLine size={20} className='icon' />
                                <span className='navText'>Dashboard</span>
                            </a>
                        </li>

                        <li className='navLink'>
                            <a href="#">
                                <ChartBar size={20} className='icon'/>
                                <span className='navText'>Revenue</span>
                            </a>
                        </li>

                        <li className='navLink'>
                            <a href="#">
                                <Bell size={20} className='icon'/>
                                <span className='navText'>Notifications</span>
                            </a>
                        </li>

                        <li className='navLink'>
                            <a href="#">
                                <ChartPie size={20} className='icon'/>
                                <span className='navText'>Analytics</span>
                            </a>
                        </li>

                        <li className='navLink'>
                            <a href="#">
                                <Heart size={20} className='icon'/>
                                <span className='navText'>Likes</span>
                            </a>
                        </li>

                        <li className='navLink'>
                            <a href="#">
                                <Wallet size={20} className='icon'/>
                                <span className='navText'>Wallets</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='bottomContent'>
                    <li>
                        <a href="#">
                            <span className='icon'><SignOut size={20} /></span>
                            <span className='navText'>Logout</span>
                        </a>
                    </li>

                    <li className='mode'>
                        <div className='moonSun'>
                            <Moon size={20}  className="iconMoon"/>
                            <Sun size={20}  className="iconSun"/>
                        </div>
                        <span className='modeText'>Dark Mode</span>

                        <div className='toggleSwitch'>
                            <span className='switch'></span>
                        </div>
                    </li>
                </div>

            </div>
        </nav>
    )
}
