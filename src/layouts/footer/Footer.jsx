import './Footer.css'
import insta from '../../assets/images/linked.png'
import linked from "../../assets/images/link.png"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="container-xxl">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-5 col-6">
                        <div className="footer--careers">
                            <h5>careers</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-6">
                        <div className='footer--links text-end'>

                            <Link to="https://www.facebook.com/">
                                <span className='icon'>
                                    <i class="fa-brands fa-facebook"></i>
                                </span>
                            </Link>

                            <Link to="https://www.instagram.com/">
                                <span className='icon'> <i class="fa-brands fa-instagram"></i>  </span>
                            </Link>
                            <Link to="https://www.linkedin.com/">
                                <span className='icon'> <i class="fa-brands fa-linkedin-in"></i>  </span>
                            </Link>
                            {/* <Link to='https://www.instagram.com/' target="_blank"  ><img src={insta} alt="instagram linkied" /></Link>

                            <Link to='https://www.instagram.com/' target="_blank"  ><img src={linked} alt="instagram linkied" /></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer