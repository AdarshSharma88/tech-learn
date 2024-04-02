import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateUserRole,
  
} from "../controllers/userController.js";
import singleUpload from '../middlewares/multer.js';

import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express();
router.route("/me").get(isAuthenticated,getMyProfile);
router.route("/me").delete(isAuthenticated,deleteMyProfile);
router.route("/register").post(singleUpload,register);
router.route("/changepassword").put(isAuthenticated,changePassword);
router.route("/updateprofile").put(isAuthenticated,singleUpload,updateProfile);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);
router.route("/admin/users").get(isAuthenticated,authorizedAdmin,getAllUsers);
router.route("/admin/user/:id").put(isAuthenticated,authorizedAdmin,updateUserRole).delete(isAuthenticated,authorizedAdmin,deleteUser);
router.route("/login").post(login);
router.route("/logout").get(logout);
export default router;