import React from 'react'

import PostHeader from './PostHeader'
import PostComments from './PostComments'

const PostItem = ({ author, date, content, comments }) => (
  <div className="post">
    <PostHeader author={author} date={date} />
    <p className="post-content">{content}</p>
    <PostComments comments={comments} />
  </div>
)

export default PostItem
