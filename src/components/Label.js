import React, {useState} from "react";
import './Label.scss'
import X39_LP from './LP/X39_LP'
import E40_LP from './LP/E40_LP'
import VA6_E26 from "./LP/VA6_E26";
import VA6_E27 from "./LP/VA6_E27";
import VA6_E39 from "./LP/VA6_E39";
import VA6_E40 from "./LP/VA6_E40";
import html2pdf from 'html2pdf.js'

function Label({items, info, label, lumen}) {
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
                  l.Electrical_Input_C, l.Optical_Output_C, l.Configuration_C, l.Size_C, l.Box_label_C_Cert, l.Filamento_Logo_black, l.Filamento_Logo_white]
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

    //Date
    const today= new Date();
    const year = today.getFullYear().toString().slice(-2)
    const date = year+zeroPad((today.getMonth()+1),2)+zeroPad(today.getDate(),2);
   
    const print=()=>{
    for(let i=0; i<res.length; i++){
      const PartNumber = res[i][0]
      const element = document.getElementById(PartNumber)
      const opt = {
        margin:       0.5,
        filename:     `LP1_${PartNumber}_${date}.pdf`,
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 15},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
      
        html2pdf().set(opt).from(element).save();
    }  
  }
     
  const [border, setBorder] = useState(false);

  const border_handle=()=>{
      setBorder(!border)
  }

  console.log(res)
      
    return( 
    <div>
         <br />
       <div className="nav">  
        <h4>Product Label Preview</h4>
        <button className="mini green ui button download_LP" style={{marginLeft:10}} onClick={border_handle}>Border</button>
        <button className="mini blue ui button download_LP" style={{marginLeft:1}} onClick={print}>Download</button>
        
        </div>
        <div className="ui grid">
        {res.map((item, index)=>{
               const re = item[0].split('-')
               const title = item[1].toUpperCase()
               const PartNumber_code = item[0]+ `(${item[2]})`
               const Electrical = item[6]
               const lumen = item[17]
               const cd = Math.round(lumen*0.551)
               const fa = re[0]
               const mo = re[1]
               const cct = parseInt(re[4])*100 
               const cri = re[3]!=='A'? parseInt(re[3])*10 : 90
               const Optical =  `${lumen} Lumens, ${cd} cd, CCT ${cct}K, CRI > ${cri}`
               const Warning = item[4]+item[5]
               const Cert = item[8]
               const logo_black = item[15]
               const idName=item[0]

               if(fa==='VA6' && mo==='E26'){
                  return <VA6_E26 id={idName} className="four wide column" border={border} key={index} title={title} PartNumber_code={PartNumber_code} Electrical={Electrical} Optical={Optical} Warning={Warning} Cert={Cert} logo_black={logo_black}/>
               }

               if(fa==='VA6' && mo==='E27'){
                return <VA6_E27 id={idName} className="four wide column" border={border} key={index} title={title} PartNumber_code={PartNumber_code} Electrical={Electrical} Optical={Optical} Warning={Warning} Cert={Cert} logo_black={logo_black}/>
              }

              if(fa==='VA6' && mo==='E39'){
                return <VA6_E39 id={idName} className="four wide column" border={border} key={index} title={title} PartNumber_code={PartNumber_code} Electrical={Electrical} Optical={Optical} Warning={Warning} Cert={Cert} logo_black={logo_black}/>
              }
              
              if(fa==='VA6' && mo==='E40'){
                return <VA6_E40 id={idName} className="four wide column" border={border} key={index} title={title} PartNumber_code={PartNumber_code} Electrical={Electrical} Optical={Optical} Warning={Warning} Cert={Cert} logo_black={logo_black}/>
              }

               
               if (mo==='X39'|| mo==='FIX'){
                   return <X39_LP id={idName} className="four wide column" border={border} key={index} title={title} PartNumber_code={PartNumber_code} Electrical={Electrical} Optical={Optical} Warning={Warning} Cert={Cert} logo_black={logo_black}/>
                      
               }

              if (mo==='E40'|| mo==='FEU'){
                return  <E40_LP id={idName} className="four wide column"  border={border} key={index} title={title} PartNumber_code={PartNumber_code} Electrical={Electrical} Optical={Optical} Warning={Warning} Cert={Cert} logo_black={logo_black}/>
             
                }

              return 0
               })}

        </div>
         
        <br />
    </div>)
  }

export default Label


