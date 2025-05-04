import TzModal, { TzConfirm } from "@/components/TzModal";
import { DescriptionsProps, Form, FormInstance, message } from "antd";
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
} from "@ant-design/pro-components";
import { extractUploadFiles } from "@/utils";
import { omit } from "lodash";

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
    let fileList = [
      {
        label: "企业简介",
        prop: "loan_company_profile",
        required: true,
      },
      {
        label: "公司章程",
        prop: "loan_articles",
        required: true,
      },
      {
        label: "营业执照正本",
        prop: "loan_license_original",
        required: true,
      },
      {
        label: "营业执照副本",
        prop: "loan_license_copy",
        required: true,
      },
      {
        label: "法定代表人身份证",
        prop: "loan_legal_id",
        required: true,
      },
      {
        label: "企业征信报告（近一月内）",
        prop: "loan_company_credit_report",
        required: true,
      },
      {
        label: "法定代表人征信报告（近一月内",
        prop: "loan_legal_credit_report",
        required: true,
      },
      {
        label: "经营场所权属（或租赁）证明",
        prop: "loan_address_proof",
        required: true,
      },
      {
        label: "企业到期银行贷款合同",
        prop: "loan_due_contract",
        required: true,
      },
      {
        label: "集团内部资金统借统还合同（若有）",
        prop: "loan_group_contract",
        required: false,
      },
      {
        label: "企业权力机构出具同意申请应急转贷资金的决议",
        prop: "loan_resolution",
        required: true,
      },
      {
        label: "上年度财务报表及报表附注",
        prop: "loan_report_last",
        required: true,
      },
      {
        label: "应急转贷资金申请表（模板附件1）",
        prop: "loan_form",
        required: true,
        downloadUrl: "https://admintest.gyzhjr.com/other/fj1.docx",
      },
      {
        label: "申请企业主要负责情况（模板附件2）",
        prop: "loan_leader_info",
        required: true,
        downloadUrl: "https://admintest.gyzhjr.com/other/fj2.docx",
      },
      {
        label: "申请企业主要资产况表（模板附件3）",
        prop: "loan_assets_info",
        required: true,
        downloadUrl: "https://admintest.gyzhjr.com/other/fj3.docx",
      },
      {
        label: "资料真实性承诺书（模板附件4）",
        prop: "loan_promise",
        required: true,
        downloadUrl: "https://admintest.gyzhjr.com/other/fj4.docx",
      },
      {
        label: "借款申请书(模板附件5)",
        prop: "loan_letter",
        required: true,
        downloadUrl: "https://admintest.gyzhjr.com/other/fj5.docx",
      },
    ];
    let guaranteeList = [
      {
        label: "担保企业简介",
        prop: "guarantee_company_profile",
        required: true,
      },
      {
        label: "担保企业章程",
        prop: "guarantee_articles",
        required: true,
      },
      {
        label: "担保企业营业执照正本",
        prop: "guarantee_license_original",
        required: true,
      },
      {
        label: "担保企业营业执照副本",
        prop: "guarantee_license_copy",
        required: true,
      },
      {
        label: "担保企业法定代表人身份证",
        prop: "guarantee_legal_id",
        required: true,
      },
      {
        label: "担保企业法定代表人简历",
        prop: "guarantee_legal_resume",
        required: true,
      },
      {
        label: "担保企业企业征信报告（近一月内）",
        prop: "guarantee_credit_report",
        required: true,
      },
    ];
    let enterpriseList = [
      {
        label: "企业简介",
        prop: "enterprise_profile",
        required: true,
      },
      {
        label: "公司章程",
        prop: "enterprise_articles",
        required: true,
      },
      {
        label: "营业执照",
        prop: "enterprise_business_license",
        required: true,
      },
      {
        label: "法定代表人身份证",
        prop: "enterprise_legal_id",
        required: true,
      },
      {
        label: "权利机构决议",
        prop: "enterprise_authority_resolution",
        required: true,
      },
      {
        label: "银行流水",
        prop: "enterprise_bank_statement",
        required: true,
      },
      {
        label: "财务报告",
        prop: "enterprise_financial_report",
        required: true,
      },
      {
        label: "近期企业征信报告",
        prop: "enterprise_credit_report",
        required: true,
      },
      {
        label: "近期法定代表人征信报告",
        prop: "enterprise_legal_credit",
        required: true,
      },
      {
        label: "抵押物资料",
        prop: "enterprise_collateral",
        required: false,
      },
      {
        label: "经营合同",
        prop: "enterprise_contract",
        required: true,
      },
    ];
    let personalList = [
      {
        label: "情况简介",
        prop: "personal_profile",
        required: true,
      },
      {
        label: "借款人身份证",
        prop: "personal_legal_id",
        required: true,
      },
      {
        label: "配偶身份证（若有）",
        prop: "personal_spouse_id",
        required: true,
      },
      {
        label: "借款人户口簿",
        prop: "personal_household_register",
        required: true,
      },
      {
        label: "配偶户口簿",
        prop: "personal_spouse_household",
        required: true,
      },
      {
        label: "结婚情况证明文件",
        prop: "personal_marriage_proof",
        required: false,
      },
      {
        label: "征信报告",
        prop: "personal_credit_report",
        required: true,
      },
      {
        label: "银行流水",
        prop: "personal_bank_statement",
        required: true,
      },
      {
        label: "抵押物资料（若有）",
        prop: "personal_collateral",
        required: false,
      },
      {
        label: "经营资料",
        prop: "personal_business_info",
        required: false,
      },
    ];
    const formRef = useRef<ProFormInstance>();
    return (
      <>
        <ModalForm
          width={900}
          title="业务申请"
          formRef={formRef}
          modalProps={{
            destroyOnClose: true,
            onCancel: () => setSubmitVisible(false),
          }}
          open={submitVisible}
          onFinish={async (values) => {
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
            await productApply({
              product_id: product_id,
              ...cleanedValues,
              product_type,
            }).then((res) => {
              if (res.code == 200) {
                const filteredValues = omit(values, ['if_married',...attachmentVal]);
                callback?.(filteredValues);
                setSubmitVisible(false);
                formRef.current.resetFields();
                message.success("申请成功");
              }
            });
            return true;
          }}
          grid={true}
        >
          {product_type == FinanceDataTypeEmu.ElectronicGuarantee ? (
            <ProductApplicationG formIns={form} />
          ) : (
            <ProductApplication formRef={formRef} />
          )}
          {product_type == FinanceDataTypeEmu.EquityFinancing ? (
            <>
              <ProFormItem label="借款主体" style={{ marginBottom: 0 }}>
                <ProFormGroup>
                  {fileList.map((item) => {
                    return (
                      <ProFormUploadButton
                        label={`${item.label}`}
                        key={item.prop}
                        colProps={{
                          span: 12,
                        }}
                        rules={[{ required: !item.required }]}
                        title={`${item.label}`}
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
                        }}
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
                        rules={[{ required: !item.required }]}
                        title={`${item.label}`}
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
            </>
          ) : [
              FinanceDataTypeEmu.FinanceGuarantee,
              FinanceDataTypeEmu.Microloans,
              FinanceDataTypeEmu.BankLoans,
            ].includes(product_type) ? (
            <>
              <ProFormDependency name={["verify_type"]}>
                {({ verify_type }) => {
                  return verify_type == 1||verify_type == 2?(
                    <>
                      <ProFormItem
                        label={verify_type == 1 ? "个人类用户" : "企业用户"}
                        style={{ marginBottom: 0 }}
                      >
                        <ProFormGroup>
                          {verify_type == 1 ? (
                            <>
                              <ProFormUploadButton
                                label={"情况简介"}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[{ required: true }]}
                                title={"情况简介"}
                                name={"personal_profile"}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                              <ProFormUploadButton
                                label={"借款人身份证"}
                                title={"借款人身份证"}
                                name={"personal_legal_id"}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[{ required: true }]}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                              <ProFormSelect
                                label="婚姻状况"
                                name={"if_married"}
                                rules={[{ required: true }]}
                                valueEnum={{
                                  1: { text: "已婚" },
                                  2: { text: "未婚" },
                                }}
                                colProps={{
                                  span: 12,
                                }}
                              />
                              <ProFormDependency name={["if_married"]}>
                                {({ if_married }) => {
                                  return if_married == 1 ? (
                                    <>
                                      <ProFormUploadButton
                                        label={"配偶身份证"}
                                        title={"配偶身份证"}
                                        name={"personal_spouse_id"}
                                        colProps={{
                                          span: 12,
                                        }}
                                        rules={[{ required: true }]}
                                        max={1}
                                        fieldProps={{
                                          name: "image",
                                        }}
                                        action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                                      />
                                    </>
                                  ) : null;
                                }}
                              </ProFormDependency>
                              <ProFormUploadButton
                                label={"借款人户口簿"}
                                title={"借款人户口簿"}
                                name={"personal_household_register"}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[{ required: true }]}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                              <ProFormDependency name={["if_married"]}>
                                {({ if_married }) => {
                                  return if_married == 1 ? (
                                    <>
                                      <ProFormUploadButton
                                        label={"配偶户口簿"}
                                        title={"配偶户口簿"}
                                        name={"personal_spouse_household"}
                                        colProps={{
                                          span: 12,
                                        }}
                                        rules={[{ required: true }]}
                                        max={1}
                                        fieldProps={{
                                          name: "image",
                                        }}
                                        action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                                      />
                                      <ProFormUploadButton
                                        label={"结婚情况证明文件"}
                                        title={"结婚情况证明文件"}
                                        name={"personal_marriage_proof"}
                                        colProps={{
                                          span: 12,
                                        }}
                                        rules={[{ required: true }]}
                                        max={1}
                                        fieldProps={{
                                          name: "image",
                                        }}
                                        action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                                      />
                                    </>
                                  ) : null;
                                }}
                              </ProFormDependency>
                              <ProFormUploadButton
                                label={"征信报告"}
                                title={"征信报告"}
                                name={"personal_credit_report"}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[{ required: true }]}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                              <ProFormUploadButton
                                label={"银行流水"}
                                title={"银行流水"}
                                name={"personal_bank_statement"}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[{ required: true }]}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                              <ProFormUploadButton
                                label={"抵押物资料（若有）"}
                                title={"抵押物资料"}
                                name={"personal_collateral"}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[{ required: false }]}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                              <ProFormUploadButton
                                label={"经营资料"}
                                title={"经营资料"}
                                name={"personal_business_info"}
                                colProps={{
                                  span: 12,
                                }}
                                rules={[{ required: false }]}
                                max={1}
                                fieldProps={{
                                  name: "image",
                                }}
                                action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                              />
                            </>
                          ) : (
                            enterpriseList.map((item, index) => {
                              return (
                                <>
                                  <ProFormUploadButton
                                    label={`${item.label}`}
                                    key={item.prop}
                                    colProps={{
                                      span: 12,
                                    }}
                                    rules={[{ required: !item.required }]}
                                    title={`${item.label}`}
                                    name={item.prop}
                                    max={1}
                                    fieldProps={{
                                      name: "image",
                                    }}
                                    action={`${process.env.NEXT_PUBLIC_API_URL}upload/image`}
                                  />
                                </>
                              );
                            })
                          )}
                        </ProFormGroup>
                      </ProFormItem>
                    </>
                  ):null
                }}
              </ProFormDependency>
              <ProFormList
                name="attachment_list"
                label="其他附件"
                copyIconProps={false}
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
        </ModalForm>
        <TzModal
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
