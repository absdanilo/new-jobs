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
var tsyringe_1 = require("tsyringe");
var CreateCandidateService_1 = __importDefault(require("@modules/Candidate/services/CreateCandidateService"));
var DeleteCandidateService_1 = __importDefault(require("@modules/Candidate/services/DeleteCandidateService"));
var FindEmailCandidateService_1 = __importDefault(require("@modules/Candidate/services/FindEmailCandidateService"));
var FindAllCandidateService_1 = __importDefault(require("@modules/Candidate/services/FindAllCandidateService"));
var paginate_1 = __importDefault(require("utils/paginate"));
var FindByOccupationCandidate_1 = __importDefault(require("@modules/Candidate/services/FindByOccupationCandidate"));
var CandidatesController = /** @class */ (function () {
    function CandidatesController() {
    }
    CandidatesController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, whatsapp, linkedin, lastJob, occupation_area, createCandidate, candidate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, whatsapp = _a.whatsapp, linkedin = _a.linkedin, lastJob = _a.lastJob, occupation_area = _a.occupation_area;
                        createCandidate = tsyringe_1.container.resolve(CreateCandidateService_1.default);
                        return [4 /*yield*/, createCandidate.execute({
                                name: name,
                                email: email,
                                whatsapp: whatsapp,
                                linkedin: linkedin,
                                lastJob: lastJob,
                                occupation_area: occupation_area
                            })];
                    case 1:
                        candidate = _b.sent();
                        return [2 /*return*/, response.json(candidate)];
                }
            });
        });
    };
    CandidatesController.prototype.findEmail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, findEmailCandidate, candidate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = request.params.email;
                        findEmailCandidate = tsyringe_1.container.resolve(FindEmailCandidateService_1.default);
                        return [4 /*yield*/, findEmailCandidate.execute(email)];
                    case 1:
                        candidate = _a.sent();
                        return [2 /*return*/, response.json(candidate)];
                }
            });
        });
    };
    CandidatesController.prototype.findAllCandidates = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, pageSize, findAllCandidates, candidates, candidatesPaginate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.query.page, page = _a === void 0 ? 1 : _a;
                        pageSize = 20;
                        return [4 /*yield*/, tsyringe_1.container.resolve(FindAllCandidateService_1.default)];
                    case 1:
                        findAllCandidates = _b.sent();
                        return [4 /*yield*/, findAllCandidates.execute()];
                    case 2:
                        candidates = _b.sent();
                        console.log(candidates);
                        candidatesPaginate = paginate_1.default(candidates, pageSize, Number(page));
                        return [2 /*return*/, response.json({
                                page: Number(page),
                                pageSize: pageSize,
                                totalCount: candidatesPaginate.length,
                                candidates: candidatesPaginate
                            })];
                }
            });
        });
    };
    CandidatesController.prototype.findByOccupationCandidates = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, id, pageSize, findAllCandidates, candidates, candidatesPaginate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.query.page, page = _a === void 0 ? 1 : _a;
                        id = request.params.id;
                        pageSize = 20;
                        return [4 /*yield*/, tsyringe_1.container.resolve(FindByOccupationCandidate_1.default)];
                    case 1:
                        findAllCandidates = _b.sent();
                        return [4 /*yield*/, findAllCandidates.execute(Number(id))];
                    case 2:
                        candidates = _b.sent();
                        candidatesPaginate = paginate_1.default(candidates, pageSize, Number(page));
                        return [2 /*return*/, response.json({
                                page: Number(page),
                                pageSize: pageSize,
                                totalCount: candidatesPaginate.length,
                                candidates: candidatesPaginate
                            })];
                }
            });
        });
    };
    CandidatesController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteCandidate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        deleteCandidate = tsyringe_1.container.resolve(DeleteCandidateService_1.default);
                        return [4 /*yield*/, deleteCandidate.execute(Number(id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json({ success: true })];
                }
            });
        });
    };
    return CandidatesController;
}());
exports.default = CandidatesController;
