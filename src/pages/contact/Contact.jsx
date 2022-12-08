import './Contact.css'
import { useLocation } from 'react-router-dom'
const Contact = () => {

    return (
        <section className='contact--pop--up'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className='contact-title'>Contact us</h2>
                        <form onSubmit={(e) => e.preventDefault()} className='form--contact'>

                            <div className='mb-3'>
                                <label className='form-label'>Name</label>
                                <input type="text" className='form-control' />
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Email</label>
                                <input type="text" className='form-control' />
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Message</label>
                                <textarea className='form-control' id="" cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact