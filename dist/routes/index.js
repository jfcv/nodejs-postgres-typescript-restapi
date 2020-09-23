"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controllers_1 = require("../controllers/index.controllers");
router.get('/users', index_controllers_1.getUsers);
router.get('/users/:id', index_controllers_1.getUserById);
router.post('/users', index_controllers_1.createUser);
/* router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser); */
exports.default = router;
