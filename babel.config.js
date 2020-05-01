module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["@babel/preset-env", "@babel/preset-react","module:metro-react-native-babel-preset"],
        plugins: [['@babel/plugin-proposal-class-properties', { "loose": true }]],
    }
};



// require("@babel/core").transform("code", {
//     plugins: ["@babel/plugin-proposal-class-properties"]
// });
