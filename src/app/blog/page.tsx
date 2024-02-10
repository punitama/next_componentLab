'use client';
import { useState } from 'react';
import blogData from '../../json/blogDate.json';

export default function about() {
  const [filter, setFilter] = useState('');

  const filteredBlogs = blogData.filter((blog) => {
    if (filter === '') {
      return true;
    }
    return blog.tags.includes(filter) || blog.author === filter;
  });
  return (
    <div>
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="タグまたは著者でフィルタリング"
        />
      </div>
      <h1>ブログ一覧</h1>
      <ul>
        {filteredBlogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
            <p>{blog.author}</p>
            <p>{blog.content}</p>
            <p>{blog.tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
