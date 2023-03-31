import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Blogs = ({blog, addReadingTime}) => {
  
    // const {id, author_image , author_name, blog_title , cover_image, publish_date , read_time} = blog;
    return (
        <div className='card py-5 m-5'>
            <div>
                <img className='w-75' src={blog.cover_image} alt="" />
            </div>
            <div>
            <div className='d-flex justify-content-between align-items-center px-5 '>
                    <div className='d-flex'>
                        <img style={{width: '50px', height:'50px'}} src={blog.author_image} alt="" />
                    
                        <div>
                            <h2>{blog.author_name}</h2>
                            <p>Published On : {blog.publish_date}</p>
                        </div>

                    </div>
                    
                        <div>
                            <h5>{blog.read_time} read <button onClick={()=>addBookMark()} style={{color:'rebeccapurple', border:'none'}}><FontAwesomeIcon icon={faBookmark} /></button></h5>
                        </div>

                </div>
                
            </div>
           <div className=''>
                <h1>{blog.blog_title}</h1>
                <p>#beginners #programming</p>
                <button style={{color:'rebeccapurple', border:'none'}} onClick={()=>addReadingTime(blog.read_time)}>Mark as read</button>
            </div>
        </div>
    );
};

export default Blogs;