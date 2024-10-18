export default function CardOverview(props: {
  title: string;
  description: string;
  isActive:boolean;
}) {
  let { description, title,isActive } = props;
  console.log(isActive)
  return (
    <div className={`flex items-start flex-col rounded-lg p-4 w-[264px] bg-white-500 hover:bg-[#EFEFEF] ${isActive?'bg-gradient-to-r from-[#3C5BF6] to-[#7B9DF1]':''}`}>
      <div className={`text-lg mb-3 font-bold ${isActive? 'text-[#fff]':''}`}>{title}</div>
      <div className={`text-sm text-wrap text-left leading-[16px] ${isActive? 'text-[#fff] opacity-[0.59]':''}`}>
        {description}
      </div>
    </div>
  );
}
