import TzCard from "../TzCard";

export default function FilterHeader(props: {
  left: React.ReactNode;
  className?: string;
  right?: React.ReactNode;
}) {
  let { className = "", left, right } = props;
  return (
    <TzCard className={`${className}`}>
      <div className="flex items-center justify-between">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </TzCard>
  );
}
