import axios from "axios";
import { auth } from "../../../firebaseConfig";

const GET_ALL_FREEBIE_POSTINGS = "freebie-posting/all";
const FREEBIE_POSTINGS_RESOURCE = "freebie-posting";

export async function test(){
    console.info("testing freebie postings...");
    try{
        //test cases 
        getAllFreebiePostings();
        const tempData = {
            location : "auckland",
            title : "hello gee",
            description : "babo",
            image_urls : ["fdsf","Fasfd"],
            is_listing_closed : false
        }
        createFreebiePosting(tempData);
        getFreebiePostingById(tempData);
        const updateData = {
            location : "auckland",
            title : "hello gee",
            description : "HelpmE!!!!",
            image_urls : ["fdsf","Fasfd"],
            is_listing_closed : false
        }
        updateFreebiePostingForId(updateData);
        deleteFreebiePostingForId(updateData);

    }catch(err){
        console.info(err)
    }
    
}
// @route GET api/freebie-posting/all
// @description Get all posts
// @access Public
export async function getAllFreebiePostings() {
    console.info("Getting all freebie postings...");

    try {
      const config = await getConfig()
      const res = await axios.get(GET_ALL_FREEBIE_POSTINGS, config);
      console.info("Got freebie postings!", res.data);
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
}

// @route GET api/freebie-postings/
// @description Get by id
// @access Public
export async function getFreebiePostingById(id) {

    console.info("Getting freebie posting...", id);
    try {
      const config = await getConfig()
      const res = await axios.get(`${FREEBIE_POSTINGS_RESOURCE}/${id}`, config);
      console.info("Got freebie-postings!" ,res.data);
    } catch (err) {
      console.error(err);
    }
  }

  // @route GET api/freebie-postings/
// @description Create new post
// @access Public
  export async function createFreebiePosting(freebiePosting) {

    console.info("Creating post...", freebiePosting);
    try {
      const config = await getConfig()
      await axios.post(FREEBIE_POSTINGS_RESOURCE, config);
    } catch (err) {
      console.error(err);
    }
  }

// @route GET api/freebie-posting/:id
// @description Update freebie-posting
// @access Public
export async function updateFreebiePostingForId(id, freebiePosting) {

    console.info("Updating freebie posting...", id, freebiePosting);
    try {
      const config = await getConfig();
      await axios.put(`${FREEBIE_POSTINGS_RESOURCE}/${id}`, config);
    } catch (err) {
      console.error(err);
    }
  }

// @route GET api/freebie-posting/:id
// @description Delete freebie-posting by id
// @access Public
export async function deleteFreebiePostingForId(id) {

    console.info("Deleting freebie posting...", id);
    try {
      const config = await getConfig();
      await axios.delete(`${FREEBIE_POSTINGS_RESOURCE}/${id}`, config);
    } catch (err) {
      console.error(err);
    }
  }

const getConfig = async() => {
    const token = await auth.currentUser.getIdToken();
    return {
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT,
        headers: {"authorization": token}
    }
}
