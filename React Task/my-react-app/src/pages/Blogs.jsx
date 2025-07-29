import React from 'react';
import './Blogs.css';
import BlogsBox from '../components/BlogsBox';
import img1 from '../assets/BlogsIcon/Thumbnail1.png';
import img2 from '../assets/BlogsIcon/Thumbnail2.png';
import img3 from '../assets/BlogsIcon/Thumbnail3.png';
import img4 from '../assets/BlogsIcon/Thumbnail4.png';

const Blogs = () => {
    const Blog = [
        {
            Img: img1,
            Title: "Report",
            Description: "The Rise of AI in Business Analytics: What You Need to Know"
        },
        {
            Img: img2,
            Title: "News",
            Description: "Customizing Your DataWise Dashboard: A Step-by-Step Guide"
        },
        {
            Img: img3,
            Title: "News",
            Description: "Customizing Your DataWise Dashboard: A Step-by-Step Guide"
        },
        {
            Img: img4,
            Title: "Report",
            Description: "Customizing Your DataWise Dashboard: A Step-by-Step Guide"
        }
    ];
    
    return (
        <section className="blogs-section">
            <div className="blogs-header">
                <p className="blogs-subtitle">BLOGS</p>
                <h2 className="blogs-title">In the spotlight</h2>
                <p className="blogs-description">
                    Stay updated with the latest trends, tips, and insights in business analytics. 
                    Explore our curated articles designed to empower your data-driven journey.
                </p>
            </div>
            
            <div className="blogs-grid">
                {Blog.map((box, index) => (
                    <BlogsBox
                        key={index}
                        Img={box.Img}
                        Title={box.Title}
                        Description={box.Description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Blogs;