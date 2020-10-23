//List all CSS files built in this project
const config = require("./app");

const list_css_files = [
  `style.scss`
];

var _scss_path = "./src/styles/scss/";

const _build_css_files = list_css_files.map(file => {
  return _scss_path + file;
});

const paths = {
  sass: ["./src/styles/scss/**/*.scss"],
  src_CSS_Dir: "./src/styles/css",
  dest_CSS_Dir: `./public/hrm-ui/css`,
  extName: {
    extname: ".min.css"
  }
};

module.exports = {
  _build_css_files,
  paths
};
