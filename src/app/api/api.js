import axios from "axios";
import { auth } from "../../../firebaseConfig";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT;
const GET_ALL_POSTS = "post/all";

const token = await auth.currentUser.getIdToken();

export const api = {
  getAllPosts: async () => {
    console.debug("Getting all posts...");
    const res = await axios.get(GET_ALL_POSTS, {
        baseURL: BASE_URL,
        headers: {"Authorization": token}
    });
    try {
      const data = await res.data();
      console.debug("Got posts!", data);

      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
};