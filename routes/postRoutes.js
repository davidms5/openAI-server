import express from "express";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";

import Post from '../mongodb/models/Posts.js';

dotenv.config();

const router = express.Router();