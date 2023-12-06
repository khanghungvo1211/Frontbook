import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        
            <div className='blog-card'>
            <div className='card-image'>
                <img src='image/blog.jpg' className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>
                    <p className='date'>10 th6, 2023</p>
                    <h5 className='title'>
                        <h2>  Tell you the 8 most popular Korean whitening shower gels today

                        </h2>
                    </h5>
                    <p className='desc'>Check Check</p>
                    <Link to='/blog/:id' className='button'>Read More</Link>
                </p>
            </div>
            </div>
    )
}

export default BlogCard
