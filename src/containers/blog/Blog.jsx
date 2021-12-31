import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Here are, <br /> our challenges.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
      <Article imgUrl={blog01} date="Jan 7, 2022" text="Diamond Challenge" />
      </div>
      <div className="gpt3__blog-container_groupB">
      <Article imgUrl={blog02} date="Nov 5, 2022" text="Conrad Challenge" />
        <Article imgUrl={blog03} date="Feb 8, 2022" text="Blue Ocean" />
        <Article imgUrl={blog04} date="Dec 15, 2022" text="NFTE World Series of Innovation" />
        <Article imgUrl={blog05} date="May 1, 2022" text="Paradigm Challenge (age restriction)" />
        <Article imgUrl={blog05} date="Mar 25, 2022" text="Technovation Challange (Girls Only)" />
        <Article imgUrl={blog05} date="Feb 22, 2022" text="Cooper Hewitt" />
      </div>
    </div>
  </div>
);

export default Blog;
