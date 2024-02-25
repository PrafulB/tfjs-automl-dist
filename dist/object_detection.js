"use strict";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadObjectDetection = exports.ObjectDetectionModel = void 0;
var tfjs_converter_1 = require("@tensorflow/tfjs-converter");
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var util_1 = require("./util");
var DEFAULT_TOPK = 20;
var DEFAULT_IOU_THRESHOLD = 0.5;
var DEFAULT_SCORE_THRESHOLD = 0.5;
var INPUT_NODE_NAME = 'ToFloat';
var OUTPUT_NODE_NAMES = ['Postprocessor/convert_scores', 'Postprocessor/Decode/transpose_1'];
var ObjectDetectionModel = /** @class */ (function () {
    function ObjectDetectionModel(graphModel, dictionary) {
        this.graphModel = graphModel;
        this.dictionary = dictionary;
    }
    ObjectDetectionModel.prototype.detect = function (input, options) {
        return __awaiter(this, void 0, void 0, function () {
            var img, _a, height, width, feedDict, _b, scoresTensor, boxesTensor, _c, numBoxes, numClasses, _d, scores, boxes, _e, boxScores, boxLabels, selectedBoxesTensor, selectedBoxes, result;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        options = sanitizeOptions(options);
                        img = (0, tfjs_core_1.tidy)(function () { return _this.preprocess(input, options); });
                        _a = [img.shape[1], img.shape[2]], height = _a[0], width = _a[1];
                        feedDict = {};
                        feedDict[INPUT_NODE_NAME] = img;
                        return [4 /*yield*/, this.graphModel.executeAsync(feedDict, OUTPUT_NODE_NAMES)];
                    case 1:
                        _b = _f.sent(), scoresTensor = _b[0], boxesTensor = _b[1];
                        _c = scoresTensor.shape, numBoxes = _c[1], numClasses = _c[2];
                        return [4 /*yield*/, Promise.all([scoresTensor.data(), boxesTensor.data()])];
                    case 2:
                        _d = _f.sent(), scores = _d[0], boxes = _d[1];
                        _e = calculateMostLikelyLabels(scores, numBoxes, numClasses), boxScores = _e.boxScores, boxLabels = _e.boxLabels;
                        return [4 /*yield*/, tfjs_core_1.image.nonMaxSuppressionAsync(boxesTensor, boxScores, options.topk, options.iou, options.score)];
                    case 3:
                        selectedBoxesTensor = _f.sent();
                        return [4 /*yield*/, selectedBoxesTensor.data()];
                    case 4:
                        selectedBoxes = _f.sent();
                        (0, tfjs_core_1.dispose)([img, scoresTensor, boxesTensor, selectedBoxesTensor]);
                        result = buildDetectedObjects(width, height, boxes, boxScores, boxLabels, selectedBoxes, this.dictionary);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ObjectDetectionModel.prototype.preprocess = function (input, options) {
        return (0, tfjs_core_1.cast)((0, tfjs_core_1.expandDims)((0, util_1.imageToTensor)(input)), 'float32');
    };
    return ObjectDetectionModel;
}());
exports.ObjectDetectionModel = ObjectDetectionModel;
function loadObjectDetection(modelUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, model, dict;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([(0, tfjs_converter_1.loadGraphModel)(modelUrl), (0, util_1.loadDictionary)(modelUrl)])];
                case 1:
                    _a = _b.sent(), model = _a[0], dict = _a[1];
                    return [2 /*return*/, new ObjectDetectionModel(model, dict)];
            }
        });
    });
}
exports.loadObjectDetection = loadObjectDetection;
function sanitizeOptions(options) {
    options = options || {};
    if (options.topk == null) {
        options.topk = DEFAULT_TOPK;
    }
    if (options.iou == null) {
        options.iou = DEFAULT_IOU_THRESHOLD;
    }
    if (options.score == null) {
        options.score = DEFAULT_SCORE_THRESHOLD;
    }
    return options;
}
function calculateMostLikelyLabels(scores, numBoxes, numClasses) {
    // Holds a score for each box.
    var boxScores = [];
    // Holds the label id for each box.
    var boxLabels = [];
    for (var i = 0; i < numBoxes; i++) {
        var maxScore = Number.MIN_VALUE;
        var mostLikelyLabel = -1;
        for (var j = 0; j < numClasses; j++) {
            var flatIndex = i * numClasses + j;
            var score = scores[flatIndex];
            if (score > maxScore) {
                maxScore = scores[flatIndex];
                mostLikelyLabel = j;
            }
        }
        boxScores[i] = maxScore;
        boxLabels[i] = mostLikelyLabel;
    }
    return { boxScores: boxScores, boxLabels: boxLabels };
}
function buildDetectedObjects(width, height, boxes, boxScores, boxLabels, selectedBoxes, dictionary) {
    var objects = [];
    // Each 2d rectangle is fully described with 4 coordinates.
    var numBoxCoords = 4;
    for (var i = 0; i < selectedBoxes.length; i++) {
        var boxIndex = selectedBoxes[i];
        var _a = Array.from(boxes.slice(boxIndex * numBoxCoords, boxIndex * numBoxCoords + numBoxCoords)), top_1 = _a[0], left = _a[1], bottom = _a[2], right = _a[3];
        objects.push({
            box: {
                left: left * width,
                top: top_1 * height,
                width: (right - left) * width,
                height: (bottom - top_1) * height,
            },
            label: dictionary[boxLabels[boxIndex]],
            score: boxScores[boxIndex],
        });
    }
    return objects;
}
