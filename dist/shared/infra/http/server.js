"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var index_1 = __importDefault(require("./routes/index"));
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
require("@shared/infra/typeorm");
require("@shared/container");
var app = express_1.default();
app.use(express_1.default.json());
app.use(index_1.default);
app.use(function (err, request, response, _) {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    return response.status(500).json({
        // status: 'error',
        // message: 'Internal server error',
        err: err.message
    });
});
app.listen(3333, function () {
    console.log('Jobs Abstartups is running!');
});
