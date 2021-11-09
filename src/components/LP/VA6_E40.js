import React from "react";
import './VA6_E26.scss'


function VA6_E40({id, border, logo_black, title, PartNumber_code, Electrical, Optical, Warning, Cert}) {
  return (
    <section id={id}>
                <div id="VA6_E40_LP4_Output" className={border? "": "border"}>
                    <div id="VA6_E40_Title_Output" className="sub_VA6_E39">{title}</div>
                    <div className="sub_VA6_E39">Part# <strong>(de Pieza, <span>부품, 部品</span>)</strong></div>
                    <div id="VA6_E40_PartNumber_Output" className="sub_VA6 sub_insert">{PartNumber_code}</div>
                    <div className="sub_VA6_E39">Electrical Input: <strong>(Entrida de Electricidad, <span>정격입력, 電気入力</span>)</strong></div>
                    <div id="VA6_E40_Electrical_Output" className="sub_VA6 sub_insert">{Electrical}</div>
                    <div className="sub_VA6_E39">Optical Output: <strong>(Salida óptica, <span>광출력, 光出力</span>)</strong></div>
                    <div id="VA6_E40_Optical_Output" className="sub_VA6 sub_insert">{Optical}</div>
                </div>

            <div id="VA6_E40_LP5_Output" className={border? "": "border"}>
                    {Warning}
             </div>
            
       
            <div id="VA6_E40_LP6_Output" className={border? "": "border"}>
                <div className="E39_logo"><img src={logo_black} alt="UI Certification" /></div>
                <div id="VA6_E40_LP6_Input_Cert_2"><img src={Cert} alt="UI Certification" /></div>
                <div className="VA6_E39_Made_2">
                    中國製造<br /> 
                    中国制造
                </div>
                <div className="VA6_E39_Made">
                    Made In China<br />
                    In China hergestellt<br />
                    Fabriqué en Chine
                 
                </div>
            </div>
            {/* style={{width: 300px !important; margin-top: 2px;}} */}
            <div id="VA6_E40_LP7_Output" className={border? "": "border"}>
                <div className="E39_All_Address">
                    <div className="address">
                        FILAMENTO USA:
                        www.Filamento.com<br />
                        (+1) 408-475-0038<br />
                        3031 Tisch Way, 110 Plaza West, San Jose, CA, 95128, USA
                    </div>
                   
                </div>
            </div>

    </section>

   )   
  }

export default VA6_E40