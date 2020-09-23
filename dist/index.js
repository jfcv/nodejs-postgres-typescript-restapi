"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const index_1 = __importDefault(require("./routes/index"));
app.use(index_1.default);
app.listen(port, () => {
    console.log('Server on port !', port);
});
