import React from 'react'
const FooterComponent =()=>{
   return(
     <div>
          <div class="footer-text bg-dark" style={{padding:"10px"}}>
          &copy; 2021 Copy right: {' '}
            <a href='thuhiep.com' rel='nofollow'>
              Thu Hiep
            </a>
         </div>
     </div>
   )
}
export default React.memo(FooterComponent)