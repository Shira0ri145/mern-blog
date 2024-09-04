import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { slug } = useParams(); // ดึง slug จาก URL
    const [blog, setBlog] = useState(null); // ใช้ null เป็นค่าเริ่มต้นแทนสตริงว่าง

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/blog/${slug}`)
            .then(response => {
                setBlog(response.data); // response.data คือข้อมูลที่ได้รับจาก API
            })
            .catch(err => {
                console.error(err); // แสดงข้อผิดพลาดใน console แทนการใช้ alert
            });
    }, [slug]); // รวม slug เป็น dependency ของ useEffect

    if (!blog) {
        return <div>Loading...</div>; // แสดงข้อความโหลดขณะรอข้อมูล
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
            <p>Date: {new Date(blog.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default BlogDetails;
