"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-16 w-screen flex items-center justify-around font-pontanoSans transition-all duration-300 mx-auto fixed top-0 left-0 right-0 z-50 rounded-xl overflow-hidden ${
        isScrolled ? "max-w-[80%] top-6 backdrop-blur-2xl py-2 px-4 bg-white/10" : "max-w-[95%]"
      }`}
    >
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={240}
          height={240}
          className="mt-2 scale-150 ml-6 lg:scale-100 lg:ml-0"
        />
      </Link>
      <nav className="font-pontanoSans flex items-center justify-between w-full">
        {/* Desktop Menu */}
        <div className="ml-4 hidden md:flex gap-4 sm:gap-6 items-center">
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#home">
            Home
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </div>
        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#contact">
            <Button variant="ghost" size="default">
              Register
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="default" size="default">
              Book a demo
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </nav>
      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle> </SheetTitle>
          <nav className="flex flex-col gap-4">
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#pricing"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#faq"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
