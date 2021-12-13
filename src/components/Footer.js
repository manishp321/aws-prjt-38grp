import React from 'react';
import './Footer.css';

function Footer()
{
    return(
        <>
        <div className='footer'>
            <div className='footer-content'>
                <div>
                <h3>contact us</h3>
                <ul>
                    <li> address :</li>
                    <li> email   :</li>
                    <li> phone   :</li>
                </ul>
                </div>
            

                <div>
                    <h3>about us</h3>
                    <ul>
                        <li> Oulu, Finland</li>
                        <li> projectpossible@gmail.com</li>
                        <li> +358 12345678</li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;