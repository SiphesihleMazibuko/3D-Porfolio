import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a position available for me? <br className='sm:block hidden' /> Let's work together</p>
        <Link to="/contact" className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA
