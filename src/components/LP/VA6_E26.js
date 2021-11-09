import React from "react";
import './VA6_E26.scss'


function VA6_E26({id, border, title, PartNumber_code, Electrical, Optical, Warning, Cert}) {
  return (
    <section id={id}>
    <div style={{height: 60}}>
        <div id="VA6_E26_LP1_Output" className={border? "": "border"}>
            <div id="VA6_E26_Title_Output" className="sub_VA6">{title}</div>
            <div className="sub_VA6">Part# <strong>(de Pieza, <span>부품, 部品</span>)</strong></div>
            <div id="VA6_E26_PartNumber_Output" className="sub_VA6 sub_insert">{PartNumber_code}</div>
            <div className="sub_VA6">Electrical Input: <strong>(Entrida de Electricidad, <span>정격입력, 電気入力</span>)</strong></div>
            <div id="VA6_E26_Electrical_Output" className="sub_VA6 sub_insert">{Electrical}</div>
            <div className="sub_VA6">Optical Output: <strong>(Salida óptica, <span>광출력, 光出力</span>)</strong></div>
            <div id="VA6_E26_Optical_Output" className="sub_VA6 sub_insert">{Optical}</div>
            <div id="VA6_E26_Cert_Output"><img src={Cert} /></div>
        </div>
   </div>


        <div className={border?"VA6_E26_LP2_Output":"VA6_E26_LP2_Output border"}>
            <div className="All_address"> 
             <div>
                 FILAMENTO USA:
                 www.Filamento.com<br />
                 (+1) 408-475-0038<br />
                 3031 Tisch Way, 110 Plaza West, San Jose, CA, 95128, USA
             </div>
             <div>
                 FILAMENTO Mexico:
                 Importado por services and ingenieria, LT, SC.
                 Direccion: Chatines 78 Cp: 02459 Col. Tezozomoc  (+52) 55 44261914
                 RFC: sil120301bc1 
             </div>
             <div>
                 FILAMENTO Korea: <span className="KJ_Fonts_address">공급처: ㈜세미백아이엔
                     씨​써비스센터 연락처 제조자:불산</span>HuaQuan
                     <span className="KJ_Fonts_address">전기조명</span>CO.,LTD.HU11458 -18001A<span className="KJ_Fonts_address">(안전인
                     증번호)</span> <br />(+82) 031-591-318 LTD.
             </div>
            </div>
             <div className="E26_Made">Made In China Hecho en China <span className="KJ_Fonts_address">중국산</span></div>
         </div>
  
    
    <div id="VA6_E26_LP3_Output" className={border? "": "border"}>{Warning}</div>
</section>

   )   
  }

export default VA6_E26