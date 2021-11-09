import React from "react";
import './VA6_E26.scss'


function VA6_E27({id, border, title, PartNumber_code, Electrical, Optical, Warning, Cert}) {
  return (
        <section id={id}>
                <div style={{height: 60}}>
                    <div id="VA6_E27_LP4_Output" className={border? "": "border"}>
                        <div id="VA6_E27_Title_Output" className="sub_VA6">{title}</div>
                        <div className="sub_VA6">Part# <strong>(Teile, Les pièces, <span>部品</span>)</strong></div>
                        <div id="VA6_E27_PartNumber_Output" className="sub_VA6 sub_insert">{PartNumber_code}</div>
                        <div className="sub_VA6">Electrical Input: <strong>(Elektrischer Anschluss, Entrée électrique, <span>電壓, 电压</span>)</strong></div>
                        <div id="VA6_E27_Electrical_Output" className="sub_VA6 sub_insert">{Electrical}</div>
                        <div className="sub_VA6">Optical Output: <strong>(Optische Daten, Sortie Optique, <span>光通量</span>)</strong></div>
                        <div id="VA6_E27_Optical_VA6_Output" className="sub_VA6 sub_insert">{Optical}</div>
                        <div id="VA6_Cert_Output"><img src={Cert} /></div>
                    </div>
               </div>
                <div id="VA6_E27_LP5_Output" className={border? "": "border"}>
                    <div className="Filamento_address">
                        FILAMENTO USA:<br />
                        www.Filamento.com <br />
                        (+1) 408-475-0038<br />
                        3031 Tisch Way, 110 Plaza<br />
                        West, San Jose, CA, 95128
                    </div>
                    <div className="VA6_E27_Made_Input">
                        Made In China<br /> 
                        In China hergestellt<br />
                        Fabriqué en Chine<br />
                        中國製造<br /> 
                        中国制造<br />
                    </div>
                </div>
                <div id="VA6_E27_LP6_Output" className={border? "": "border"}>{Warning}</div>
        </section>

   )   
  }

export default VA6_E27