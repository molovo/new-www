import { Link } from 'gatsby'
import React from 'react'
import PostSibling from '../types/post-sibling'

interface Props {
  post: PostSibling
}

const NextPost = ({ post }: Props): JSX.Element => (
  <Link to={post.fields.url} className="next-post">
    <span className="next-post__heading">Next Post</span>
    <span className="next-post__title">{post.frontmatter.title}</span>
  </Link>
)

export default NextPost
