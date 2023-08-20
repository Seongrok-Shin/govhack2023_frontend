import axios from "axios";
import { auth } from "../../../firebaseConfig";

const ACHIEVEMENT_RESOURCE = "achievement";

export async function test(){
    console.info("Test case initiated...");
    try{
        //getting all achievemnets.
        getAllAchievements();
    }catch(err){
        console.info(err)
    }
    
}
// @route GET api/achievements/
// @description Retrieve all achievements
// @access Public
export async function getAllAchievements() {
  console.info("Getting all achievements...");
  try {
    const config = await getConfig()
    const res = await axios.get(ACHIEVEMENT_RESOURCE, config);
    console.info("Got achievements!", res.data);
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
