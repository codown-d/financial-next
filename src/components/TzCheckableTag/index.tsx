"use client";
import { Select, Tag, TagProps } from "antd";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";
import CheckableTag, { CheckableTagProps } from "antd/es/tag/CheckableTag";
import { useEffect, useMemo, useState } from "react";

interface TzTagProps extends TagProps {}
export default function TzTag(props: TzTagProps) {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-tag ${props.className || ""}`,
    };
  }, [props]);
  return <Tag {...realProps} />;
}
interface TzCheckableTagProps extends CheckableTagProps {}

TzTag.CheckableTag = (props: TzCheckableTagProps) => {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-checkable-tag ${props.className || ""}`,
    };
  }, [props]);
  return <CheckableTag {...realProps} />;
};
export const TzCheckableTag = TzTag.CheckableTag;
interface TzCheckableTagNormalProps {
  items: DefaultOptionType[];
  onChange?: (values: any[]) => void;
  defaultChecked?: any[];
}
export const TzCheckableTagNormal = (props: TzCheckableTagNormalProps) => {
  let { items, onChange, defaultChecked, ...otherProps } = props;
  let [value, setValue] = useState<any[]>(defaultChecked || []);
  let handleChange = (tag: any, checked: boolean) => {
    console.log(tag, checked);
    setValue((pre) => {
      if (checked) {
        return [...pre, tag];
      } else {
        return pre?.filter((item) => item !== tag);
      }
    });
  };
  useEffect(() => {
    onChange && onChange(value);
  }, [value]);
  return (
    <>
      {items.map((item) => {
        return (
          <TzCheckableTag
          key={item.value}
            checked={!!item.disabled}
            {...otherProps}
            onChange={(checked) => handleChange(item.value, checked)}
          >
            {item.label}
          </TzCheckableTag>
        );
      })}
    </>
  );
};
