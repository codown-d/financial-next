import TzIcon from "../TzIcon";
import { TzButton, TzButtonProps } from "../TzButton";
import { TzParagraph, TzTitle } from "../TzTypography";
export default function CardOverview(props:{title:string,description:string,}) {
  let { description, title } = props;
  return (
    <div className="flex items-start flex-col  rounded-lg p-4 w-[264px] bg-white-500">
      <div className="text-base">{title}</div>
      <div  className="text-sm text-wrap text-left leading-[16px]">{description}</div>
    </div>
  );
}
