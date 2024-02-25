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
var tfjs_converter_1 = require("@tensorflow/tfjs-converter");
var tf = require("@tensorflow/tfjs-core");
// tslint:disable-next-line: no-imports-from-dist
var jasmine_util_1 = require("@tensorflow/tfjs-core/dist/jasmine_util");
var automl = require("./index");
var test_util_1 = require("./test_util");
var MODEL_URL = 'https://storage.googleapis.com/tfjs-testing/tfjs-automl/img_classification/model.json';
var DAISY_URL = 'https://storage.googleapis.com/tfjs-testing/tfjs-automl/img_classification/daisy.jpg';
(0, jasmine_util_1.describeWithFlags)('image classification', {}, function () {
    var model = null;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, automl.loadImageClassification(MODEL_URL)];
                case 1:
                    model = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('make prediction from a tensor', function () { return __awaiter(void 0, void 0, void 0, function () {
        var img, predictions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    img = tf.zeros([100, 80, 3]);
                    return [4 /*yield*/, model.classify(img)];
                case 1:
                    predictions = _a.sent();
                    expect(predictions[0].label).toBe('daisy');
                    expect(predictions[1].label).toBe('dandelion');
                    expect(predictions[2].label).toBe('roses');
                    tf.test_util.expectNumbersClose(predictions[0].prob, 0.5806022);
                    tf.test_util.expectNumbersClose(predictions[1].prob, 0.32249659);
                    tf.test_util.expectNumbersClose(predictions[2].prob, 0.0283515);
                    return [2 /*return*/];
            }
        });
    }); });
    it('make prediction from a tensor without cropping', function () { return __awaiter(void 0, void 0, void 0, function () {
        var img, predictions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    img = tf.zeros([100, 80, 3]);
                    return [4 /*yield*/, model.classify(img, { centerCrop: false })];
                case 1:
                    predictions = _a.sent();
                    expect(predictions[0].label).toBe('daisy');
                    expect(predictions[1].label).toBe('dandelion');
                    expect(predictions[2].label).toBe('roses');
                    tf.test_util.expectNumbersClose(predictions[0].prob, 0.5806022);
                    tf.test_util.expectNumbersClose(predictions[1].prob, 0.32249659);
                    tf.test_util.expectNumbersClose(predictions[2].prob, 0.0283515);
                    return [2 /*return*/];
            }
        });
    }); });
    it('no memory leak when making a prediction', function () { return __awaiter(void 0, void 0, void 0, function () {
        var img, numTensorsBefore, numTensorsAfter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    img = tf.zeros([100, 80, 3]);
                    numTensorsBefore = tf.memory().numTensors;
                    return [4 /*yield*/, model.classify(img)];
                case 1:
                    _a.sent();
                    numTensorsAfter = tf.memory().numTensors;
                    expect(numTensorsAfter).toEqual(numTensorsBefore);
                    return [2 /*return*/];
            }
        });
    }); });
    it('has access to dictionary', function () {
        expect(model.dictionary).toEqual([
            'daisy', 'dandelion', 'roses', 'sunflowers', 'tulips'
        ]);
    });
    it('can access the underlying graph model', function () {
        expect(model.graphModel instanceof tfjs_converter_1.GraphModel).toBe(true);
        expect(model.graphModel.inputNodes).toEqual(['image']);
        expect(model.graphModel.outputNodes).toEqual(['scores']);
        var img = tf.zeros([1, 224, 224, 3]);
        var scores = model.graphModel.predict(img);
        expect(scores.shape).toEqual([1, 5]);
    });
});
(0, jasmine_util_1.describeWithFlags)('image classification browser', jasmine_util_1.BROWSER_ENVS, function () {
    var model = null;
    var daisyImg;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, automl.loadImageClassification(MODEL_URL)];
                case 1:
                    model = _a.sent();
                    return [4 /*yield*/, (0, test_util_1.fetchImage)(DAISY_URL)];
                case 2:
                    daisyImg = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    function assertTop3PredsForDaisy(predictions, centerCrop) {
        var probs = centerCrop ? [0.9310929, 0.0273733, 0.0130559] :
            [0.8411523, 0.0729438, 0.03020708];
        expect(predictions[0].label).toBe('daisy');
        tf.test_util.expectNumbersClose(predictions[0].prob, probs[0]);
        expect(predictions[1].label).toBe('dandelion');
        tf.test_util.expectNumbersClose(predictions[1].prob, probs[1]);
        expect(predictions[2].label).toBe('roses');
        tf.test_util.expectNumbersClose(predictions[2].prob, probs[2]);
    }
    it('make prediction from an image element', function () { return __awaiter(void 0, void 0, void 0, function () {
        var predictions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, model.classify(daisyImg)];
                case 1:
                    predictions = _a.sent();
                    assertTop3PredsForDaisy(predictions, true /* centerCrop */);
                    return [2 /*return*/];
            }
        });
    }); });
    it('make prediction from a canvas element', function () { return __awaiter(void 0, void 0, void 0, function () {
        var canvas, ctx, predictions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    canvas.width = daisyImg.width;
                    canvas.height = daisyImg.height;
                    ctx.drawImage(daisyImg, 0, 0, daisyImg.width, daisyImg.height);
                    return [4 /*yield*/, model.classify(canvas)];
                case 1:
                    predictions = _a.sent();
                    assertTop3PredsForDaisy(predictions, true /* centerCrop */);
                    return [2 /*return*/];
            }
        });
    }); });
    it('make prediction without center cropping', function () { return __awaiter(void 0, void 0, void 0, function () {
        var predictions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, model.classify(daisyImg, { centerCrop: false })];
                case 1:
                    predictions = _a.sent();
                    assertTop3PredsForDaisy(predictions, false /* centerCrop */);
                    return [2 /*return*/];
            }
        });
    }); });
});
