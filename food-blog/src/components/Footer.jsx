import '../styles/Footer.css'

export default function Footer(){
    return(
        <footer>
            <img src="/icon.png" alt="" className="footer-image"/>
            <div className="contact-us">
                <h3 className="contact-title blue">Contact Us</h3>
                <p className="contact-address grey">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p className="contact-mail grey">example2020@gmail.com</p>
                <p className="contact-phone grey">(904) 443-0343</p>
            </div>
            <div className="more">
                <h3 className="more-title blue">More</h3>
                <span className="more-body grey">About</span>
                <span className="more-body grey">Products</span>
                <span className="more-body grey">Careers</span>
                <span className="more-body grey">Contact Us</span>
            </div>
            <div className="social-links">
                <h3 className="social-links-title blue">Social Links</h3>
                <section className="social-links-list">
                    <img src="/insta-logo.png" alt="" className="links-img"/>
                    <img src="/twitter-logo.png" alt="" className="links-img"/>
                    <img src="/facebook-logo.png" alt="" className="links-img"/>
                </section>
                <p className="social-text grey">© 2022 Food Truck Example</p>
            </div>
        </footer>
    )
}