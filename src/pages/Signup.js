import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Signup" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control" />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control" />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobilenumber"
                      placeholder="Mobile Number"
                      className="form-control" />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control" />
                  </div>
                </form>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign Up 
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Signup
