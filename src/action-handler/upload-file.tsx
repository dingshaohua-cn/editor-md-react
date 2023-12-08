export default (uploadUrl: string) => {
    if (!uploadUrl) {
      alert("请配置上传地址");
      return false;
    }

    return new Promise((resolve) => {
      const iptNode: HTMLInputElement = document.createElement("INPUT");
      iptNode.type = "file";
      iptNode.onchange = (e) => {
        const files = e.target.files;
        const rawFile = files[0];
        const fd = new FormData();
        fd.append("file", rawFile);
        const res = fetch(uploadUrl, { method: "post", body: fd }).then((res) =>
          res.json()
        );
        resolve(res);
      };
      iptNode.click();
    });
  };