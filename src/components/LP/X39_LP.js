import React from "react";
import './X39_LP.scss'


function X39_LP({border, id, title, PartNumber_code, Electrical, Optical, Warning, Cert, logo_black}) {
 
    return (
     <div className={border?"cert_img":"cert_img border"} id={id}>
        <div className="logo"><img src={logo_black} alt="Logo"/></div>
                <div id="cert"><img src={Cert}  width="100px" alt="UL Certification" /></div>
                <div id="Title_card" className="sub">{title}</div>
                <div className="sub">Part# <strong>(de Pieza, <span>부품, 部品</span>)</strong></div>
                <div id="PartNumber_card">{PartNumber_code}</div>
                <div className="sub">Electrical Input: <strong>(Entrada de Electricidad, <span>정격입력, 電気入力</span>)</strong></div>
                <div id="Electrical_card">{Electrical}</div>
                <div className="sub">Optical Input: <strong>(Salida óptica, <span>광출력, 光出力</span>)</strong></div>
                <div id="Optical_card">{Optical}</div>
                <div id="Warning_card">{Warning}</div>
                <div className="address_full">
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
                <div className="sub" id="china">Made In China Hecho en China <span className="KJ_Fonts_address">중국산</span></div>

     </div>
      

     
    )
   
  }

export default X39_LP


