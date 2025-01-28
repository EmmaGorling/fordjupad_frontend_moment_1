import React from 'react'
import './Header.css'
import heroImage from '../assets/tv-apps.jpg'

const Header = (props: {siteTitle: string}) => {

    return (
        <header>
            <h1>{props.siteTitle}</h1>
            <div id='hero-image' style={{backgroundImage: `url(${heroImage})`}}></div>
        </header>
    )
}

export default Header