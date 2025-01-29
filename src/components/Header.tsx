
// HEADER COMPONENT

import './Header.css'
import heroImage from '../assets/tv-apps.jpg' // Import image for banner


// Get site-title from props and use it in h1, use imported image for bg in hero-image
const Header = (props: {siteTitle: string}) => {

    return (
        <header>
            <h1>{props.siteTitle}</h1>
            <div id='hero-image' style={{backgroundImage: `url(${heroImage})`}}></div>
        </header>
    )
}

export default Header