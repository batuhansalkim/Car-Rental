import React from 'react'
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";
function Blog() {
  return <>
  {blogData.map((item,index)=>(
    <BlogItem item={item} key={index}/>
  ))}
  </>
}

const BlogItem =({item})=>{
    return <Col lg="4" md="4" sm="6" className='mb-5'>
        <div className="blog__item">
            <img src={item.imgUrl} alt="" className='w-100' />
            <div className="blog__info">
                <Link to={`/blogs/${item.title}`} className="blog__title">{item.title}</Link>
                <p className='section__description'>
                    {item.description.length > 120 ? item.description.substr(0, 100) : item.description}
                </p>
                <Link to={`/blogs/${item.title}`} className='read__more'>Read More</Link>

                <div className='blog__time pt-3 mt-3 d-flex align-items-center justify-content-between'>
                    <span className="blog__author">
                        <i className='ri-user-line'></i> {item.author}
                    </span>

                    <div className='d-flex align-items-center gap-3'>

                        <span className='d-flex align-items-center gap-1 section__description'>
                            <i className='ri-calendar-line'></i> {item.date}
                        </span>
                        
                        <span className='d-flex align-items-center gap-1 section__description'>
                            <i className='ri-time-line'></i> {item.time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Col>
}

export default Blog