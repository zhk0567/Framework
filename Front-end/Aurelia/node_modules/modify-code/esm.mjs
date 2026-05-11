import cjs from "./index.js";
// Nodejs will use cjs.default because it ignores __esModule.
// But bundlers may transpile the above import differently which honours __esModule.
export default cjs.default || cjs;
