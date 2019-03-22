const showdown = require('showdown');
const fs = require('fs');
const converter = new showdown.Converter();
const text = fs.readFileSync('./cv.md').toString();
let body = converter.makeHtml(text);
body = body.replace('<h2 id="-2">教育背景</h2>', '<h2 id="-2">教育背景</h2>\n<div class="education">');
body = body.replace('<h2 id="-4">技能清单</h2>', '</div>\n<h2 id="-4">技能清单</h2>');
body = body.replace('<h3 id="reactredux">', '<div class="skill">\n<h3 id="reactredux">');
body = body.replace('<h2 id="-5">项目经历</h2>', '</div>\n<h2 id="-5">项目经历</h2>\n<div class="project">');
body = body.replace('<h2 id="-6">奖项与证书</h2>', '</div>\n<h2 id="-6">奖项与证书</h2>');
body = body.replace('手机: ', '<img src="https://img.icons8.com/ios/50/000000/phone-filled.png">');
body = body.replace('邮箱: ', '<img src="https://img.icons8.com/ios/50/000000/secured-letter-filled.png">');
body = body.replace('GitHub: ', '<img src="https://img.icons8.com/ios/50/000000/github-filled.png">');

body = body.replace(/\[st\]/g, '<span class="sub-title">');
body = body.replace(/\[\/st\]/g, '</span>');
const html =
`
<html>
<head>
<link rel="stylesheet" href="style.css"/>
</head>
<body>
<div class="wrapper">
${body}
</div>
</body>
</html
`;
fs.writeFileSync('./index.html', html);