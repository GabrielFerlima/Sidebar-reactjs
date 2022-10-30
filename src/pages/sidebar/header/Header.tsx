import './styles.css'
import logo from '../../../assets/logo.png'
import { CaretRight } from 'phosphor-react'
export function Header() {
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
            <CaretRight className='toggle' size={22} />
        </header>
       </nav>
    )
}