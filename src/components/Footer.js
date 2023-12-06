import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="image/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>UPDATE PROMOTION INFORMATION</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email..."
                  aria-label="Your email..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 text-white" id="basic-addon2" style={{ backgroundColor: '#ff6600' }}>
                  Subscribe
                </span>


              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Customer Support</h4>
              <div>
                <address className='text-white fs-6'>Shop: 81 Ho Tung Mau,
                  Ben Nghe Ward, <br />District 1, Ho Chi Minh City <br />
                </address>
                <a href="tel:+84 12345678" className='mt-3 d-block mb-2 text-white'>Hotline: +84 12345678 (Free)</a>
                <a href="mailto:bellabloom@gmail.com" className='mt-2 d-block mb-2 text-white'>Gmail: bellabloom@gmail.com</a>
                <div className='social_icons'>
                  <a href='#'>
                    <img src='image/fb.svg' alt='facebook_icon d-flex align-items-center gap-15' />
                  </a>
                  <a href='#'>
                    <img src='image/icon_tiktok.svg' alt='tiktok_icon d-flex align-items-center gap-15' />
                  </a>
                  <a href='#'>
                    <img src='image/instagram.svg' alt='instagram_icon d-flex align-items-center gap-15' />
                  </a>
                </div>
                <div className='payment_icon'>
                  <a href='#'>
                    <img src='image/visa.svg' alt='visa_icon d-flex align-items-center gap-15' />
                  </a>
                  <a href='#'>
                    <img src='image/mastercard.svg' alt='mastercard_icon d-flex align-items-center gap-15' />
                  </a>

                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>About BellaBloom</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Introduction BellaBloom</Link>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms Of Use</Link>
                <Link className='text-white py-2 mb-1'>Contact Us</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>High-end Cosmetics</Link>
                <Link className='text-white py-2 mb-1'>Facial Care</Link>
                <Link className='text-white py-2 mb-1'>Make-Up</Link>
                <Link className='text-white py-2 mb-1'>Body Care</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Categories</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>High-end cosmetics</Link>
                <Link className='text-white py-2 mb-1'>Facial Care</Link>
                <Link className='text-white py-2 mb-1'>Make-Up</Link>
                <Link className='text-white py-2 mb-1'>Body Care</Link>
              </div>
            </div>


          </div>


        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by KhangVo
              </p>
            </div>
          </div>
        </div>


      </footer>
    </>
  );
};
export default Footer;
