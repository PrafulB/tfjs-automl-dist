/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
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
/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
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
import{loadGraphModel as r}from"@tensorflow/tfjs-converter";import{Tensor as t,browser as e,util as n,expandDims as o,image as i,sub as s,div as c,tidy as u,cast as a,dispose as l}from"@tensorflow/tfjs-core";function f(r,t,e,n){return new(e||(e=Promise))((function(o,i){function s(r){try{u(n.next(r))}catch(r){i(r)}}function c(r){try{u(n.throw(r))}catch(r){i(r)}}function u(r){var t;r.done?o(r.value):(t=r.value,t instanceof e?t:new e((function(r){r(t)}))).then(s,c)}u((n=n.apply(r,t||[])).next())}))}function p(r,t){var e,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(s=0)),s;)try{if(e=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return s.label++,{value:c[1],done:!1};case 5:s.label++,n=c[1],c=[0];continue;case 7:c=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){s=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){s.label=c[1];break}if(6===c[0]&&s.label<o[1]){s.label=o[1],o=c;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(c);break}o[2]&&s.ops.pop(),s.trys.pop();continue}c=t.call(r,s)}catch(r){c=[6,r],n=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}
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
function h(r){return r instanceof t?r:e.fromPixels(r)}function d(r){return f(this,void 0,void 0,(function(){var t,e,o;return p(this,(function(i){switch(i.label){case 0:return t=r.lastIndexOf("/"),e=t>=0?r.slice(0,t+1):"",o="".concat(e,"dict.txt"),[4,n.fetch(o)];case 1:return[4,i.sent().text()];case 2:return[2,i.sent().trim().split("\n")]}}))}))}
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
 */"function"==typeof SuppressedError&&SuppressedError;var v=[224,224],b=function(){function r(r,t){this.graphModel=r,this.dictionary=t}return r.prototype.classify=function(r,t){return f(this,void 0,void 0,(function(){var e,n,o=this;return p(this,(function(i){switch(i.label){case 0:return t=function(r){r=r||{},null==r.centerCrop&&(r.centerCrop=!0);return r}(t),[4,(e=u((function(){var e=o.preprocess(r,t);return o.graphModel.predict(e)}))).data()];case 1:return n=i.sent(),e.dispose(),[2,Array.from(n).map((function(r,t){return{label:o.dictionary[t],prob:r}}))]}}))}))},r.prototype.preprocess=function(r,t){var e=h(r),n=t.centerCrop?function(r){return u((function(){var t=r.shape.slice(0,2),e=t[0],n=t[1],s=0,c=0;e>n?s=(e-n)/2:c=(n-e)/2;var u=Math.min(n,e),l=[[s/e,c/n,(s+u)/e,(c+u)/n]],f=[0];return i.cropAndResize(o(a(r,"float32")),l,f,v)}))}
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
 */(e):o(i.resizeBilinear(e,v));return s(c(n,127.5),1)},r}();function y(t){return f(this,void 0,void 0,(function(){var e,n,o;return p(this,(function(i){switch(i.label){case 0:return[4,Promise.all([r(t),d(t)])];case 1:return e=i.sent(),n=e[0],o=e[1],[2,new b(n,o)]}}))}))}var w=["Postprocessor/convert_scores","Postprocessor/Decode/transpose_1"],m=function(){function r(r,t){this.graphModel=r,this.dictionary=t}return r.prototype.detect=function(r,t){return f(this,void 0,void 0,(function(){var e,n,o,s,c,a,f,h,d,v,b,y,m,x,g,k,M,P,S,A,E=this;return p(this,(function(p){switch(p.label){case 0:return t=function(r){r=r||{},null==r.topk&&(r.topk=20);null==r.iou&&(r.iou=.5);null==r.score&&(r.score=.5);return r}(t),e=u((function(){return E.preprocess(r,t)})),n=[e.shape[1],e.shape[2]],o=n[0],s=n[1],(c={}).ToFloat=e,[4,this.graphModel.executeAsync(c,w)];case 1:return a=p.sent(),f=a[0],h=a[1],d=f.shape,v=d[1],b=d[2],[4,Promise.all([f.data(),h.data()])];case 2:return y=p.sent(),m=y[0],x=y[1],g=function(r,t,e){for(var n=[],o=[],i=0;i<t;i++){for(var s=Number.MIN_VALUE,c=-1,u=0;u<e;u++){var a=i*e+u;r[a]>s&&(s=r[a],c=u)}n[i]=s,o[i]=c}return{boxScores:n,boxLabels:o}}(m,v,b),k=g.boxScores,M=g.boxLabels,[4,i.nonMaxSuppressionAsync(h,k,t.topk,t.iou,t.score)];case 3:return[4,(P=p.sent()).data()];case 4:return S=p.sent(),l([e,f,h,P]),A=function(r,t,e,n,o,i,s){for(var c=[],u=4,a=0;a<i.length;a++){var l=i[a],f=Array.from(e.slice(l*u,l*u+u)),p=f[0],h=f[1],d=f[2],v=f[3];c.push({box:{left:h*r,top:p*t,width:(v-h)*r,height:(d-p)*t},label:s[o[l]],score:n[l]})}return c}
/** @license See the LICENSE file. */(s,o,x,k,M,S,this.dictionary),[2,A]}}))}))},r.prototype.preprocess=function(r,t){return a(o(h(r)),"float32")},r}();function x(t){return f(this,void 0,void 0,(function(){var e,n,o;return p(this,(function(i){switch(i.label){case 0:return[4,Promise.all([r(t),d(t)])];case 1:return e=i.sent(),n=e[0],o=e[1],[2,new m(n,o)]}}))}))}var g="1.2.0";export{b as ImageClassificationModel,m as ObjectDetectionModel,y as loadImageClassification,x as loadObjectDetection,g as version};
//# sourceMappingURL=tf-automl.esm.js.map
