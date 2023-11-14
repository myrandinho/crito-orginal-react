import React from 'react'
import './CategoryPosts'

const CategoryPosts = ({category, post}) => {
  return (
    <div className="category-flex">
        <h4>{category}</h4>
        <h4 className="grey-h4">{post}</h4>
    </div>
  )
}

export default CategoryPosts