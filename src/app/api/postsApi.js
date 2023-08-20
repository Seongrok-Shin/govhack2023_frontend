import axios from 'axios';
import { auth } from '../../../firebaseConfig';

const GET_ALL_POSTS = 'post/all';
const POST_RESOURCE = 'post';

export async function getAllPosts() {
  console.info('Getting all posts...');

  try {
    const config = await getConfig();
    const res = await axios.get(GET_ALL_POSTS, config);
    console.info('Got posts!', res.data);

    const post = {
      content: 'created',
    };

    // await createPost(post);

    // post.content = "updated";
    // await updatePostForId(post);

    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function createPost(post) {
  console.info('Creating post...', post);
  try {
    const config = await getConfig();
    await axios.post(POST_RESOURCE, config);
  } catch (err) {
    console.error(err);
  }
}

export async function updatePostForId(id, post) {
  console.info('Updating post...', id, post);
  try {
    const config = await getConfig();
    await axios.put(`${POST_RESOURCE}/${id}`, config);
  } catch (err) {
    console.error(err);
  }
}

export async function deletePostForId(id) {
  console.info('Deleting post...', id);
  try {
    const config = await getConfig();
    await axios.delete(`${POST_RESOURCE}/${id}`, config);
  } catch (err) {
    console.error(err);
  }
}

const getConfig = async () => {
  const token = await auth.currentUser.getIdToken();
  return {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT,
    headers: { authorization: token },
  };
};
