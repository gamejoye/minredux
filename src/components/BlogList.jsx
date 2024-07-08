import { useState } from "react";
//import { connect } from "react-redux";
import connect from "../react-redux/components/connect";
import { addBlogCreator, removeBlogCreator } from "../redux-api/creators/BlogCreator";

function BlogList({ blogs, addBlog, removeBlog }) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleInputOnChange = (e) => {
    setTitle(e.currentTarget.value);
  }

  const handleContentInputOnChange = (e) => {
    setContent(e.currentTarget.value);
  }

  const handleAddOnClick = () => {
    if (title === '' || content === '') return;
    addBlog({
      title,
      content
    })
  }

  const handleRemoveOnClick = (blog) => {
    removeBlog(blog)
  }

  const blogItem = blogs.map(
    blog => (<div key={blog.title}>
      <h1>
        {blog.title}
      </h1>
      <p>
        {blog.content}
      </p>
      <button onClick={() => handleRemoveOnClick(blog)}>
        删除
      </button>
    </div>)
  )
  return (
    <div className="container">
      <input placeholder="博客标题" onChange={handleTitleInputOnChange} /> <br />
      <input placeholder="博客内容" onChange={handleContentInputOnChange} /><br />
      <button onClick={handleAddOnClick}>
        添加博客
      </button>
      {blogItem}
    </div>
  )
}

export default connect(state => {
  return {
    blogs: state.blog
  }
}, {
  addBlog: addBlogCreator,
  removeBlog: removeBlogCreator
}
)(BlogList);