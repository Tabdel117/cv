// const Markdown = require('markdown-to-html').Markdown;
// const fs = require('fs');
// const md = new Markdown();
// md.bufmax = 2048;
// const fileName = 'cv.md';
// const opts = {title: '程亦直的简历', stylesheet: 'style.css'};

// // Write a header.
// console.log('===============================');
// // Write a trailer at eof.
// md.once('end', function() {
//   console.log('===============================');
// });
// md.render(fileName, opts, function(err) {
//   if (err) {
//     console.error('>>>' + err);
//     process.exit();
//   }
//   md.pipe(fs.createWriteStream('output.html'));
// });
const showdown = require('showdown');
const fs = require('fs');
const converter = new showdown.Converter();
const text = fs.readFileSync('./cv.md').toString();
const html = converter.makeHtml(text);
fs.writeFileSync('./output.html', html);