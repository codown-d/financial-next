export default function Title(props: {
  title: React.ReactNode;
  className?: string;
}) {
  let { title, className } = props;
  return (
    <div
      className={`pl-2 relative before:content-[''] before:absolute before:rounded-sm before:left-0 before:w-1 before:h-full before:bg-[#3D5AF5] font-medium text-sm text-[#333333] leading-[21px] text-left ${className}`}
    >
      {title}
    </div>
  );
}
