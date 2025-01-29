// FOOTER COMPONENT

import './Footer.css'

// Get site-title and use it in the footer
const Footer = (props: {siteTitle: string}) => {
    return (
        <footer>
            <p>{props.siteTitle} | Utvecklad av <a href="mailto:emad2301@student.miun.se">Emma Ådahl Görling</a></p>
        </footer>
    )
}

export default Footer
