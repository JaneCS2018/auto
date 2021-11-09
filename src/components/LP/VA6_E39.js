import React from "react";
import './VA6_E26.scss'


function VA6_E39({id, title, border, PartNumber_code, Electrical, Optical, Warning, Cert,  logo_black}) {
  return (
    <section id={id}>
                <div id="VA6_E39_LP1_Output" className={border? "": "border"}>
                    <div id="VA6_E39_Title_Output" className="sub_VA6_E39">{title}</div>
                    <div className="sub_VA6_E39">Part# <strong>(de Pieza, <span>부품, 部品</span>)</strong></div>
                    <div id="VA6_E39_PartNumber_Output" className="sub_VA6 sub_insert">{PartNumber_code}</div>
                    <div className="sub_VA6_E39">Electrical Input: <strong>(Entrida de Electricidad, <span>정격입력, 電気入力</span>)</strong></div>
                    <div id="VA6_E39_Electrical_Output" className="sub_VA6 sub_insert">{Electrical}</div>
                    <div className="sub_VA6_E39">Optical Output: <strong>(Salida óptica, <span>광출력, 光出力</span>)</strong></div>
                    <div id="VA6_E39_Optical_Output" className="sub_VA6 sub_insert">{Optical}</div>
                </div>
            <div id="VA6_E39_LP2_Output" className={border? "": "border"}>
               {Warning}
             </div>
            
            <div id="VA6_E39_LP3_Output" className={border? "": "border"}>
                <div className="E39_logo"><img src={logo_black}  alt="logo"/></div>
                <div id="VA6_E39_LP3_Input_Cert_2"><img src={Cert} alt="UI Certification"/></div>
                <div className="VA6_E39_Made">
                    Made In China<br />
                    Hecho en China<br />
                    중국산
                </div>
            </div>

            <div id="VA6_E39_LP4_Output" className={border? "": "border"}>
                <div className="E39_All_Address">
                    <div className="address">
                        FILAMENTO USA:
                        www.Filamento.com<br />
                        (+1) 408-475-0038<br />
                        3031 Tisch Way, 110 Plaza West, San Jose, CA, 95128, USA
                    </div>
                    <div className="address">
                        FILAMENTO Mexico:
                        Importado por services and ingenieria, LT, SC.
                        Direccion: Chatines 78 Cp: 02459 Col. Tezozomoc  (+52) 55 44261914
                        RFC: sil120301bc1 
                    </div>
                    <div className="address Korea_address">
                        FILAMENTO Korea: <span className="KJ_Fonts_address">공급처: ㈜세미백아이엔
                        씨​써비스센터 연락처 제조자:불산</span>HuaQuan
                        <span className="KJ_Fonts_address">전기조명</span>CO.,LTD.HU11458 -18001A<span className="KJ_Fonts_address">(안전인
                        증번호)</span><br />(+82) 031-591-318 LTD.
                    </div>
                </div>
            </div>
    </section>

   )   
  }

export default VA6_E39