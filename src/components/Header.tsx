
// HEADER COMPONENT
import React from 'react'
import './Header.css'
import heroImage from '../assets/tv-apps.jpg' // Import image for banner


// Get site-title from props and use it in h1
const Header = (props: {siteTitle: string}) => {

    return (
        <header>
            <h1>{props.siteTitle}</h1>
            /* Hero-image, using imported image */
            <div id='hero-image' style={{backgroundImage: `url(${heroImage})`}}></div>
        </header>
    )
}

export default Header