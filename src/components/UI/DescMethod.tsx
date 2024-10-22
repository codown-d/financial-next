export default function DescMethod(props: { method: string; desc: string;className?:string }) {
  let { method, desc, className } = props;
  return (
    <div
      className={`rounded-[6px] text-xs flex items-center overflow-hidden border border-solid h-[24px] border-[#DDDDDD] ${className}`}
    >
      <div className="bg-[#DDDDDD] text-[#999999] px-2 h-full flex items-center">
        {method}
      </div>
      <div className="px-2 flex-1">{desc}</div>
    </div>
  );
}
