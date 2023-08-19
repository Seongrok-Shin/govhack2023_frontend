import axios from "axios";
import { auth } from "../../../firebaseConfig";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT;
const GET_ALL_POSTS = "post/all";
const POST_RESOURCE = "post";

export async function getAllPosts() {
    console.info("Getting all posts...");

    try {
      const res = await axios.get(GET_ALL_POSTS, getConfig());
      console.info("Got posts!", res.data);


      const post = {
        content: "created"
      }

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

  console.info("Creating post...", post);
  try {
    await axios.post(POST_RESOURCE, getConfig());
  } catch (err) {
    console.error(err);
  }
}

export async function updatePostForId(id, post) {

  console.info("Updating post...", id, post);
  try {
    await axios.put(`${POST_RESOURCE}/${id}`, getConfig());
  } catch (err) {
    console.error(err);
  }
}

export async function deletePostForId(id) {

  console.info("Deleting post...", id);
  try {
    await axios.delete(`${POST_RESOURCE}/${id}`, getConfig());
  } catch (err) {
    console.error(err);
  }
}

const getConfig = async() => {
    const token = await auth.currentUser.getIdToken();
    return {
        baseURL: BASE_URL,
        headers: {"authorization": token}
    }
}
