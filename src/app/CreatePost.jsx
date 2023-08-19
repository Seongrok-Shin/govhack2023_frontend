'use client';
import React from 'react';
import Nav from './Nav';
import { useState } from 'react';
import './CreatePost.scss';
import Modal from 'react-bootstrap/Modal';

export default function CreatePost() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');

  const handleSubmit = () => {
    console.log('Submitting Post: ', postContent);
    // Logic to submit the post, e.g., API calls

    // Close the modal and clear the input after submitting
    setModalOpen(false);
    setPostContent('');
  };

  return (
    <div className="create-post">
      <div className="post__container">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          className="profile__picture"
        ></img>
        <p className="create-post__text">What's on your mind?</p>
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="post__button post__button--post"
      >
        <i class="bi bi-plus-circle post__icon"></i>
      </button>

      <Modal show={isModalOpen} isOpen={isModalOpen}>
        <Modal.Dialog>
          <div className="post-modal__top">
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn--back"
            >
              <i class="bi bi-chevron-left post-modal__icon"></i>
            </button>

            <h2 className="post-modal__heading">Create Post</h2>
            <button
              onClick={handleSubmit}
              type="button"
              class="btn btn-success"
            >
              Post
            </button>
          </div>
          <Modal.Body>
            <div className="profile">
              <div className="profile__container">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  className="profile__picture"
                ></img>
                <p className="profile__name">John Doe</p>
              </div>
            </div>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="post-modal__text"
              placeholder="What's on your mind?"
            />
          </Modal.Body>
          <Nav />
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
