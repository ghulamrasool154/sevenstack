
import './Header.css'
import logo from '../../assets/images/logo--new.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Contact from '../../pages/contact/Contact'
const Header = () => {
    const [contactPopup, setContactPopUP] = useState(false)
    return (
        <>
            <header>
                <div className="container-xxl">
                    <div className="row align-items-center responsive">
                        <div className="col-lg-6 col-sm-4 col-4">
                            <div className='serven--logo'>
                                <img src={logo} alt='serven stacks' />

                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-8 col-8">
                            <ul className='header--menu'>
                                <li>
                                    <NavLink className={'nav--link'} to='/'> about us</NavLink>
                                </li>
                                <li>
                                    <NavLink className={'nav--link'} to='/service'> service</NavLink>
                                </li>
                                <li>
                                    <Link className={'nav--link'} to='/contact' > Contact</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header >



        </>
    )
}

export default Header