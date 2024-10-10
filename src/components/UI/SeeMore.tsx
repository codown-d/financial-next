import TzIcon from "../TzIcon";
import { TzButton, TzButtonProps } from "../TzButton";
export default function SeeMore(props: TzButtonProps) {
  return (
    <TzButton
      {...props}
      type="link"
      icon={<TzIcon className={"fa-chevron-right text-sm"} />}
      iconPosition={"end"}
      className={"!text-[#3D5AF5] !p-0"}
    >
      查看全部
    </TzButton>
  );
}
