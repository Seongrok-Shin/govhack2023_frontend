import axios from "axios";
import { auth } from "../../../firebaseConfig";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT;
const GET_ALL_POSTS = "post/all";

export async function getAllPosts() {
    const token = await auth.currentUser.getIdToken();
    console.debug("Getting all posts...");
    const res = await axios.get(GET_ALL_POSTS, {
        baseURL: BASE_URL,
        headers: {"authorization": token}
    });
    try {
      console.debug("Got posts!", res.data);
      return res.data;
  },
};
