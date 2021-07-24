import React,{useRef}  from 'react'
const scrollToActivity = (ref) => window.scrollTo(2000, ref.current.offsetTop)  

const resgisterComponent =()=>{
   return(
     <div>
           <section>
               <img class="titleimg" src="2.jpg" alt="Hiep"/>
                    
               <div class="containerflex" title="container" data-toggle="tooltip" data-placement="top">
                    <div class="flexitem">
                         <form class="input-group1">
                               <img src="logo.jpg" class="imglogo text-center" alt="Hiep"/>
                               <img src="laco.png" class="imglogo text-center" alt="Hiep"/>
                              <h2 class="textlogin"> Đăng kí</h2>
                              <input type="text" class="input-field1" placeholder="User Id" required />
                              <input type="text" class="input-field1" placeholder="Enter Password" required />
                              <input type="email" class="input-field1" placeholder="Email" required />
                              <div class="gt">
                               <input class="times" type="date" id="ngaysinh"/>
                                <select id="gioitinh">
                                    <option value="nam">Nam</option>
                                    <option value="nu">Nữ</option>
                                </select>
                              </div>   

                              <button type="submit" class="submit-btn1">Register</button>
                         </form>
                    </div>
               </div>
          </section>
     </div>
   )
}
export default React.memo(resgisterComponent)