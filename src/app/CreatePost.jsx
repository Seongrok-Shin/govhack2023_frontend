"use client";
import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import "./CreatePost.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CreatePost() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleSubmit = () => {
    console.log("Submitting Post: ", postContent);
    // Logic to submit the post, e.g., API calls

    // Close the modal and clear the input after submitting
    setModalOpen(false);
    setPostContent("");
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

      <Modal show={isModalOpen}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Nav/>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
