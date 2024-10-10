import TzIcon from "../TzIcon";
import { TzButton, TzButtonProps } from "../TzButton";
import { TzParagraph } from "../TzTypography";
export default function CardOverview(props) {
  let { description, title } = props;
  return (
    <div>
      <TzParagraph ellipsis={true}>{description}</TzParagraph>
    </div>
  );
}
