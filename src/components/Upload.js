import React, { useState } from "react";
import * as XLSX from "xlsx";
import Read from './Read'
import Label from './Label'
import BoxLabel from "./BoxLabel";
import Refresh from './Refresh';

import "./Upload.scss";

function UploadedInput() {
  const [items, setItems] = useState([]);
  const [info, setInfos] = useState([])
  const [label, setLabels] = useState([])
  const [lumen, setLumens] = useState([])
  const [isOpened, setIsOpened] = useState(false);
  const [isLabel, setIsLabel] = useState(false);


  const readExcel = (file) => {
    //Create TestData Promise
    const promise1 = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        //TestData
        const testData = wb.SheetNames[0];
        const ws = wb.Sheets[testData];
        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
   
    //Create Info Promise
    const promise2 = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        //Info
        const info = wb.SheetNames[1];
        const info_1 = wb.Sheets[info];
        const info_f = XLSX.utils.sheet_to_json(info_1);

        resolve(info_f);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

     //Create Label Promise
     const promise3 = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        //Info
        const label = wb.SheetNames[2];
        const label_1 = wb.Sheets[label];
        const label_f = XLSX.utils.sheet_to_json(label_1);

        resolve(label_f);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    

    //Create Lumen Promise
    const promise4 = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        //Lumen
        const lumen = wb.SheetNames[3];
        const lumen_1 = wb.Sheets[lumen];
        const lumen_f = XLSX.utils.sheet_to_json(lumen_1);

        resolve(lumen_f);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });



   
    Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
      setItems(values[0]);
      setInfos(values[1])
      setLabels(values[2])
      setLumens(values[3])
    });
  };

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
  
  function toggleLabel() {
    setIsLabel(wasOpened => !wasOpened);
  } 

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <button className="ui olive button" onClick={toggle}>Show Table</button>
        <button className="ui teal button" onClick={toggleLabel}>Show Labels</button>
        <button className="ui secondary violet button" onClick={Refresh}>Refresh</button>
      </div>
      <h4>Total Items: {items.length}</h4>
        <div className="content" id="content">
          {items.map((item, index)=>(<div key={index}>{item.PartNumber}</div>))}
        </div>
        <div>{isOpened && <Read items={items} info={info} label={label} lumen={lumen} />}</div>
        <div>{isLabel&&<Label items={items} info={info} label={label} lumen={lumen} />}</div>
        <div>{isLabel&&<BoxLabel items={items} info={info} label={label} lumen={lumen} />}</div>
        <br />
        <br />
    </div>
  );
}


export default UploadedInput;