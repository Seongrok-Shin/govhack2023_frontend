import React from 'react'
import './CreatePost.scss'

export default function CreatePost() {
  return (
    <div className="create-post">
        <div className="post__container">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" className="profile__picture"></img>
          <p className="post__name">What's on your mind?</p>
        </div>
          <button className='post__button post__button--'>
          <i class="bi bi-plus-circle post__icon"></i>
          </button>
      </div>
  )
}
