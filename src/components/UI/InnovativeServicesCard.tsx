import TzCard from "../TzCard";
export default function InnovativeServicesCard(props: {
  children: React.ReactNode;
  className?:string
}) {
  let { children,className='' } = props;
  return (
    <TzCard
      className={`!rounded-2xl !border-0 overflow-hidden ${className}`}
      styles={{body:{padding:0}}}
    >
      {children}
    </TzCard>
  );
}
