import TzCard from "../TzCard";

export default function FilterHeader(props: {
  left: React.ReactNode;
  className?: string;
  right?: React.ReactNode;
}) {
  let { className = "", left, right } = props;
  return (
    <div className={`rounded-2xl bg-white-500 py-5 px-[30px] ${className} `}>
      <div className="flex items-center justify-between">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </div>
  );
}
