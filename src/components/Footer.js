import React from 'react';
import replayLogo from '../media/img/transparent_icon.png';

const Footer = () => {
  return (
    <div className='footer-parent'>
      <div className='footer-grid'>
        <div className='footer-img-links'>
          <img src={replayLogo} alt='' />
          <div className='footer-links'>
            <p>Follow us on:</p>
            <div>
              <a
                href='https://facebook.com/ReplayBristol'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-facebook-f'></i> Facebook
              </a>
              <a
                href='https://twitter.com/Replay_Bristol'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i> Twitter
              </a>
              <a
                href='https://instagram.com/replaybristol'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'></i> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className='footer-cr'>
          <p>Copyright &copy; 2020</p>
        </div>
        <div className='footer-pp'>
          <a href='#' target='_blank'>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
