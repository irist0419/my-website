import React from 'react'
import { Link } from 'react-router-dom'

const CTA2 = () => {
  return (
    <section className="cta">
        <p className="cta-text">What do you think?<br className="sm:block hidden"/>
        Shoot me a message!</p>
        <Link to ="/contact" className="btn">Contact</Link>
    </section>
  )
}

export default CTA2