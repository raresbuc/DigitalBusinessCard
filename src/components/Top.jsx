import React from "react"

export default function Top() {
    return (
        <div className="top">
            <img src="\src\images\70976216_2540669339498180_3328683900183511040_n.jpg"/>
            <h1>Rares Bucur</h1>
            <h3>Frontend Developer</h3>
            <h4>website</h4>

            <div className="top--links">
                <a className="email" href="#">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/raresbucur/">
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}