var u=Object.defineProperty;var a=(e,r)=>u(e,"name",{value:r,configurable:!0});import{r as x}from"./index-43ec82a8.js";var o={},m={get exports(){return o},set exports(e){o=e}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=x,c=Symbol.for("react.element"),y=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,v=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,f){var t,s={},p=null,_=null;f!==void 0&&(p=""+f),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(_=r.ref);for(t in r)j.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)s[t]===void 0&&(s[t]=r[t]);return{$$typeof:c,type:e,key:p,ref:_,props:s,_owner:v.current}}a(i,"q");n.Fragment=y;n.jsx=i;n.jsxs=i;(function(e){e.exports=n})(m);const R=o.Fragment,k=o.jsx,F=o.jsxs;export{R as F,F as a,k as j};
//# sourceMappingURL=jsx-runtime-1becbe17.js.map
