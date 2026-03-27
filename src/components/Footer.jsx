import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white p-4 mt-10">
    
           
              <div className="flex justify-center gap-6">
                  <a href="mailto:h.sev@tiscali.co.uk" className='block'>zasa-living@gmail.com </a>
                  <a href="/my-facebook-link"><FontAwesomeIcon icon={faFacebook} size="2x"className="text-blue-500"/> </a>
                  <a href="/my-twitter-link"><FontAwesomeIcon icon={faTwitter} size="2x" className="text-sky-400" /></a>
                  <a href="/my-youtube-link"><FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500"  /></a>
                  <a href="/my-youtube-link"><FontAwesomeIcon icon={faLinkedin} size="2x" className="text-[#0A66C2]" /></a>
              </div>    
    
    </footer>
  );
};

export default Footer;