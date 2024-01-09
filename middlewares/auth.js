import jwt, { decode } from 'jsonwebtoken';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from './catchAsyncError.js';
import { User } from '../models/User.js';
import { config } from 'dotenv';
config({
  path:'./.env',
});

export const authorizedAdmin= (req, res, next) => {
    if (req.user.role === "user")
      return next(new ErrorHandler(  ` is not allowed to access this resource`,  403 ));
    next();
  };
  
export const isAuthenticated = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
  
    if (!token) return next(new ErrorHandler("Not Logged In", 401));
    
    const decoded = jwt.verify(token, process.env.JWT_KEY);
  
    req.user = await User.findById(decoded._id);
  
    next();
  });

