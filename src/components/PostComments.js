import React from 'react'

const PostComments = ({ comments }) => (
  <div className="post-comments">
    <div className="divider" />
    {comments.map(comment => (
      <div key={comment.id} className="comment">
        <img className="avatar" src={comment.author.avatar} />
        <p>
          <span>{comment.author.name}</span>
          {comment.content}
        </p>
      </div>
    ))}
  </div>
)

export default PostComments
