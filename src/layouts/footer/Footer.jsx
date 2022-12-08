import './Footer.css'
import instgramlinkied from '../../assets/images/footerlink.png'
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
                            <img src={instgramlinkied} alt="instagram linkied" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer