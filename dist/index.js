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
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.ObjectDetectionModel = exports.loadObjectDetection = exports.loadImageClassification = exports.ImageClassificationModel = void 0;
// Image classification API.
var img_classification_1 = require("./img_classification");
Object.defineProperty(exports, "ImageClassificationModel", { enumerable: true, get: function () { return img_classification_1.ImageClassificationModel; } });
Object.defineProperty(exports, "loadImageClassification", { enumerable: true, get: function () { return img_classification_1.loadImageClassification; } });
// Object detection API.
var object_detection_1 = require("./object_detection");
Object.defineProperty(exports, "loadObjectDetection", { enumerable: true, get: function () { return object_detection_1.loadObjectDetection; } });
Object.defineProperty(exports, "ObjectDetectionModel", { enumerable: true, get: function () { return object_detection_1.ObjectDetectionModel; } });
var version_1 = require("./version");
Object.defineProperty(exports, "version", { enumerable: true, get: function () { return version_1.version; } });
