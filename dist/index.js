"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send('Wlcome to my api restfull funtionando');
});
app.get('/hello', (req, res) => {
    res.send('funcionando');
});
app.get('/newPoint', (req, res) => {
    res.json({
        "data": {
            "message": "GoodBye, world"
        }
    });
});
app.listen(PORT, () => {
    console.log('SERVER RUNNING');
});
//# sourceMappingURL=index.js.map