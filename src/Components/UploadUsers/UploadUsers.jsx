import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import XLSX from "xlsx";
import { phonebookData } from '../../Data/PhonebookData.json';

export default function UploadUsers() {

  const [fileValue, setFileValue] = useState('');
  const [data, setData] = useState();

  // function handleFile(file /*:File*/) {
  //     /* Boilerplate to set up FileReader */
  //     const reader = new FileReader();
  //     const rABS = !!reader.readAsBinaryString;
  //     reader.onload = e => {
  //       /* Parse data */
  //       const bstr = e.target.result;
  //       const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
  //       /* Get first worksheet */
  //       const wsname = wb.SheetNames[0];
  //       const ws = wb.Sheets[wsname];
  //       /* Convert array of arrays */
  //       const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
  //       /* Update state */
  //       setData(data);
  //       debugger
  //     };
  //     if (rABS) reader.readAsBinaryString(file);
  //     else reader.readAsArrayBuffer(file);
  //   }

  //   function handleChange(e) {
  //     const files = e.target.files;
  //     if (files && files[0]) handleFile(files[0]);
  //   }

  //   const make_cols = refstr => {
  //     let o = [],
  //       C = XLSX.utils.decode_range(refstr).e.c + 1;
  //     for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  //     return o;
  //   };

  String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
  };

  function filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    setFileValue(file);
  }

  useEffect(() => {
    readFile();
  }, [fileValue]);

  useEffect(() => {
    if (!data) return;
    console.log(JSON.stringify(data));
    console.log(data);
  }, [data]);

  function isEmptyObject(obj) {
    return !obj.firstName && !obj.lastName;
  }

  function readFile() {
    if (!fileValue) return;
    var f = fileValue;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      setData(convertToJson(data)); // shows data in json format
    };
    reader.readAsBinaryString(f);
  }

  function convertToJson(csv) {
    debugger
    let result = [];
    var lines = csv.split("\n");

    // var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      obj.firstTitle = obj.firstTitle?.replaceAll('"', '').replaceAll('הרר', 'הר"ר').replaceAll('הרהצ', 'הרה"צ').replaceAll('אדמור', 'אדמו"ר');
      obj.lastTitle = obj.lastTitle?.replaceAll('"', '').replaceAll('שליטא', 'שליט"א').replaceAll('היו', 'הי"ו');
      obj.firstName = obj.firstName?.replaceAll('""', "''").replaceAll('"', '');
      obj.address = obj.address?.replaceAll('"', '');

      if (['', 'הרב'].includes(obj.firstTitle)) obj.firstTitle = 'הר"ר';

      result.push(obj);
    }

    const filteredObjects = result.filter(obj => !isEmptyObject(obj));

    // חיבור המערכים של הקובץ החדש והדאטה הישן
    const combinedArray = [...filteredObjects, ...phonebookData];

    // סינון כפולים לפי שם פרטי ושם משפחה
    const uniqueArray = combinedArray.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.firstName === value.firstName && t.lastName === value.lastName
      ))
    );

    // מיון האובייקטים לפי שם משפחה ושם פרטי
    const sortedObjects = uniqueArray.sort((a, b) => {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });

    return sortedObjects;
  }

  return (
    <input type="file" onChange={filePathset} />
  )
}

