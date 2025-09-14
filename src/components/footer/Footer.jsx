import React from "react";
import "./Footer.css"

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Pranav Shukla &hearts;</h1>
                <ul className="footer__list">
                    
                    
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/" className="footer__social-link"
                    target="blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/sprnv007/" className="footer__social-link"
                    target="blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://x.com/" className="footer__social-link"
                    target="blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">All Copyrights Reserved @ sprnv007</span>
            </div>
        </footer>
    )
}

export default Footer