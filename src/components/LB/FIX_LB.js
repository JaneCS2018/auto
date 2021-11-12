import React, {useEffect} from "react";
import './FIX_LB.scss'
import JsBarcode from "jsbarcode";



function FIX_LB({title, logo, BoxLabel_id, PartNumber, Product_code, Electrical, Optical, Barcode, Box_image}) {
    useEffect(() => {
        JsBarcode(".barcode").init()
       });

    return (
      <div id={BoxLabel_id}>
        <div id="box_label_all_fix">
        <div className="box_label" id="box_label_Spanish">     
            <div className="box_heading">
                <div id="box_title_fix1">{title}</div> 
                <div className="box_logo"><img src={logo} alt="logo"/></div>
                <div className="website">www.Filamento.com</div>
            </div>
        
                <div className="heading heading_fix">
                    <div className="sub_t">Part (<span>de Pieza</span>)#</div>
                    <div id="PartNumber_box_fix1" style={{paddingLeft: 5}}>{PartNumber}</div>
                    <div className="sub_t">Product Code (<span>Código de Producto</span>)</div>
                    <div id="Code_box_fix1" style={{paddingLeft: 5}}>{Product_code}</div>
                    <div className="Made_box">Made in China (<span>Hecho en China</span>)</div>
                </div>
                <div className="wrapper">
                    <div className="sec_1 sec_fix">
                        <div className="item sub_t fix">Quantity (<span>Cantidad</span>)<br />
                            <strong>1/Box</strong>
                        
                        </div>
                        <div className="item sub_t fix">Electrical Input (<span>Entrada de Electricidad</span>)<br />
                            <strong id="Electrical_box_fix1">{Electrical}</strong>
                        </div>
                        <div className="item sub_t fix">Optical Output (<span>Salida óptica</span>)<br />
                            <strong id="Optical_box_fix1">{Optical}</strong>
                        </div>  
                    </div>
                    <div className="sec_2"><img id="sec_fix1" src={Box_image} alt="box"  width="100px" /></div>  
                </div>
            <div className="footer" id='footer_fix1'>
                    <svg className="barcode"
                        jsbarcode-format="upc"
                        jsbarcode-value={Barcode}
                        jsbarcode-textmargin="0"
                        jsbarcode-fontoptions="bold">
                    </svg>

            </div>
        </div>

        <div>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

         {/* Box Label Korean/Japanese  */}
        <div className="box_label" id="box_label_Korea">     
            <div id="box_heading1">
                <div id="box_title_fix2">{title}</div> 
                <div className="box_logo"><img src={logo} alt="logo"/></div>
                <div className="website">www.Filamento.com</div>
            </div>
        
                <div className="heading heading_fix">
                    <div className="sub_t">Part (<span>부품/部品</span>)#</div>
                    <div id="PartNumber_box_fix2" style={{paddingLeft: 5}}>{PartNumber}</div>
                    <div className="sub_t">Product Code (<span>제품􏌩코드/製品コード</span>)</div>
                    <div id="Code_box_fix2" style={{paddingLeft: 5}}>{Product_code}</div>
                    <div className="Made_box">Made in China (<span>중국산/中国製</span>)</div>
                </div>
                <div className="wrapper">
                    <div className="sec_1 sec_fix">
                        <div className="item sub_t fix">Quantity (<span>수량/量</span>)<br />
                            <strong>1/Box</strong>
                        
                        </div>
                        <div className="item sub_t fix">Electrical Input (<span>정격입력/電気⼊⼒</span>)<br />
                            <strong id="Electrical_box_fix2">{Electrical}</strong>
                        </div>
                        <div className="item sub_t fix">Optical Output (<span>광출력/光出⼒</span>)<br />
                            <strong id="Optical_box_fix2">{Optical}</strong>
                        </div>  
                    </div>
                    <div className="sec_2"><img id="sec_fix2" src={Box_image} alt="box"  width="100px" /></div>  
                </div>
            <div className="footer" id='footer_fix2'>
                    <svg className="barcode"
                        jsbarcode-format="upc"
                        jsbarcode-value={Barcode}
                        jsbarcode-textmargin="0"
                        jsbarcode-fontoptions="bold">
                    </svg>
                    <div className="BoxLabel_Korean">
                    공급처 ㈜세미백아이엔씨 써비스센터 연락처제조자:<br />
                    불산 HuaQuan 전기 조명 CO., LTD. <br />
                    HU11458-18001A (안전인증번호) (+82) 031-591-318 <br />
                    </div> 

            </div>
        </div>
        
    </div>  
</div> 



    )
   
  }

export default FIX_LB


