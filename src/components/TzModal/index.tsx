"use client";
import { Modal, ModalFuncProps, ModalProps } from "antd";
import { useMemo } from "react";

interface TzModalProps extends ModalProps {}
export default function TzModal(props: TzModalProps) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-modal ${props.className || ""}`,
    };
  }, [props]);
  return <Modal {...realProps} />;
}
const { confirm } = Modal;
export const TzConfirm = (props: ModalFuncProps) => {
  confirm(Object.assign({ icon: null,  }, props));
};
