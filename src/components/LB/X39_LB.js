import React from "react";
import './X39_LB.scss'
import JsBarcode from "jsbarcode";



function X39_LB({mo,logo,title, BoxLabel_id, PartNumber, Product_code, Electrical, Optical, Barcode, Box_image}) {
    let socket
    if(mo==='X39'){
        socket='EX39'
    }
    if(mo==='E39'){
        socket='E39'
    }
    if(mo==='E26'){
        socket='E26'
    }

    JsBarcode(".barcode").init();

    return (
    <div id={BoxLabel_id}>    
     <div id="box_label_all">
         {/* Label Spanish */}
         <div className="box_label" id="box_label_Spanish">     
                <div className="box_heading">
                    <div id="box_title_1">{title}</div> 
                    <div className="box_logo"><img src={logo} alt="Logo" /></div>
                    <div className="website">www.Filamento.com</div>
                </div>
            
                    <div className="heading">
                        <div className="sub_t">Part (<span>de Pieza</span>)#</div>
                        <div id="PartNumber_box1"  style={{paddingLeft: 5}}>{PartNumber}</div>
                        <div className="sub_t">Product Code (<span>Código de Producto</span>)</div>
                        <div id="Code_box1"  style={{paddingLeft: 5}}>{Product_code}</div>
                        <div className="Made_box">Made in China (<span>Hecho en China</span>)</div>
                    </div>
                    <div className="wrapper">
                        <div className="sec_1">
                            <div className="item sub_t">Quantity (<span>Cantidad</span>)<br />
                                <strong>1/Box</strong>
                            
                            </div>
                            <div className="item sub_t">Electrical Input (<span>Entrada de Electricidad</span>)<br />
                                <strong id="Electrical_box1">{Electrical}</strong>
                            </div>
                            <div className="item sub_t">Optical Output (<span>Salida óptica</span>)<br />
                                <strong id="Optical_box1">{Optical}</strong>
                            </div>  
                            <div className="item sub_t">Configuration (<span>Configuración</span>)<br />
                                <strong>Vertical</strong>
                            </div>
                            <div className="item sub_t">Socket (<span>Enchufe</span>)<br />
                                <strong id="Mounting_box1">{socket}</strong>
                            </div>
                        </div>
                        <div className="sec_2"><img id="sec_3" src={Box_image} alt="Box_image"  width="100px" /></div>  
                    </div>
                <div className="footer" id='footer1'>
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

            <div className="box_label" id="box_label_Korea">     
                <div id="box_heading1">
                    <div id="box_title_2">{title}</div> 
                    <div className="box_logo"><img src={logo} alt="Logo" /></div>
                    <div className="website">www.Filamento.com</div>
                </div>
            
                    <div className="heading">
                        <div className="sub_t">Part (<span>부품/部品</span>)#</div>
                        <div id="PartNumber_box2"  style={{paddingLeft: 5}}>{PartNumber}</div>
                        <div className="sub_t">Product Code (<span>제품􏌩코드/製品コード</span>)</div>
                        <div id="Code_box2" style={{paddingLeft: 5}}>{Product_code}</div>
                        <div className="Made_box">Made in China (<span>중국산/中国製</span>)</div>
                    </div>
                    <div className="wrapper">
                        <div className="sec_1">
                            <div className="item sub_t">Quantity (<span>수량/量</span>)<br />
                                <strong>1/Box</strong>
                            
                            </div>
                            <div className="item sub_t">Electrical Input (<span>정격입력/電気⼊⼒</span>)<br />
                                <strong id="Electrical_box2">{Electrical}</strong>
                            </div>
                            <div className="item sub_t">Optical Output (<span>광출력/光出⼒</span>)<br />
                                <strong id="Optical_box2">{Optical}</strong>
                            </div>  
                            <div className="item sub_t">Configuration (<span>구성/構成</span>)<br />
                                <strong>Vertical</strong>
                            </div>
                            <div className="item sub_t">Socket (<span>소켓/ソケット</span>)<br />
                                <strong id="Mounting_box2">{socket}</strong>
                            </div>
                        </div>
                        <div className="sec_2"><img id="sec_3" src={Box_image} alt="Box_image"  width="100px" /></div>  
                    </div>
                <div className="footer" id='footer2'>
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

export default X39_LB


