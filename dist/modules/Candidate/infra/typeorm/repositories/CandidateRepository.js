"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Candidate_1 = __importDefault(require("../entities/Candidate"));
var CandidateRepository = /** @class */ (function () {
    function CandidateRepository() {
        this.ormRepository = typeorm_1.getRepository(Candidate_1.default);
    }
    CandidateRepository.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var candidates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.find({
                            select: ['id', 'name', 'email', 'last_job', 'linkedin', 'whatsapp'],
                            relations: ['occupation']
                        })];
                    case 1:
                        candidates = _a.sent();
                        return [2 /*return*/, candidates];
                }
            });
        });
    };
    CandidateRepository.prototype.findByOcuppation = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var candidates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.find({
                            where: { occupation_area: id },
                            select: ['id', 'name', 'email', 'last_job', 'linkedin', 'whatsapp']
                        })];
                    case 1:
                        candidates = _a.sent();
                        return [2 /*return*/, candidates];
                }
            });
        });
    };
    CandidateRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CandidateRepository.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var candidate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.findOne({
                            where: { email: email }
                        })];
                    case 1:
                        candidate = _a.sent();
                        return [2 /*return*/, candidate];
                }
            });
        });
    };
    CandidateRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email, whatsapp = _a.whatsapp, linkedin = _a.linkedin, lastJob = _a.lastJob, occupation_area = _a.occupation_area;
        return __awaiter(this, void 0, void 0, function () {
            var candidate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.create({
                            name: name,
                            email: email,
                            whatsapp: whatsapp,
                            linkedin: linkedin,
                            last_job: lastJob,
                            occupation_area: occupation_area
                        })];
                    case 1:
                        candidate = _b.sent();
                        return [4 /*yield*/, this.ormRepository.save(candidate)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, candidate];
                }
            });
        });
    };
    CandidateRepository.prototype.save = function (candidate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.ormRepository.save(candidate)];
            });
        });
    };
    return CandidateRepository;
}());
exports.default = CandidateRepository;
