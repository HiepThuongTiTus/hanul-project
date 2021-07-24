
import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { api } from "../services/api";
import { helpers } from "../helpers/common";
import { useHistory } from "react-router";
const Login = () => {
  const history = useHistory()
  const [ErrorLogin, setErrorLogin] = React.useState(null);
  const onFinish = (values) => {
    console.log(values)
    let token = api.checkLogin(values.username, values.password);

    if (token !== null) {
      helpers.saveTokenToLocalStorage(token);
    
      if(values.remember)
      {
        helpers.savePasswordToLocal();
      }
      else{
        helpers.removePasswordTocal();
      }
      setErrorLogin(null)
      history.push("/hanul")
    }else
    {
      setErrorLogin("ERROR LOGIN")
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <img class="titleimg" src="2.jpg" alt="Hiep"/>
        <div class="containerflex" title="container" data-toggle="tooltip" data-placement="top">
        <div class="flexitem">
            <Row class="input-group">
              <Col span={12} offset={6}>
                <img src="logo.jpg" class="imglogo text-center" alt="Hiep"/>
                <img src="laco.png" class="imglogo text-center" alt="Hiep"/>
              </Col> 
               <h2 class="textlogin"> Đăng nhập </h2>
            <Col span={20} offset={2}>
            {ErrorLogin !== null && ( <h1
              style={{textAlign:"center",}}
            ><p style={{color:'red'}}>{ErrorLogin}</p></h1>)}
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: false,
                  username:
                   helpers.getPasswordLogin() !==null 
                  ? helpers.getPasswordLogin().user : "",
                  password: 
                  helpers.getPasswordLogin() !==null
                  ? helpers.getPasswordLogin().password : "",
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Login);
