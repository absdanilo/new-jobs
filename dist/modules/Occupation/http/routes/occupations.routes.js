"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OccupationsController_1 = __importDefault(require("../controllers/OccupationsController"));
var occupationsRouter = express_1.Router();
var occupationsController = new OccupationsController_1.default();
occupationsRouter.post('/', occupationsController.create);
occupationsRouter.get('/all', occupationsController.findAll);
exports.default = occupationsRouter;
