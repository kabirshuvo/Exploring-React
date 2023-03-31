import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const HeroSection = ({addReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch('/public/blog.json').then(resp => resp.json()).then(blogs => setBlogs(blogs))
    console.log(blogs);

  },[])

    return (
        <div className='main row'>
           
      <h1 style={{color: 'rebeccapurple', padding: '3rem'}}>Exploring React</h1>
      
           {
            blogs.map(blog => <Blogs blog={blog} key={blog.id} addReadingTime={addReadingTime}></Blogs>)
           }
          
           
        </div>
    );
};

export default HeroSection;