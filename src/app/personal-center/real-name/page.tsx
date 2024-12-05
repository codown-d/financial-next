"use client";
import { TzForm, TzFormItem, TzInput } from "@/components";
import { TzButton } from "@/components/TzButton";
import TzCard from "@/components/TzCard";
import TzModal from "@/components/TzModal";
import TzNextImage from "@/components/TzNextImage";
import SendCodeBtn from "@/components/UI/login/components/SendCodeBtn";
import { userVerify } from "@/fetch";
import { useGlobalContext } from "@/hooks/GlobalContext";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { ConfigProvider, Form, FormInstance, message, Upload } from "antd";
import modal from "antd/es/modal";
import zhCN from "antd/locale/zh_CN";
import { useEffect, useState } from "react";

let RealNameModal = (props: { formIns: FormInstance<any> }) => {
  let { formIns } = props;
  return (
    <ConfigProvider locale={zhCN}>
      <TzForm
        form={formIns}
        colon={false}
        labelCol={{ flex: "160px" }}
        layout={"horizontal"}
      >
        <TzFormItem name={"send_type"} hidden initialValue={"real_name"}>
          <TzInput />
        </TzFormItem>
        <TzFormItem label="姓名" name={"name"} rules={[{ required: true }]}>
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <TzFormItem
          label="身份证号"
          name={"idcard"}
          rules={[{ required: true }]}
        >
          <TzInput placeholder="请输入" size={"large"} />
        </TzFormItem>
        <TzFormItem
          label="身份证正面照片"
          name={"idcard_img"}
          rules={[{ required: true,message:'请上传身份证正面照片'}]}
        >
          <Upload
            maxCount={1}
            action={`/api/upload/image`}
            listType="picture-card"
            onChange={({ fileList }) => {
              const uploadedFile = (
                Array.isArray(fileList) ? fileList : []
              ).find((file) => file.status === "done");
              if (uploadedFile && uploadedFile?.response) {
                if (uploadedFile?.response.code != 200) {
                  message.error({
                    content: "请上传身份证正面照片",
                  });
                  formIns.setFieldsValue({
                    idcard_img: undefined// 假设返回值中包含 url 字段
                  });
                  return;
                }
                formIns.setFieldsValue({
                  idcard_img: uploadedFile.response.file
                    ? [uploadedFile.response.file]
                    : undefined, // 假设返回值中包含 url 字段
                });
              }
            }}
          >
            <PlusOutlined />
          </Upload>
        </TzFormItem>

        <TzFormItem label="手机号" name={"phone"} rules={[{ required: true }]}>
          <TzInput placeholder="请输入" size={"large"} disabled />
        </TzFormItem>
        <div className="flex">
          <TzFormItem
            label="验证码"
            name={"verify_phone_code"}
            className="w-[70%]"
            rules={[{ required: true }]}
          >
            <TzInput placeholder="请输入" size={"large"} />
          </TzFormItem>
          <SendCodeBtn
            formIns={formIns}
            fields={["phone", "send_type"]}
            classNames="!mt-0"
          />
        </div>
      </TzForm>
    </ConfigProvider>
  );
};
export default function RealName() {
  let { userInfo } = useGlobalContext();
  let [formIns] = Form.useForm();
  let [submitVisible, setSubmitVisible] = useState(false);
  useEffect(() => {
    formIns.setFieldsValue({ phone: userInfo?.user_name });
  }, [userInfo]);
  return (
    <TzCard className="h-[738px]">
      <div className="text-[20px] mb-[26px]">实名认证</div>
      <div className={"relative w-[460px]"}>
        <TzNextImage
          className="mt-6"
          src={`/images/${userInfo?.verify_status != 3 ? "wsmrz" : "smrz"}.png`}
          width={460}
          height={0}
        />
        <TzButton
          size={"large"}
          className="border-0 hover:!text-[#FF9958]  bg-white-500 !absolute !text-[#FF9958] right-[56px] top-[60%]"
          shape={"round"}
          onClick={() => {
            setSubmitVisible(true);
          }}
        >
          {userInfo?.verify_status == 3 ? "查看认证" : "立即认证"}
        </TzButton>
      </div>
      <TzModal
        closeIcon={false}
        width={620}
        open={submitVisible}
        title={
          <div className="text-center font-bold mb-[20px] text-2xl pt-10 text-gray-800  leading-[32px]">
            实名认证
          </div>
        }
        okButtonProps={{
          shape: "round",
          style: { minWidth: "120px" },
        }}
        cancelButtonProps={{
          shape: "round",
          style: { minWidth: "120px" },
        }}
        footer={(_, { OkBtn, CancelBtn }) => (
          <div className="flex items-center justify-center mt-[40px] mb-2">
            <CancelBtn />
            <div className="ml-5">
              <OkBtn />
            </div>
          </div>
        )}
        okText={"提交"}
        onCancel={() => {
          setSubmitVisible(false);
        }}
        onOk={() => {
          return new Promise((resolve, reject) => {
            formIns
              .validateFields()
              .then((val) => {
                userVerify(val).then((res) => {
                  if (res.code == 200) {
                    resolve("");
                    message.success({
                      content: "认证成功",
                    });
                    setSubmitVisible(false);
                    formIns.resetFields();
                  } else {
                    reject();
                  }
                });
              })
              .catch(reject);
          });
        }}
      >
        <div className="pr-[40px]">
          <RealNameModal formIns={formIns} />
        </div>
      </TzModal>
    </TzCard>
  );
}
