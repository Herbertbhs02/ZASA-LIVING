import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-4 mt-0">
    
           
              <div className="flex justify-center py-1 px-1 gap-2">
                  <p className='block text-sm'>zasaservices25@gmail.com </p>
                  <a href="https://www.facebook.com/profile.php?id=61580788449763"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x"className="text-blue-500"/> </a>
                  {/* <a href="/my-twitter-link"><FontAwesomeIcon icon={faTwitter} size="2x" className="text-sky-400" /></a>
                  <a href="/my-youtube-link"><FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500"  /></a>
                  <a href="/my-youtube-link"><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-[#0A66C2]" /></a> */}
              </div>    
    
    </footer>
  );
};

export default Footer;