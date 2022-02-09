import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import XLSX from "xlsx";

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
    
    String.prototype.splice = function(idx, rem, str) {
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

      function readFile() {
        if(!fileValue) return;
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
        var lines = csv.split("\n");
    
        var result = [];
        var headers = lines[0].split(",");
    
        for (var i = 1; i < lines.length; i++) {
          var obj = {};
          var currentline = lines[i].split(",");
    
          for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
          obj.lastTitle = obj.lastTitle?.replaceAll('"', '').splice(-1, 0, "''");
          obj.firstTitle = obj.firstTitle?.replaceAll('"', '').splice(-1, 0, "''");
          obj.address = obj.address?.replaceAll('"', '');
          result.push(obj);
        }
    
        //return result; //JavaScript object
        return result; //JSON
      }

    return(
        <input type="file" onChange={filePathset}/>
    )
}