"use client";
import { Input, InputProps, Typography, TypographyProps } from "antd";
import { SearchProps } from "antd/es/input";
import { TitleProps } from "antd/es/typography/Title";
import {  useMemo } from "react";
const { Title, Paragraph, Text, Link } = Typography;
interface TzTypographyProps extends TypographyProps {
  children?:React.ReactNode
}
export default function TzTypography(props: TzTypographyProps) {
  let {children} =props
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-typography`,
    };
  }, [props]);
  return <Typography {...realProps}>{children}</Typography>;
}
interface TzTitleProps extends TitleProps {
}
TzTypography.TzTitle=(props: TzTitleProps) => {
  let {children} =props
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-title ${props.className || ""}`,
    };
  }, [props]);
  return <Title {...realProps} >{children}</Title>;
};
export const TzTitle=TzTypography.TzTitle
// interface TzSearchProps extends SearchProps {}
// const { Search } = Input;
// export const TzSearch = (props: TzSearchProps) => {
//   const realProps = useMemo(() => {
//     return {
//       ...props,
//       className: `tz-search ${props.className || ""}`,
//     };
//   }, [props]);
//   return <Search {...realProps} />;
// };
