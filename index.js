//imports
import {simple} from "justo";

//api
module.exports = simple({ns: "org.justojs.plugin", name: "gh-pages"}, require("./lib/op").default);
