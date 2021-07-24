import React from 'react'
const VideoComponent =()=>{
   return(
       <div>
            <h3 class="text1"> VIDEO </h3>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <iframe src="https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2F100006113465295%2Fvideos%2F2743616872518735%2F&show_text=false&width=560&t=0" width="500" height="300"scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"/>
                        </div>
                        <div class="col-md-6">
                            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100006113465295%2Fvideos%2F2743616055852150%2F&show_text=false&width=560&t=0" width="500" height="300"scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" />
                        </div>
                    </div>
               </div>                           
       </div>
 )
}
export default React.memo(VideoComponent)