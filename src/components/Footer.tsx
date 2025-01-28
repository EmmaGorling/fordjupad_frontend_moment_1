import React from 'react'
import './Footer.css'

const Footer = (props: {siteTitle: string}) => {
    return (
        <footer>
            <p>{props.siteTitle} | Utvecklad av <a href="mailto:emad2301@student.miun.se">Emma Ådahl Görling</a></p>
        </footer>
    )
}

export default Footer
