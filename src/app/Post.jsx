'use client';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Post.scss';
import './globals.css';
import Image from 'next/image';
//profile _picture
function Post({ post}) {
  return (
    <Card className="post">
      <div className="profile">
        <div className="profile__container">
          <img
            src={post.user_id.post_image}
            className="profile__picture"
          ></img>
          <p className="profile__name">{post.user_id.name}</p>
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
        {post.content}
        </Card.Text>
        <Card.Img
          className="profile__image"
          variant="top"
          src={post.post_image}
        />
        <div className="profile__buttons profile__buttons--like">
          <div className="likes__container">
            <i class="bi bi-hearts profile__icon profile__icon--heart"></i>
            <button className="likes">{post.likes}</button>
          </div>

          <div className="likes__container">
            <i class="bi bi-suit-heart-fill profile__icon profile__icon--heart"></i>
            <button className="likes">{post.likes}</button>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <a className="comment__toggle" href="#">
          View All 16 comments
        </a>
        <ul className="comments">
          {
            post.comments && post.comments.map((data)=> {
              return  <li className="comment">
              <img
                src={post.post_image}
                className="comment__picture"
              ></img>
              <p className="comment__name">elvin</p>
  
              <p className="comment__text">{data.content}</p>
            </li>;
            })
          }
        </ul>
        <div className="comment__container">
          <input
            type="text"
            placeholder="Add a comment..."
            className="comment__input"
          />
          <button type="button" class="btn btn-success">
            Post
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Post;
