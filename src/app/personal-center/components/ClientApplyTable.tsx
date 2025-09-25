"use client";
import { applyList, productApply } from "@/fetch";
import {
  ActionType,
  DrawerForm,
  ModalForm,
  ProColumns,
  ProDescriptions,
  ProFormDependency,
  ProFormGroup,
  ProFormItem,
  ProFormList,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
  ProTable,
} from "@ant-design/pro-components";
import { action_status_filter, data_type, purpose, term } from "@/constant";
import { Button, Form, Image, message } from "antd";
import { FinanceDataTypeEmu } from "@/fetch/definition";
import {
  enterpriseList,
  fileList,
  guaranteeList,
  personalList,
} from "@/constant";
import { useCallback, useRef } from "react";
import { extractUploadFiles, isImage } from "@/utils";

let { Item } = ProDescriptions;
export default function Financing() {
  const [form] = Form.useForm();
  let getFile = useCallback((product_type) => {
    return [
      FinanceDataTypeEmu.EquityFinancing,
      FinanceDataTypeEmu.FinanceGuarantee,
      FinanceDataTypeEmu.Microloans,
      FinanceDataTypeEmu.BankLoans,
    ].includes(product_type);
  }, []);

  const actionRef = useRef<ActionType>();
  let columns: ProColumns<any>[] = [
    {
      title: "机构名称",
      dataIndex: ["financial_organs", "organs_name"],
    },
    {
      title: "产品名称",
      dataIndex: ["product", "name"],
    },
    {
      title: "担保方式",
      dataIndex: "guarantee_method",
      valueEnum: { ...data_type, 0: "-" },
    },
    {
      title: "金额",
      dataIndex: "apply_money",
      sorter: (a, b) => a.apply_money - b.apply_money,
      render(text, record) {
        return record.apply_money + "万元";
      },
    },
    {
      title: "申请时间",
      dataIndex: "add_time",
      valueType: "dateTime",
      sorter: (a, b) => a.add_time - b.add_time,
    },
    {
      title: "用途",
      dataIndex: "purpose",
      valueEnum: { ...purpose, 0: "-" },
    },
    {
      title: "期限",
      dataIndex: "term_desc",
    },
    {
      title: "联系方式",
      dataIndex: "title",
      render(text, record) {
        return record.user.user_name;
      },
    },

    {
      title: "受理状态",
      dataIndex: "action_status",
      valueEnum: action_status_filter,
    },
    {
      title: "附件",
      dataIndex: "attachment_list",
      render: (text, record, _, action) => {
        let {
          product_type,
          product_id,
          action_status,
          attachment_list = [],
        } = record;
        let f = getFile(product_type);
        let obj = attachment_list.reduce((pre, cur) => {
          pre[cur.attachment_key] = [
            {
              percent: 100,
              status: "done",
              response: { file: cur.attachment_url, code: 200 },
              thumbUrl: cur.attachment_url,
            },
          ];
          return pre;
        }, {});
        console.log(obj, attachment_list);
        form.setFieldsValue(obj);
        return (
          <div className="flex gap-2">
            {attachment_list?.length ? (
              <DrawerForm
                title="附件"
                key={"info"}
                trigger={
                  <Button type={"link"} className="!text-[#3d5af5] !px-1">
                    查看详情
                  </Button>
                }
                onFinish={async () => {
                  return true;
                }}
              >
                <ProDescriptions column={1}>
                  {record.attachment_list.map((item, index) => {
                    let isPDF = item.attachment_url
                      .toLowerCase()
                      .endsWith(".pdf");
                    let isImg = isImage(item.attachment_url);
                    return (
                      <Item key={index} label={item.attachment_name}>
                        {isPDF ? (
                          <Button
                            type={"primary"}
                            onClick={() => window.open(item.attachment_url)}
                          >
                            预览附件
                          </Button>
                        ) : isImg ? (
                          <Image width={200} src={item.attachment_url} />
                        ) : null}
                        <a
                          href={`${item.attachment_url}?download=yes`}
                          className="text-[#3d5af5]"
                        >
                          下载附件
                        </a>
                      </Item>
                    );
                  })}
                </ProDescriptions>
              </DrawerForm>
            ) : null}
            {f ? (
              <ModalForm
                title={
                  <h2 className="text-center text-[24px] ">
                    {record?.attachment_list?.length == 0
                      ? "添加附件"
                      : "编辑附件"}
                  </h2>
                }
                trigger={
                  <Button
                    type={"link"}
                    className="!text-[#3d5af5]  !px-1"
                    disabled={action_status != 1}
                  >
                    {record?.attachment_list?.length == 0
                      ? "添加附件"
                      : "编辑附件"}
                  </Button>
                }
                form={form}
                autoFocusFirstInput
                modalProps={{
                  destroyOnClose: true,
                  onCancel: () => console.log("run"),
                }}
                submitTimeout={2000}
                onFinish={async (values) => {
                  console.log(values);
                  let attachmentVal = [
                    "attachment_list",
                    ...[
                      ...enterpriseList,
                      ...personalList,
                      ...fileList,
                      ...guaranteeList,
                    ].map((item) => item.prop),
                  ];
                  const cleanedValues = extractUploadFiles(
                    values,
                    attachmentVal
                  );
                  await productApply({
                    ...record,
                    product_id: product_id,
                    ...cleanedValues,
                    product_type,
                  }).then((res) => {
                    if (res.code == 200) {
                      message.success("提交成功");
                      actionRef.current?.reload();
                    }
                  });
                  return true;
                }}
                grid
              >
                {product_type == FinanceDataTypeEmu.EquityFinancing ? (
                  <>
                    <ProFormItem label="借款主体" style={{ marginBottom: 0 }}>
                      <ProFormGroup>
                        {fileList.map((item) => {
                          return (
                            <ProFormUploadButton
                              label={
                                <>
                                  {item.label}{" "}
                                  {item.downloadUrl ? (
                                    <a
                                      href={item.downloadUrl}
                                      className="text-[#3D5AF5]"
                                    >
                                      下载模板
                                    </a>
                                  ) : null}
                                </>
                              }
                              key={item.prop}
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
              </ModalForm>
            ) : null}
          </div>
        );
      },
    },
  ];
  return (
    <ProTable<any>
      columns={columns}
      request={async (params, sorter, filter) => {
        let res = await applyList({
          ...params,
          page: params.current,
          limit: 10,
        });
        return {
          data: res.dataList,
          total: res.count, // 重要！告诉 ProTable 有多少条记录
          success: true,
        };
      }}
      rowKey="id"
      actionRef={actionRef}
      search={false}
      pagination={{
        pageSize: 10,
      }}
    />
  );
}
