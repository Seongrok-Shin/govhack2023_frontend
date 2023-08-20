import axios from "axios";
import { auth } from "../../../firebaseConfig";

const USER_RESOURCE = "user";

export async function test(){
    console.info("testing connections");
    try{
        const userdata = {
            user_id: "adfsadfd",
            name:  "skip",
            profile_image : "fsadfsaf", 
            points : 4
        }
        createUser(userdata);
        const modified_data = {
            user_id :"adfsadfd",
            name: "sdfds"
        }
        updateUserForId(modified_data)
        console.info("testing completet!")
    }catch(err){
        console.info(err)
    }
    
}
// @route GET api/user/:id
// @description Get user id
// @access Public
export async function getUserForId(id) {
    console.info('Getting user...', id);
    try {
      const config = await getConfig();
      await axios.get(`${USER_RESOURCE}/${id}`, config);
    } catch (err) {
      console.error(err);
    }
  }

// @route GET api/user/
// @description Create new user
// @access Public
export async function createUser(user) {

  console.info("Creating user...", user);
  try {
    const config = await getConfig()
    await axios.post(USER_RESOURCE, config);
  } catch (err) {
    console.error(err);
  }
}
// @route GET api/user/:id
// @description Update user
// @access Public
export async function updateUserForId(id, user) {

  console.info("Updating post...", id, user);
  try {
    const config = await getConfig();
    //getting the user id by address.
    await axios.put(`${USER_RESOURCE}/${id}`, config);
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
