export default function PublicServicesDes(props) {
  let { children, className } = props;
  return <div className={`px-[14px] py-[11px] ${className} bg-[#F9F9F9] relative before:absolute before:left-0 before:h-[100%] before:w-1 before:bg-primary-500 before:top-0`}>{children}</div>;
}
