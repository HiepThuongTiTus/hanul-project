import React  from 'react'
import { helpers } from '../helpers/common'
import { Layout, Menu } from "antd";

const HeaderComponent =()=>{
  const logoutMovies = () => {
    helpers.removeToken("Token_Login");
  };

   return(
     <div>
          <section class="nav-title">
            <div class="item t0">
              <i class="fa fa-map-marker" aria-hidden="true"></i> 08 Nguyễn Chánh - Đà Nẵng 
            </div>
            <div class="item t1">
                <i class="fa fa-phone t"></i> 0961547617
            </div>
         </section>
          <section>  
            <img class="titleanh" src="nen.jpg" alt="Hiep"/>
            <div class="topnav" id="myTopnav" >
              <a href="#home" class="tile">TAEKWONDO HANUL</a>
              <a href="#home">TRANG CHỦ</a>
              <a  href="#activate">HOẠT ĐỘNG</a>
              <a href="#about">GIỚI THIỆU</a>
              {helpers.getTokenLocalStorage() == null && (<a href="/login" > ĐĂNG NHẬP</a>)}

              {helpers.getTokenLocalStorage() !==null &&(<a href="javascript:void(0)" onClick={() => logoutMovies()} >ĐĂNG XUẤT</a>)}
              <a href="/register">ĐĂNG KÝ</a>
              <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
              </a>
            </div>
            <div class="container" >
              <div class="row">
                  <div class="col-lg-9">
                    <h3 class="titlechu">TAEKWONDO HANUL</h3>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center justify-content-center" >
                      <a href="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Fhanuldanangclub%2Fvideos%2F766767617306932%2F&show_text=false&width=560&t=0" class="venobox play-btn" data-vbtype="video" data-autoplay="true"></a>
                  </div>
              </div>
            </div>
            <div class="polaroid rotate_right">
              <img src="1.jpg" alt="Pulpit rock" width="100" height="120"/>
              <p class="caption">Talent</p>
            </div>

            <div class="polaroid rotate_left">
              <img src="2.jpg" alt="Monterosso al Mare" width="100" height="80"/>
              <p class="caption">Hanul Taekwondo</p>
            </div> 
           
          </section>
    </div>
   )
}
export default React.memo(HeaderComponent)