"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CandidatesController_1 = __importDefault(require("../controllers/CandidatesController"));
var candidatesRouter = express_1.Router();
var candidatesController = new CandidatesController_1.default();
candidatesRouter.post('/', candidatesController.create);
candidatesRouter.get('/find/:email', candidatesController.findEmail);
candidatesRouter.get('/find/all', candidatesController.findAllCandidates);
candidatesRouter.get('/find/all/occupation/:id', candidatesController.findByOccupationCandidates);
candidatesRouter.delete('/delete/:id', candidatesController.delete);
exports.default = candidatesRouter;
