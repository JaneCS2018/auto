import React from "react";
import './Read.scss'


function Read({items, info, label, lumen}) {
    let res=[]
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    for(let i=0; i<items.length; i++){
              for (let j=0; j<info.length; j++){
                  if(items[i].PartNumber===info[j].PartNumber){
                         res.push([items[i].PartNumber, info[j].Title, zeroPad(info[j].Code, 5), info[j].Barcode])
                  }
              }
            }


    for (let i=0; i<res.length; i++){
        let arr = res[i][0].split('-')
        const arr_fa = arr[0]
        const arr_mo = arr[1]
        const arr_po = parseInt(arr[2],10)
        const arr_dri = arr[5]
        const arr_cct = parseInt(arr[4],10)
        const arr_cri = parseInt(arr[3],10)
        for (let j=0; j<label.length; j++){
            const l = label[j]
            const fa = l.Family
            const mo = l.Mounting
            const po = l.Power
            const dri = l.Driver

            if(arr_fa===fa && arr_mo===mo && arr_po===po && arr_dri===dri){
                const re= [l.Warning, l.Warning2,l.Electrical_Input, l.Certification, l.Certification2, l.Box_label_img, 
                  l.Electrical_Input_C, l.Optical_Output_C, l.Configuration_C, l.Size_C, l.Box_label_C_Cert]
                res[i]=res[i].concat(re)
            }
        }
        for (let k=0; k<lumen.length; k++){
          const lu = lumen[k]
          const fa = lu.Family
          const po = lu.Power
          const cct = lu.CCT
          const cri = lu.CRI
          const lu_res = lu.Lumen

          if(arr_fa===fa && arr_po===po && arr_cct===cct && arr_cri===cri){
              res[i]=res[i].concat(lu_res)
          }
      }
    }
    
 
    return( 
    <div>
         <br />
        <h4>Label Information</h4>
        <table className="ui celled table">
          <thead>
            <tr><th>Index</th>
            <th>PartNumber</th>
            <th>Title</th>
            <th className="collapsing">Product Code</th>
            <th colSpan="4">Electrical Input</th>
            <th colSpan="3">Optical Output</th>
            <th>Warning</th>
            <th>Certification</th>
          </tr></thead>
          <tbody>
            {res.map((item, index)=>{
               const re = item[0].split('-')
               const cct = parseInt(re[4])*100 
               const cri = re[3]!=='A'? parseInt(re[3])*10 : 90

              return(
                <tr key={index}>
                  <td data-label="Index">{index+1}</td>
                  <td data-label="PartNumber" className="collapsing">{item[0]}</td>
                  <td data-label="Title" className="collapsing center aligned">{item[1]}</td>
                  <td data-label="Product_Code">{item[2]}</td>
                  <td data-label="Electrical" colSpan="4">{item[6]}</td>
                  <td data-label="Optical" colSpan="3">{`${item[15]} Lumens, ${Math.round(item[15]*0.551)} cd, CCT ${cct}K, CRI>${cri}`}</td>
                  <td data-label="Warning">{item[4]+item[5]}</td>
                  <td data-label="Certification">
                       <img src={item[8]} width={"200"} alt="UL Certification"/>
                   </td>
              </tr>

            )})}
            
          </tbody>
        </table>
        <br />
    </div>)
  }

export default Read


