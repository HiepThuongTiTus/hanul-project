import React from "react";
import { Row, Col } from "antd";
import { TokenExpiredError } from "jsonwebtoken";
import { helpers } from "../helpers/common";
const HanulComponent = () => {
 let user = helpers.decryptToken()
  return (
    <Row>
      <Col span={12} offset={6} >    
          <h1 style={{textAlign:"center"}}>Welcome: {user.fullname} </h1>
      </Col>
    </Row>
  );
};
export default React.memo(HanulComponent);
