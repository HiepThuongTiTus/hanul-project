import React from 'react'
const AboutComponent =()=>{
   return(
         <div className="container" id="about">
            <div className="row">
              <div className="col-md-9">
              <h2 className="text1">GIỚI THIỆU</h2>
                <div className="card tt">
                        <a href="#"><img src="8.jpg" alt="Card image cap" height="250px;"/> </a>  
                        <p className="tt1"> 
                          Thầy Hoàng CLB Hanul Taekwondo
                        </p>
                </div>
                <div className="card tt">
                        <a href="#"><img src="9.jpg" alt="Card image cap" height="250px;"/> </a>  
                        <p className="tt1"> 
                          Thầy Hoàng CLB Hanul Taekwondo
                        </p>
                </div>
                <div className="card tt">
                        <a href="#"><img src="10.jpg" alt="Card image cap" height="250px;"/> </a>  
                        <p className="tt1"> 
                          Thầy Hoàng CLB Hanul Taekwondo
                        </p>
                </div>
              </div> 
              <div className="col-md-3">
                <h3 className="news text1">TIN TỨC</h3>
                <a href="#" className="neww"><img className="new1" src="trang.jpg" alt="Card image cap"/> Cuộc thi đai trắng<br/></a>
                <a href="#" className="neww"><img className="new1" src="vang.jpg" alt="Card image cap"/> Cuộc thi đai vàng<br/></a>
                <a href="#" className="neww"><img className="new1" src="xanh.jpg" alt="Card image cap"/> Cuộc thi vai xanh<br/></a>
                <a href="#" className="neww"><img className="new1" src="đỏ.jpg" alt="Card image cap"/> Cuộc thi vai đỏ<br/></a>
                <a href="#" className="neww"><img className="new1" src="den.jpg" alt="Card image cap"/> Cuộc thi vai đen</a>
            </div>
           </div>
        </div>
   )
}
export default React.memo(AboutComponent)