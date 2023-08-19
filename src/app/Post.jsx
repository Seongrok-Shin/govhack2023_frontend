'use client';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Post.scss';
import Image from 'next/image';

function Post({post}) {
  return (
    <Card className="post">
      <div className="profile">
        <div className="profile__container">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            className="profile__picture"
          ></img>
          <p className="profile__name">{post.content}</p>
        </div>
        <div className="profile__buttons">
          <button className="profile__button">
            <i className="bi bi-pencil profile__icon"></i>
          </button>
          <button className="profile__button">
            <i className="bi bi-trash3 profile__icon"></i>
          </button>
        </div>
      </div>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img
          className="profile__image"
          variant="top"
          src="https://randomuser.me/api/portraits/men/1.jpg"
        />
        <div className="profile__buttons profile__buttons--like">
          <div className="likes__container">
            <i class="bi bi-hearts profile__icon profile__icon--heart"></i>
            <button className="likes">50</button>
          </div>

          <div className="likes__container">
            <i className="bi bi-suit-heart-fill profile__icon profile__icon--heart"></i>
            <button className="likes">Like</button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;
