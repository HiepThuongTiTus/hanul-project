import React, { useRef } from "react";
import { Image } from "antd";

const scrollToActivity = (ref) => window.scrollTo(2000, ref.current.offsetTop);

const DetailComponent = () => {
  return (
    <div>
      <section id="activate">
        <h2 class="textt">HOẠT ĐỘNG</h2>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <Image width={350} height={350} src="1.jpg" />
            </div>
            <div class="col-md-4">
              <Image width={350} height={350} src="2.jpg" />
            </div>
            <div class="col-md-4">
              <Image width={350} height={350} src="3.jpg" />
            </div>
            <div class="col-md-4">
              <Image width={350} height={350} src="10.jpg" />
            </div>
            <div class="col-md-4">
              <Image width={350} height={350} src="5.jpg" />
            </div>
            <div class="col-md-4">
              <Image width={350} height={350} src="12.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default React.memo(DetailComponent);
