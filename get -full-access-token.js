//FB full token
javascript:
var host = window.location.hostname;
if (host == "www.facebook.com") {
    var token = access_token = /access_token:"(.+?)"/.exec(document.body.innerHTML)[1];
    prompt("Your facebook full token", token);
} else {
    alert("Chỉ khả dụng tại facebook");
}