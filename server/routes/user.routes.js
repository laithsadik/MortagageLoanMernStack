import express, { json } from "express";
import {test, newMortagage, loan} from '../controllers/user.controller.js'
const router = express.Router(); // eslint-disable-line new-cap, max-len, no-undef, id-length, no-unused-vars, camelcase, no-param-reassign, prefer-destructuring, import/no-extraneous-dependencies, import/extensions, react/jsx-filename-extension, react/prop-types, react/react-in-jsx-scope, react/jsx-no-bind, react/jsx-pascal-case, no-unused-expressions */

router.get("/test",test);
router.post("/newmortagage", newMortagage)
router.post("/loan", loan)
export default router;
