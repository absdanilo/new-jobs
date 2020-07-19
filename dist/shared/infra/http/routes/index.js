"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var occupations_routes_1 = __importDefault(require("@modules/Occupation/http/routes/occupations.routes"));
var candidates_routes_1 = __importDefault(require("@modules/Candidate/http/routes/candidates.routes"));
var routes = express_1.Router();
routes.use('/occupations', occupations_routes_1.default);
routes.use('/candidates', candidates_routes_1.default);
exports.default = routes;
