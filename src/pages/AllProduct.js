import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/ProductCard'
const AllProduct = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"All Product"} />

      <BreadCrumb title="All Product" />
      <div className='all-product-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop by categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Make-up</li>
                    <li>Perfume</li>
                    <li>Body Care</li>
                    <li>Skin Care</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor=''>
                        In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor=''>
                        Out Of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                </div>
                <h5 className='sub-title'>Size</h5>
                <div className='form-check'>
                  <input className='form-check-input' type='checkbox' value='' id='' />
                  <label className='form-check-label' htmlFor=''>
                    S (2)
                  </label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='checkbox' value='' id='' />
                  <label className='form-check-label' htmlFor=''>
                    M (2)
                  </label>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tag</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-secondary rounded-3 py-2 px-3'>
                      Mask
                    </span>
                    <span className='badge bg-secondary rounded-3 py-2 px-3'>
                      Lotion
                    </span>
                    <span className='badge bg-secondary rounded-3 py-2 px-3'>
                      Cleanser
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="image/skincare.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                      Micellar Water 3-in-1 Refreshing Even For Sensitive Skin
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>300.000VND</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="image/skincare.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                      Micellar Water 3-in-1 Refreshing Even For Sensitive Skin
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>300.000VND</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                  </div>
                  </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AllProduct;
