import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const FlashSale = () => {
    return <div className='col-6 mb-3'>
        <div className='flash-sale-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='image/product3.jpg' className='img-fluid' alt='watch' />
                </div>
                <div className='flash-sale-product-content'>
                    <h5 className='brand'>Anessa</h5>
                    <h6 className='title'>
                    Perfect UV Sunscreen Skincare Milk N SPF50+ PA++++
                    </h6>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value="3"
                        edit={false}
                    />
                    <p className='price'>
                        <span className='red-p'>200000</span> &nbsp; <strike>500000</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>1 </b> days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badege rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badege rounded-circle p-3 bg-danger'>1</span>:
                            <span className='badege rounded-circle p-3 bg-danger'>1</span>
                        </div>

                    </div>
                    <div className='prod-count my-3'>
                        <p>Products: 5</p>
                        <div className="progress"><div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        </div>
                    </div>
                    <Link className='button'>Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
}

export default FlashSale
