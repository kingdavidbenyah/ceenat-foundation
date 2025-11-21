import Button from "./ui/button";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  btnText: string;
  link?: string;
}

export default function contactCard({
  icon,
  title,
  btnText,
  link,
}: ContactCardProps) {
  return (
    <div className="flex flex-col items-center md:items-start w-full  shadow shadow-sm border border-gray-4 rounded-[16px] gap-2 w-fit p-4 ">
      {/* icon */}
      <div className="bg-primary-default rounded-full mb-4 w-fit h-fit p-[16px] ">
        {icon}
      </div>
      {/* text */}
        <h3 className="text-[16px] md:text-xl   font-bold flex-1 ">{title}</h3>
      <div className="flex flex-col mt-2 ">
        <Button  text={btnText} href={link}  variant="default" />
      </div>
    </div>
  );
}
