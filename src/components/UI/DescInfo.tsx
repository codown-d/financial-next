import Title from "./Title";

export default function DescInfo(props: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  let { title, children, className = "" } = props;
  return (
    <div className={`${className}`}>
      <Title title={title} />
      <div className="mt-4">{children}</div>
    </div>
  );
}
