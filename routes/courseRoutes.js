import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import { updateProfile } from "../controllers/userController.js";
import singleUpload from '../middlewares/multer.js';
import { authorizedSubscribers } from "../middlewares/auth.js";
import { isAuthenticated,authorizedAdmin } from '../middlewares/auth.js';
const router = express.Router();



router.route("/courses").get(getAllCourses);
router.route("/createcourse").post(isAuthenticated,authorizedAdmin,singleUpload,createCourse);

router.route("/course/:id").get(isAuthenticated,authorizedSubscribers,getCourseLectures).post(isAuthenticated,authorizedAdmin,singleUpload,addLecture).delete(isAuthenticated,authorizedAdmin,deleteCourse);
router.route("/updateProfilePicture").put(isAuthenticated,updateProfile);
router.route("/lecture").delete(isAuthenticated,authorizedAdmin,deleteLecture);

export default router;