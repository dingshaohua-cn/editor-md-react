var uploadFile = (function (uploadUrl) {
  if (!uploadUrl) {
    alert("请配置上传地址");
    return false;
  }
  return new Promise(function (resolve) {
    var iptNode = document.createElement("INPUT");
    iptNode.type = "file";
    iptNode.onchange = function (e) {
      var files = e.target.files;
      var rawFile = files[0];
      var fd = new FormData();
      fd.append("file", rawFile);
      var res = fetch(uploadUrl, {
        method: "post",
        body: fd
      }).then(function (res) {
        return res.json();
      });
      resolve(res);
    };
    iptNode.click();
  });
});

export { uploadFile as default };
