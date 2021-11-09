import React, {useEffect} from "react";
import './E40_LB.scss';
import JsBarcode from "jsbarcode";



function E40_LB({mo, logo, BoxLabel_id, title, PartNumber, Product_code, Electrical, Optical, Barcode, Box_image,  E40_cert_c, E40_Electrical_c, E40_Optical_c, E40_Configuration_c, E40_Dimension_c}) {
    
    const barcode= <svg className="barcode"
    jsbarcode-format="upc"
    jsbarcode-value={Barcode}
    jsbarcode-textmargin="0"
    jsbarcode-fontoptions="bold">
     </svg>

    useEffect(() => {
     JsBarcode(".barcode").init()
    });
    

    

    return (
      <div id={BoxLabel_id}>
        <div id="box_label_all_E40">
              {/* <button onClick={()=> }>Show Barcode</button> */}
            <div className="box_label" id="box_label_Spanish">     
                <div className="box_heading">
                    <div id="box_title_1_E40">{title}</div> 
                    <div className="box_logo"><img src={logo} alt="logo"/></div>
                    <div className="website">www.Filamento.com</div>
                </div>
            
                    <div className="heading">
                        <div className="sub_t">Part (<span>Teil, Partie</span>)#</div>
                        <div id="PartNumber_box1_E40" style={{paddingLeft: 5}}>{PartNumber}</div>
                        <div className="sub_t">Product Code (<span>Produktcode, Code produit</span>)</div>
                        <div id="Code_box_E40_C1" style={{paddingLeft: 5}}>{Product_code}</div>
                        <div className="Made_box">Made in China (<span>In China hergestellt, Fabriqué en Chine</span>)</div>
                    </div>
                    <div className="wrapper">
                        <div className="sec_1">
                            <div className="item sub_t">Quantity (<span>Menge, Quantité</span>)<br />
                                <strong>1/Box</strong>
                            
                            </div>
                            <div className="item sub_t sub_t_E40">Electrical Input (<span>Elektrischer Anschluss, Entrée électrique</span>)<br />
                                <strong id="Electrical_box1_E40">{Electrical}</strong>
                            </div>
                            <div className="item sub_t">Optical Output (<span>Optische Daten, Sortie Optique</span>)<br />
                                <strong id="Optical_box1_E40">{Optical}</strong>
                            </div>  
                            <div className="item sub_t">Configuration (<span>Ausrichtung, Configuration</span>)<br />
                                <strong>Vertical</strong>
                            </div>
                            <div className="item sub_t">Socket (<span>Sockel, Prise</span>)<br />
                                <strong id="Mounting_box1_E40">{mo}</strong>
                            </div>
                        </div>
                        <div className="sec_2"><img id="sec_2_E40" src={Box_image} alt="box_image" width="100px" /></div>  
                    </div>
                <div className="footer" id='footer1_E40'>
                   <div>{barcode}</div>

                </div>
            </div>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </div>

            {/* Chinese version */}
            <div className="box_label">     
                <div className="box_heading">
                    <div id="box_title_E40_C2">{title}</div> 
                    <div className="box_logo"><img src={logo} alt="Box_image"/></div>
                    <div className="website">www.Filamento.com</div>
                </div>
            
                    <div className="heading">
                        <div className="sub_t sub_t_E40">部品#</div>
                        <div id="PartNumber_box2_E40" style={{paddingLeft: 5}}>{PartNumber}</div>
                        <div className="sub_t sub_t_E40">產品號/产品号</div>
                        <div id="Code_box_E40_C2" style={{paddingLeft: 5}}>{Product_code}</div>
                        <div className="Made_box">中国製造</div>
                    </div>
                    <div className="wrapper">
                        <div className="sec_1">
                            <div className="item sub_t">數量/数量<br />
                                <strong>1/Box</strong>
                            
                            </div>
                            <div className="item sub_t">輸入電壓/输入电压<br />
                                <strong id="Electrical_box_E40_C2">{E40_Electrical_c}</strong>
                            </div>
                            <div className="item sub_t">光通量<br />
                                <strong id="Optical_box_E40_C2">{E40_Optical_c}</strong>
                            </div>  
                            <div className="item sub_t">配光型式,光束(角)度,相移因數,光學特性代碼<br />
                                <strong id="Config_E40_C2">{E40_Configuration_c}</strong>
                            </div>
                            <div className="item sub_t sub_E40_C">尺寸,燈帽規格,閃爍百分比,閃爍指數,光生物風險類別<br />
                                <strong id="Size_E40_C2">{E40_Dimension_c}</strong>
                            </div>
                        </div>
                        <div className="sec_2"><img id="sec_c_E402" src={Box_image} alt="Box_image" width="100px" /></div>  
                    </div>
                <div className="footer" id='footer_E40_C2'>
                    <div>{barcode}</div>
                    <img className="E40_cert_c" src={E40_cert_c} alt="E40_certification"  />
                    <div className="E40_supplier">
                        委製/進口商:英群企业股份有限公司, 地址:新北市汐止区新台<br />
                        五路1段98号20樓, 电话:02-26961888<br />
                        LED燈泡之重量明顯大於所替換之光源時，應留意所增加之重<br />
                        量可能降低某些燈具及燈座之機械穩定性，並可能損及LED燈<br />
                        泡與燈座之接觸性及固著性。
                    </div> 

                </div>
            </div>

        </div>

       
    </div>
     
    )
   
  }

export default E40_LB
