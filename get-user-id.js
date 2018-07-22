//FB ID
javascript:
var host = window.location.hostname;
if (host == "www.facebook.com") {
    var uid = document.cookie.match(/c_user=(\d+)/)[1];
    prompt("Your facebook ID", uid);
} else {
    alert("Chỉ khả dụng tại facebook");
}