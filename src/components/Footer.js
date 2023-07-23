import "./FooterStyles.css";

const Footer = () => {
    return(
        <div className="footer">
           <div className="top">
              <div>
                <h1>Datasus.Tech</h1>
                <p>Closer Than You Think</p>
              </div>
              <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-linkedin-square"></i>
                </a>
              </div>
           </div>
         <div className="bottom">
            <div>
                <h4>Projects</h4>
                <a href="/">Medbox</a>
                <a href="/">Medcord</a>
                <a href="/">Remotecare</a>
                <a href="/">All Versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">SDG's</a>
                <a href="/">Healthcare</a>
                <a href="/">Mobile App</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">ChangeLog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Pharmacies</a>
                <a href="/">Medication API's</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
           </div>
        </div>
    )
}
export default Footer;