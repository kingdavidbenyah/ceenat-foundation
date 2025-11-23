"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useMenu } from "../contexts/menu-context";
import { usePathname } from "next/navigation";
import Button from "./ui/button";
import DonateModal from "./donateModal";

const navItems = [
  { name: "About us", href: "/about" },
  { name: "Our Programs", href: "/programs" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Contact us", href: "/contact" },
];

export default function navbar() {
  const { isOpened, setIsOpened } = useMenu();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      menuRef.current &&
      !menuRef.current.contains(target) &&
      buttonRef.current &&
      !buttonRef.current.contains(target)
    ) {
      setIsOpened(false);
    }
  };
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpened(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);

    if (isOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    document.body.style.overflow = isOpened ? "hidden" : "auto";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpened, handleClickOutside]);

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <main className="bg-gray-1 w-full fixed top-0 border-b z-9999 border-gray-4">
      <nav className="container-wide nav-padding flex-between relative z-50">
        <Link href="/" className="focus:outline-none cursor-pointer">
          <div className="flex-center gap-0.5 xl:gap-1 max-w-[155px] sm:max-w-[500px]">
            <Image
              className="w-10 h-10 xl:w-[45px] xl:h-[45px]"
              src="/svg/logo.svg"
              width={80}
              height={80}
              alt="logo"
            />
            <p className="text-primary-default text-base sm:text-lg md:text-[20px] xl:text-[22px] font-extrabold leading-5">
              Ceenat Foundation
            </p>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-14">
          <div className="flex-center gap-10">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive ? "text-green-8" : "text-gray-7"
                  }  text-sm xl:text-[15px] font-medium hover:text-green-8 transition-colors`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Button
            text="Donate"
            className="hidden lg:flex"
            onClick={() => setIsDonateModalOpen(true)}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-6">
          <Button
            text="Donate"
            className="hidden sm:flex"
            onClick={() => setIsDonateModalOpen(true)}
          />
          <button ref={buttonRef} onClick={() => setIsOpened(!isOpened)} className="cursor-pointer">
            {isOpened ? (
              <X className="w-6 h-6 text-primary-default" />
            ) : (
              <Image
                className="w-[21px] h-4"
                src="/svg/hamburger.svg"
                width={80}
                height={80}
                alt="menu"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpened && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white border-t border-gray-200 absolute w-full z-40"
        >
          <div className="container-wide py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpened(false)}
                className="block text-gray-11 text-sm sm:text-base font-medium py-2 hover:text-primary-default transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              text="Donate"
              className="w-full sm:hidden"
              onClick={() => setIsDonateModalOpen(true)}
            />
          </div>
        </div>
      )}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </main>
  );
}
