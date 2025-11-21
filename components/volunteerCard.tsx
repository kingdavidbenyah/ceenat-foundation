"use client";
import Image from "next/image";
import Button from "./ui/button";
import DonateModal from "./donateModal";
import { useState } from "react";

interface VolunteerCardProps {
  imgSrc: string;
  title: string;
  description: string;
  btnText: string;
  iconSrc: string;
  onClick?: () => void;
  btnClassName?: string;
  button?: boolean;
  secondBtn?: boolean;
  secondbtnText?: string;
  onClick2?: () => void;
  onClick3?: () => void;
  picButtons?: boolean;
  startingIcon?: React.ReactNode;
  startingIcon2?: React.ReactNode;
  variant?: "outline" | "default";
}

export default function volunteerCard({
  imgSrc,
  iconSrc,
  title,
  onClick,
  description,
  btnText,
  btnClassName,
  secondBtn,
  secondbtnText,
  button = true,
  picButtons = false,
  onClick2,
  onClick3,
  variant = "outline",
  startingIcon,
  startingIcon2,
}: VolunteerCardProps) {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white p-5 shadow shadow-sm md:p-[60px] relative rounded-[24px]  lg:w-full  ">
      {/* icon */}
      <div className="bg-white/10 md:self-center absolute shadow shadow-lg backdrop-blur-sm -translate-y-1/2 top-0 lg:self-start  rounded-full  w-fit h-fit p-2.5 md:p-[16px] ">
        <div className="bg-primary-default shadow shadow-lg rounded-full p-2.5 md:p-[10px]">
          <Image
            src={iconSrc}
            width={1920}
            height={1080}
            alt="img"
            className=" w-6 md:w-[56px] "
          />
        </div>
      </div>
      <div className="flex flex-col  gap-4 md:gap-6 lg:flex-row mt-4 lg:justify-around  w-full">
        {/* text */}
        <div className="flex flex-col w-full  gap-4 lg:gap-4">
          <div className="flex flex-col max-w-[480px] lg:self-start md:self-center md:text-center lg:text-left gap-1 md:gap-2 ">
            <h3 className="text-[24px] md:text-[28px] font-bold ">{title}</h3>
            <p className="text-[12px] md:text-[16px] lg:text-[18px] text-[#4f4f4f]">
              {description}
            </p>
          </div>
          <div className="flex md:self-center lg:self-start w-fit gap-6">
            {button ? (
              <Button
                className={`${btnClassName} `}
                text={btnText}
                onClick={onClick}
                variant={variant}
                startingIcon={startingIcon}
              />
            ) : null}
          </div>
        </div>
        {/* image */}
        <div className=" w-full ">
          <div className="rounded-lg overflow-hidden flex-grow  h-[300px] md:h-[360px]  lg:h-[440px]">
            {/* to maintain aspect ratio  */}
            <Image
              src={imgSrc}
              width={1920}
              height={1080}
              alt="img"
              className=" w-full h-full  object-cover  "
            />
          </div>
          {/* optional buttons */}
          <div className="flex w-full gap-3 md:gap-6 mt-4">
            {picButtons ? (
              <>
                <Button
                  className={`${btnClassName} `}
                  text={btnText}
                  onClick={onClick2}
                  variant={variant}
                  startingIcon={startingIcon}
                />
                {secondBtn && (
                  <Button
                    className={`${btnClassName} `}
                    text={secondbtnText || ""}
                    onClick={onClick3}
                    variant={variant}
                    startingIcon={startingIcon2}
                  />
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>

      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </div>
  );
}
