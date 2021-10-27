import React from 'react';

function Footer(props) {
    return (

            <footer className="page-footer " >
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()}
                        <a className="grey-text text-lighten-4 right" href="#">More Links</a>
                    </div>
                </div>
            </footer>


    );
}

export default Footer;