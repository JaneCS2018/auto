import React from "react";
import './Label.scss'
import X39_LB from './LB/X39_LB'
import FIX_LB from './LB/FIX_LB'
import E40_LB from './LB/E40_LB'
import FEU_LB from './LB/FEU_LB'
import html2pdf from 'html2pdf.js'


function BoxLabel({items, info, label, lumen}) {
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
                  l.Electrical_Input_C, l.Optical_Output_C, l.Configuration_C, l.Size_C, l.Box_label_C_Cert, l.Filamento_Logo_black, l.Filamento_Logo_white
                ]
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
    
    const today= new Date();
    const year = today.getFullYear().toString().slice(-2)
    const date = year+zeroPad((today.getMonth()+1),2)+zeroPad(today.getDate(),2);
   
    const printBoxLabel=()=>{
    for(let i=0; i<res.length; i++){
      const PartNumber = res[i][0]
      const id=`LB1-${PartNumber}`
      const element = document.getElementById(id)
      const opt = {
        margin:       0.5,
        filename:     `LB1_${PartNumber}_${date}.pdf`,
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 5},
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
        };
      
        html2pdf().set(opt).from(element).save();
    }  
  }


    return( 
    <div>
         <br />
         <div className="nav">  
          <h4>Box Label Preview</h4>
          <button className="mini blue ui button download_LP" style={{marginLeft:10}} onClick={printBoxLabel}>Download</button>
          
        </div>

        <div className="ui relaxed grid" >
        {res.map((item, index)=>{
               const re = item[0].split('-')
               const title = item[1].toUpperCase()
               const PartNumber = item[0]
               const Product_code = item[2]
               const Electrical = item[6]
               const lumen = item[17]
               const cd = Math.round(lumen*0.551)
               const mo = re[1]
               const cct = parseInt(re[4])*100 
               const cri = re[3]!=='A'? parseInt(re[3])*10 : 90
               const Optical =  `${lumen} Lumens, ${cd} cd, CCT ${cct}K, CRI > ${cri}`
               const Barcode = item[3]
               const Box_image= item[9]
               const power = parseInt(re[2])
               const lw = Math.round(lumen/power)

               const E40_Electrical_c = item[10]
               const E40_Optical_c =  `${lumen} Lumens, ${lw} lm/W, ${cd} cd, CCT ${cct}K, CRI > ${cri}`
               const E40_Configuration_c=item[12]
               const E40_Dimension_c= item[13]
               const E40_cert_c = item[14]

               const logo=item[16]

               const BoxLabel_id = `LB1-${PartNumber}`
               
               console.log(item)

               if (mo==='X39' || mo==='E26'||mo==='E39'){
                   return <X39_LB className="two wide column" BoxLabel_id={BoxLabel_id} key={index} title={title}  mo={mo} PartNumber={PartNumber} Product_code={Product_code} Electrical={Electrical} Optical={Optical} Barcode={Barcode} Box_image={Box_image} logo={logo}/>
               }

               if(mo==='FIX'){
                return <FIX_LB className="two wide column" BoxLabel_id={BoxLabel_id} key={index} title={title}  mo={mo} PartNumber={PartNumber} Product_code={Product_code} Electrical={Electrical} Optical={Optical} Barcode={Barcode} Box_image={Box_image} logo={logo}/>
               }

              if (mo==='E40'||mo==='E27'){
                return <E40_LB  className="two wide column" BoxLabel_id={BoxLabel_id} key={index} E40_cert_c={E40_cert_c} E40_Electrical_c={E40_Electrical_c} E40_Optical_c={E40_Optical_c} E40_Configuration_c={E40_Configuration_c}
                E40_Dimension_c={E40_Dimension_c} title={title} mo={mo} PartNumber={PartNumber} Product_code={Product_code} Electrical={Electrical} Optical={Optical} Barcode={Barcode} Box_image={Box_image} logo={logo}/>
              }
             
              if(mo==='FEU'){
                return <FEU_LB  className="two wide column" BoxLabel_id={BoxLabel_id} key={index} E40_cert_c={E40_cert_c} E40_Electrical_c={E40_Electrical_c} E40_Optical_c={E40_Optical_c} E40_Configuration_c={E40_Configuration_c}
                E40_Dimension_c={E40_Dimension_c} title={title} mo={mo} PartNumber={PartNumber} Product_code={Product_code} Electrical={Electrical} Optical={Optical} Barcode={Barcode} Box_image={Box_image} logo={logo}/>
             
              }
              return 0
               
               })}

        </div>
         
    </div>)
  }

export default BoxLabel


