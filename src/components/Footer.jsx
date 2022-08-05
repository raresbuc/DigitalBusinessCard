import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social-list">
                <li className="social-list_link">
                    <a className="social-list_link" href="https://github.com/raresbuc/RaresPortfolio">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>

                <li className="social-list_link">
                    <a className="social-list_link" href="https://www.instagram.com/raressbucur/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>

                <li className="social-list_link">
                    <a className="social-list_link" href="https://www.facebook.com/rares.bucur99/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}