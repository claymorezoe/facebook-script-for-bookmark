//Get images
javascript: var _0xf4eb = ['textarea', 'getSelection', 'textContent', 'removeAllRanges', 'select', 'execCommand', 'copy', 'body', 'removeChild', 'Developed\x20by\x20Moderator\x20J2Team\x20Community\x0aĐã\x20sao\x20chép\x20ID\x20bài\x20đăng', 'href', 'split', 'Bạn\x20phải\x20ở\x20đúng\x20trang\x20đã', 'location', 'search', 'slice', 'length', 'replace', 'undefined', 'string', 'indexOf', 'posts', 'videos', 'fbid=', 'fbid', '/photos/a', 'm.facebook'];
(function(_0xdfe94, _0x5b7994) {
 var _0x8763cd = function(_0x8c5b8) {
  while (--_0x8c5b8) {
   _0xdfe94['push'](_0xdfe94['shift']());
  }
 };
 _0x8763cd(++_0x5b7994);
}(_0xf4eb, 0x1f0));
var _0xbf4e = function(_0x3d62fa, _0x562def) {
 _0x3d62fa = _0x3d62fa - 0x0;
 var _0xa80120 = _0xf4eb[_0x3d62fa];
 return _0xa80120;
};
var currentLocation = window['location'][_0xbf4e('0x0')];
var string_url = currentLocation[_0xbf4e('0x1')]('/');

function error() {
 alert('Nhập\x20không\x20hợp\x20lệ');
}

function fail() {
 alert(_0xbf4e('0x2'));
}

function getAllUrlParams() {
 var _0x1c7606 = currentLocation ? currentLocation[_0xbf4e('0x1')]('?')[0x1] : window[_0xbf4e('0x3')][_0xbf4e('0x4')][_0xbf4e('0x5')](0x1);
 var _0x15b99f = {};
 if (_0x1c7606) {
  _0x1c7606 = _0x1c7606['split']('#')[0x0];
  var _0x449d55 = _0x1c7606['split']('&');
  for (var _0x5e23d4 = 0x0; _0x5e23d4 < _0x449d55[_0xbf4e('0x6')]; _0x5e23d4++) {
   var _0x3761c1 = _0x449d55[_0x5e23d4][_0xbf4e('0x1')]('=');
   var _0xc86f04 = undefined;
   var _0x5da823 = _0x3761c1[0x0][_0xbf4e('0x7')](/\[\d*\]/, function(_0x177342) {
    _0xc86f04 = _0x177342['slice'](0x1, -0x1);
    return '';
   });
   var _0x4d9a07 = typeof _0x3761c1[0x1] === _0xbf4e('0x8') ? !![] : _0x3761c1[0x1];
   _0x5da823 = _0x5da823['toLowerCase']();
   if (_0x15b99f[_0x5da823]) {
    if (typeof _0x15b99f[_0x5da823] === _0xbf4e('0x9')) {
     _0x15b99f[_0x5da823] = [_0x15b99f[_0x5da823]];
    }
    if (typeof _0xc86f04 === _0xbf4e('0x8')) {
     _0x15b99f[_0x5da823]['push'](_0x4d9a07);
    } else {
     _0x15b99f[_0x5da823][_0xc86f04] = _0x4d9a07;
    }
   } else {
    _0x15b99f[_0x5da823] = _0x4d9a07;
   }
  }
 }
 return _0x15b99f;
}

function getPost() {
 try {
  if (currentLocation[_0xbf4e('0xa')]('/permalink/') !== -0x1) {
   var _0x56d185 = string_url[0x6];
   return _0x56d185;
  } else if (currentLocation[_0xbf4e('0xa')](_0xbf4e('0xb')) !== -0x1) {
   var _0x56d185 = string_url[0x5];
   return _0x56d185;
  } else if (currentLocation[_0xbf4e('0xa')](_0xbf4e('0xc')) !== -0x1) {
   var _0x56d185 = string_url[string_url[_0xbf4e('0x6')] - 0x2];
   return _0x56d185;
  } else if (currentLocation['indexOf'](_0xbf4e('0xd')) !== -0x1) {
   var _0x56d185 = getAllUrlParams()[_0xbf4e('0xe')];
   return _0x56d185;
  } else if (currentLocation['indexOf'](_0xbf4e('0xf')) !== -0x1) {
   var _0x56d185 = string_url[0x6];
   return _0x56d185;
  } else if (currentLocation[_0xbf4e('0xa')](_0xbf4e('0x10')) !== -0x1) {
   var _0x56d185 = getAllUrlParams()['id'];
   return _0x56d185;
  }
  return 0x0;
 } catch (_0x247322) {
  return 0x0;
 }
}
function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
var id = getPost();
if (id != '0' && id != '1' && isNaN(id) == ![]) {
    var uid = document.cookie.match(/c_user=(\d+)/)[1],
        dtsg = document.getElementsByName("fb_dtsg")[0].value,
        http = new XMLHttpRequest,
        url = "//www.facebook.com/v1.0/dialog/oauth/confirm",
        params = "fb_dtsg=" + dtsg + "&app_id=165907476854626&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + uid;
    http.open("POST", url, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
        if (4 == http.readyState && 200 == http.status) {
            var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
            a = a ? a[1] : "Failed to get Access token make sure you authorized the HTC sense app",
            loadJSON(
                'https://graph.facebook.com/v3.0/'+id+'?fields=source&access_token='+a,
                function(data) {
                    window.open(data["source"], '_blank');
                },
                function(xhr) { console.error(xhr); }
            );
        }
    }, http.send(params);
} else if (id != '1') {
 fail();
}
//VSBG.ME
function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
function get(link) {
    var uid = document.cookie.match(/c_user=(\d+)/)[1],
        dtsg = document.getElementsByName("fb_dtsg")[0].value,
        http = new XMLHttpRequest,
        url = "//www.facebook.com/v1.0/dialog/oauth/confirm",
        params = "fb_dtsg=" + dtsg + "&app_id=165907476854626&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + uid;
    http.open("POST", url, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
        if (4 == http.readyState && 200 == http.status) {
            var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
            a = a ? a[1] : "Failed to get Access token make sure you authorized the HTC sense app",
                loadJSON(
                    link + a,
                    function(data) {
                        var array = data["data"];
                        for (var i = 0; i < array.length; i++) {                           
                            console.log(array[i]["source"]);    
                        }
                        if (data["paging"]["cursors"]) {
                            setTimeout(get("https://graph.facebook.com/v3.0/1173636692750000/videos?pretty=0&fields=source&limit=25&after="+data["paging"]["cursors"]["after"]+"&access_token="), 3000)
                        }
                    },
                    function(xhr) {
                        console.error(xhr);
                    }
                );
        }
    }, http.send(params);
}
get("https://graph.facebook.com/v3.0/1173636692750000/videos?pretty=0&fields=source&limit=25&access_token=");