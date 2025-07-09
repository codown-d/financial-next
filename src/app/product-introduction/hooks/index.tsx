import TzModal, { TzConfirm } from "@/components/TzModal";
import { DescriptionsProps, Form, FormInstance, message, Modal } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProductApplication from "../components/ProductApplication";
import ApplicationSuccess from "../components/ApplicationSuccess";
import ApplicationFail from "../components/ApplicationFail";
import { TzButton } from "@/components/TzButton";
import { productApply } from "@/fetch";
import ProductApplicationG from "../components/ProductApplicationG";
import { FinanceDataTypeEmu } from "@/fetch/definition";
import {
  ModalForm,
  ProFormDependency,
  ProFormGroup,
  ProFormInstance,
  ProFormItem,
  ProFormList,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
  StepsForm,
} from "@ant-design/pro-components";
import { extractUploadFiles } from "@/utils";
import { omit } from "lodash";
import {
  enterpriseList,
  fileList,
  guaranteeList,
  personalList,
} from "@/constant";
import modal from "antd/es/modal";

export default function useApplicationAction() {
  let [failVisible, setFailVisible] = useState(false);
  let [successVisible, setSuccessVisible] = useState(false);
  let [submitVisible, setSubmitVisible] = useState(false);
  let Submit = (props: {
    form: FormInstance<any>;
    type: string;
    product_id: any;
    product_type: any;
    callback?: (arg: any) => void;
  }) => {
    let { form, type, callback, product_id, product_type } = props;

    const formRef = useRef<ProFormInstance>();
    let [showFile, setShowFile] = useState(
      [
        FinanceDataTypeEmu.EquityFinancing,
        FinanceDataTypeEmu.FinanceGuarantee,
        FinanceDataTypeEmu.Microloans,
        FinanceDataTypeEmu.BankLoans,
      ].includes(product_type)
    );
    let [loading, setLoading] = useState(false);
    return (
      <>
        <StepsForm
          stepsRender={() => <></>}
          formRef={formRef}
          onFinish={async (values) => {
            setLoading(true);
            let attachmentVal = [
              "attachment_list",
              ...[
                ...enterpriseList,
                ...personalList,
                ...fileList,
                ...guaranteeList,
              ].map((item) => item.prop),
            ];
            const cleanedValues = extractUploadFiles(values, attachmentVal);
            let res = await productApply({
              product_id: product_id,
              ...cleanedValues,
              product_type,
            });
            setLoading(false);
            if (res.code == 200) {
              const filteredValues = omit(values, [
                "if_married",
                "file_type",
                ...attachmentVal,
              ]);
              callback?.(filteredValues);
              setSubmitVisible(false);
              formRef.current.resetFields();
              message.success("申请成功");
              return true;
            } else {
              return false;
            }
          }}
          submitter={{
            render: (props) => {
              if (props.step === 0) {
                return (
                  <TzButton
                  loading={loading}
                    type="primary"
                    onClick={() => {
                      let f = [
                        FinanceDataTypeEmu.FinanceGuarantee,
                        FinanceDataTypeEmu.Microloans,
                        FinanceDataTypeEmu.BankLoans,
                      ].includes(product_type);
                      if (f) {
                        modal.confirm({
                          content: "是否上传申请资料",
                          okText: "确认",
                          cancelText: "取消",
                          onOk() {
                            setShowFile(true);
                            setTimeout(() => {
                              props.onSubmit?.();
                            }, 300);
                          },
                          onCancel() {
                            setShowFile(false);
                            setTimeout(() => {
                              props.onSubmit?.();
                            }, 300);
                          },
                        });
                      } else {
                        if (loading) {
                          message.info("提示正在处理");
                        } else {
                          props.onSubmit?.();
                        }
                      }
                    }}
                  >
                    {showFile ? "下一步" : "提交申请"}
                  </TzButton>
                );
              }
              return [
                <TzButton key="gotoTwo" onClick={() => props.onPre?.()}>
                  上一步
                </TzButton>,
                <TzButton
                  loading={loading}
                  type="primary"
                  key="goToTree"
                  onClick={() => {
                    if (loading) {
                      message.info("提示正在处理");
                    } else {
                      props.onSubmit?.();
                    }
                  }}
                >
                  提交申请
                </TzButton>,
              ];
            },
          }}
          stepsFormRender={(dom, submitter) => {
            return (
              <Modal
                maskClosable={false}
                title={
                  <h2 className="text-center text-[36px] pt-[20px]">
                    业务申请
                  </h2>
                }
                width={700}
                onCancel={() => setSubmitVisible(false)}
                open={submitVisible}
                footer={submitter}
                destroyOnClose
              >
                {dom}
              </Modal>
            );
          }}
        >
          <StepsForm.StepForm name="step1">
            {product_type == FinanceDataTypeEmu.ElectronicGuarantee ? (
              <ProductApplicationG formRef={formRef} />
            ) : (
              <ProductApplication formRef={formRef} product_type={product_type}/>
            )}
          </StepsForm.StepForm>
          {showFile ? (
            <StepsForm.StepForm name="step2" grid>
              {product_type == FinanceDataTypeEmu.EquityFinancing ? (
                <>
                  <ProFormItem label="借款主体" style={{ marginBottom: 0 }}>
                    <ProFormGroup>
                      {fileList.map((item) => {
                        return (
                          <ProFormUploadButton
                            label={`${item.label}`}
                            key={item.prop}
                            rules={[
                              {
                                required: item.required,
                                message: `请上传${item.label}`,
                              },
                            ]}
                            title={`上传附件`}
                            name={item.prop}
                            addonAfter={
                              item.downloadUrl ? (
                                <a
                                  href={item.downloadUrl}
                                  className="text-[#3D5AF5]"
                                >
                                  下载模板
                                </a>
                              ) : null
                            }
                            max={1}
                            fieldProps={{
                              name: "image",
                              onChange(info) {
                                console.log(info);
                                if (info.file.status === "done") {
                                  message.success(
                                    info.file.response?.desc + "!"
                                  );
                                } else if (info.file.status === "error") {
                                  message.error(
                                    info.file.response?.desc + "123"
                                  );
                                }
                              },
                            }}
                            colProps={{ span: 12 }}
                            action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                          />
                        );
                      })}
                    </ProFormGroup>
                  </ProFormItem>
                  <ProFormItem label="担保主体" style={{ marginBottom: 0 }}>
                    <ProFormGroup>
                      {guaranteeList.map((item) => {
                        return (
                          <ProFormUploadButton
                            label={`${item.label}`}
                            key={item.prop}
                            colProps={{
                              span: 12,
                            }}
                            rules={[
                              {
                                required: item.required,
                                message: `请上传${item.label}`,
                              },
                            ]}
                            title={`上传附件`}
                            name={item.prop}
                            max={1}
                            fieldProps={{
                              name: "image",
                            }}
                            action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                          />
                        );
                      })}
                    </ProFormGroup>
                  </ProFormItem>
                  <ProFormList
                    name="attachment_list"
                    label="其他附件"
                    copyIconProps={false}
                    creatorButtonProps={{
                      creatorButtonText: "添加附件",
                    }}
                  >
                    <ProFormGroup>
                      <ProFormText
                        label="附件名称"
                        name={"attachment_name"}
                        rules={[{ required: true }]}
                        addonAfter={
                          <ProFormUploadButton
                            formItemProps={{ style: { marginBottom: 0 } }}
                            title={`上传附件`}
                            name={"attachment_url"}
                            max={1}
                            fieldProps={{
                              name: "image",
                            }}
                            action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                          />
                        }
                      />
                    </ProFormGroup>
                  </ProFormList>
                </>
              ) : [
                  FinanceDataTypeEmu.FinanceGuarantee,
                  FinanceDataTypeEmu.Microloans,
                  FinanceDataTypeEmu.BankLoans,
                ].includes(product_type) ? (
                <>
                  <ProFormSelect
                    label="附件类型"
                    name={"file_type"}
                    initialValue={"gr"}
                    fieldProps={{
                      options: [
                        { label: "个人", value: "gr" },
                        { label: "企业", value: "qy" },
                      ],
                    }}
                    colProps={{
                      span: 12,
                    }}
                  />
                  <ProFormDependency name={["file_type"]}>
                    {({ file_type }) => {
                      let arr =
                        file_type == "gr" ? personalList : enterpriseList;
                      return (
                        <ProFormGroup>
                          {arr.map((item, index) => {
                            return (
                              <ProFormUploadButton
                                label={`${item.label}`}
                                key={item.prop}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[
                                  {
                                    required: item.required,
                                    message: `请上传${item.label}`,
                                  },
                                ]}
                                title={`上传附件`}
                                name={item.prop}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                            );
                          })}
                        </ProFormGroup>
                      );
                    }}
                  </ProFormDependency>
                  <ProFormList
                    name="attachment_list"
                    label="其他附件"
                    copyIconProps={false}
                    creatorButtonProps={{
                      creatorButtonText: "添加附件",
                    }}
                  >
                    <ProFormGroup>
                      <ProFormText
                        label="附件名称"
                        name={"attachment_name"}
                        rules={[{ required: true }]}
                        addonAfter={
                          <ProFormUploadButton
                            formItemProps={{ style: { marginBottom: 0 } }}
                            title={`上传附件`}
                            name={"attachment_url"}
                            max={1}
                            fieldProps={{
                              name: "image",
                            }}
                            action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                          />
                        }
                      />
                    </ProFormGroup>
                  </ProFormList>
                </>
              ) : null}
            </StepsForm.StepForm>
          ) : null}
        </StepsForm>

        <TzModal
          maskClosable={false}
          closeIcon={false}
          width={620}
          open={false}
          title={
            <div className="text-center font-bold mb-[50px] text-2xl pt-10 text-gray-800  leading-[32px]">
              {type}
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
          okText={"提交申请"}
          onCancel={() => {
            setSubmitVisible(false);
          }}
          onOk={() => {
            return form
              .validateFields()
              .then((val) => {
                productApply({
                  product_id: product_id,
                  ...val,
                  product_type,
                }).then((res) => {
                  if (res.code == 200) {
                    callback?.(val);
                    setSubmitVisible(false);
                    form.resetFields();
                    message.success("申请成功");
                  }
                });
              })
              .catch();
          }}
        ></TzModal>
      </>
    );
  };
  let Success = (props: DescriptionsProps) => {
    let { items } = props;
    return (
      <TzModal
        maskClosable={false}
        closeIcon={false}
        width={620}
        open={successVisible}
        styles={{ content: { padding: "0px 0px 20px" } }}
        footer={
          <div className="flex items-center justify-center mt-[40px] mb-2">
            <TzButton
              shape={"round"}
              type={"primary"}
              style={{ minWidth: "120px" }}
              onClick={() => {
                setSuccessVisible(false);
              }}
            >
              关闭
            </TzButton>
          </div>
        }
      >
        <ApplicationSuccess items={items} />
      </TzModal>
    );
  };
  let Fail = () => {
    return (
      <TzModal
        width={620}
        closeIcon={false}
        open={failVisible}
        styles={{ content: { padding: "0px 0px 20px" } }}
        okText={"重新申请"}
        cancelText={"关闭"}
        maskClosable={false}
        onOk={() => {
          setFailVisible(false);
          setSubmitVisible(true);
        }}
        onCancel={() => {
          setFailVisible(false);
        }}
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
      >
        <ApplicationFail />
      </TzModal>
    );
  };
  return {
    Submit,
    setSubmitVisible,
    Success,
    setSuccessVisible,
    Fail,
    setFailVisible,
  };
}
