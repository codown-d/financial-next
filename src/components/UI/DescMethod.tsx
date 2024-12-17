export default function DescMethod(props: { method: string; desc: string;className?:string }) {
  let { method, desc, className } = props;
  return (
    <span
      className={`rounded-[6px] text-xs flex items-center overflow-hidden border border-solid h-[24px] border-[#DDDDDD] ${className||''}`}
    >
      <span className="bg-[#DDDDDD] text-[#999999] px-2 h-full flex items-center">
        {method}
      </span>
      <span className="px-2">{desc}</span>
    </span>
  );
}
