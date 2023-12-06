import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                FREEESHIP WITH INVOICES FROM 499K
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className='text-white mb-0' href="tel: +84 123454678">+84 12345678</a> (Free)

              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">CrystalBloom</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Here..."
                  aria-label="Search Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch></BsSearch>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/all-store"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="image/store_2.svg" alt="store" />
                    <p className="mb-0">
                      All <br /> Store
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="image/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="image/user.svg" alt="user" />
                    <p className="mb-0">
                      Log in/Register <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="image/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">500.000VND</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <image src="public/image/wishlist.svg"alt="menu"/> 
                      <span className='me-5 d-inline-block'>Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="" style={{color:'#080808'}}>Action</Link></li>
                      <li><Link className="dropdown-item" to="" style={{color:'#080808'}}>Another action</Link></li>
                      <li><Link className="dropdown-item" to="" style={{color:'#080808'}}>Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/" style={{ color: '#326e51' }}>Home</NavLink>
                    <NavLink to="/allproduct" style={{ color: '#326e51' }}>All Product</NavLink>
                    <NavLink to="/beautyblog" style={{ color: '#326e51' }}>Beauty Blog</NavLink>
                    <NavLink to="/contact" style={{ color: '#326e51' }}>Contact Us</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
