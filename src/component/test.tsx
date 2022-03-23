const fm = require("front-matter");

var md = require('markdown-it')({
    html: true,
})

export const test = () => {
    const res = fm(`./Records/record.md`);
    const content = md.render(res.body);

    return content;
}
