import React, { useState } from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from 'react-rating-stars-component';
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const props = { img: "https://media.hcdn.vn/catalog/product/c/a/ca-phe-dak-lak-tay-da-chet-toan-than-cocoon-200ml-2-1696313586_img_358x358_843626_fit_center.jpg" };
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className="main-product-image">
                <div>
                  <img src={props.img} className="img-fluid w-100 my-4" alt="product" />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                <div><img src='https://media.hcdn.vn/catalog/product/c/a/ca-phe-dak-lak-tay-da-chet-toan-than-cocoon-200ml-2-1696313586_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
                <div><img src='https://media.hcdn.vn/catalog/product/c/a/ca-phe-dak-lak-tay-da-chet-toan-than-cocoon-200ml-3-1696313587_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
                <div><img src='https://media.hcdn.vn/catalog/product/c/a/ca-phe-dak-lak-tay-da-chet-toan-than-cocoon-200ml-3-1696313587_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
                <div><img src='https://media.hcdn.vn/catalog/product/c/a/ca-phe-dak-lak-tay-da-chet-toan-than-cocoon-200ml-3-1696313587_img_358x358_843626_fit_center.jpg' className='img-fluid' alt='' />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3>
                  Dak Lak Coffee Body Polish
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>200.000 đ</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ff6600"
                    />
                    <p className="mb-0 t-review">| Based on 2 Reviews</p>
                  </div>
                  <a className='review-btn' href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom'>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type: </h3> <p className='product-data'>Skin Care</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand: </h3> <p className='product-data'>ON</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category: </h3> <p className='product-data'>Body Care</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags: </h3> <p className='product-data'>Skin Care</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Smell: </h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                      <span className='badge border-1 bg-white text-dark border-secondary'>Pearl</span>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity </h3>
                    <div className=''>
                      <input type='number' name='' min={1} max={10}
                        className='form-control'
                        style={{ width: "70px" }} id='' />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button
                        className="button border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        type="button"
                      >
                        Add to Cart
                      </button>
                      <button className="button signup">Buy It Now</button>
                    </div>
                    <div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a href=''>
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>

                <p className='bg-white p-3'>Tẩy Da Chết Toàn Thân Cocoon Cà Phê Đắk Lắk là dòng tẩy tế bào chết toàn thân từ thương hiệu mỹ phẩm Cocoon của Việt Nam là một trong những sản phẩm với thành phần tự nhiên có nguồn gốc trong nước như hạt cà phê Đắk Lắk nguyên chất xay nhuyễn, hòa quyện cùng bơ cacao Tiền Giang giúp loại bỏ tế bào chết hiệu quả, làm đều màu da, mang lại năng lượng, giúp da trở nên mềm mại và rạng rỡ giúp mang đến cho bạn sản phẩm thuần chay tốt nhất với niềm tự hào từ nguyên liệu thuần Việt.</p>
              </div>
            </div>
          </div>
        </div>
        <section id='review' className='reviews-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className="col-12">
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="/">
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                  <div className='review-form py-4'>
                    <h4>Write a review</h4>
                    <form action="" className="d-flex flex-column gap-15">

                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div>
                        <button className="button border-0">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className='reviews mt-4 '>
                    <div className='review'>
                      <div className='d-flex gap-10 align-items-center'>
                        <h6 className='mb-0'>Khang</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />

                      </div>
                      <p className='mt-3'>
                        Hàng dỏm quá
                      </p>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='best-product-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h3 className='section-heading'>Best Product</h3>
              </div>
            </div>
            <div className='row'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div >

    </>
  )
}

export default SingleProduct
