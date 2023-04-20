let msg = "";
let excelArr = [];
let filterWord = "";
let filterArr = [];
let exportEventFiles = null;

function clearData() {
  msg = "";
  excelArr = [];
  filterWord = "";
  filterArr = [];
  exportEventFiles = null;
  document.querySelector(".input-file").value = "";
  document.getElementById("msg").innerText = "";
  document.getElementById("filterWord").value = "";
}

function exportData(event) {
  console.log(event);
  if (!event.currentTarget.files.length) {
    msg = "!未选择文件";
    document.getElementById("msg").innerText = msg;
    return;
  }
  // 拿取文件对象
  exportEventFiles = event.currentTarget.files;
}

function confirmData() {
  if (!exportEventFiles) {
    msg = "!未选择文件";
    document.getElementById("msg").innerText = msg;
    return;
  }
  let arr = [...exportEventFiles];
  let result = [];
  let count = arr.length;
  console.log(count);
  for (let i = 0; i < arr.length; i++) {
    readFile(arr[i], function (data) {
      result.push(data);
      if (--count == 0) {
        excelArr = result;
        console.log("--excelArr:", excelArr);
        filterWord = document.getElementById("filterWord").value;
        filterWord != "" && filterExcelArr();
        console.log("--filterArr", filterArr);
      }
    });
  }
}

function readFile(f, callback) {
  let reader = new FileReader();
  reader.onload = function (e) {
    let data = e.target.result;
    let workbook = XLSX.read(data, { type: "binary" });
    let sheetName = workbook.SheetNames[0];
    let worksheet = workbook.Sheets[sheetName];
    let json = XLSX.utils.sheet_to_json(worksheet);
    callback(json);
  };
  reader.readAsBinaryString(f);
}

function filterExcelArr() {
  filterArr = [];
  excelArr.forEach((v) => {
    let arrItem = v.map((item) => {
      return item[filterWord];
    });
    filterArr.push(arrItem);
  });
}
