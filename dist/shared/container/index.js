"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CandidateRepository_1 = __importDefault(require("@modules/Candidate/infra/typeorm/repositories/CandidateRepository"));
var OccupationRepository_1 = __importDefault(require("@modules/Occupation/infra/typeorm/repositories/OccupationRepository"));
tsyringe_1.container.registerSingleton('OccupationRepository', OccupationRepository_1.default);
tsyringe_1.container.registerSingleton('CandidatesRepository', CandidateRepository_1.default);
