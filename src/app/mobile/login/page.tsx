"use client"
import { Button, Form, Input, PasscodeInput } from "antd-mobile";

export default function login() {
  return (
    <>
    <div className="text-[24px] pl-8 font-bold mb-[64px]">
    欢迎登录<br/>
    广元市综合金融服务平台
    </div>
     <Form
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Item
          name='name'
          label='手机号'
        >
          <Input onChange={console.log} placeholder='请输入' />
        </Form.Item>
        <Form.Item
          name='name'
          label='密码'
        >
           <Input
            placeholder='请输入'
            type={ 'password'}
          />
        </Form.Item>
    
      </Form>
    </>
  );
}
