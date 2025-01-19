import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Dribbble } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
          Ready to have more impactful conversations?
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Be up and running in just a few minutes!
        </p>
        <Button size="lg" className="bg-[#F47458] hover:bg-[#E56447] text-white px-8">
          Contact Sales
        </Button>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0F1D] text-gray-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-4">
              <Image
                src={"/logo.png"}
                alt="Solnary Logo"
                width={150}
                height={40}
                className="mb-6"
              />
              <p className="text-sm leading-relaxed">
                We are a team of entrepreneurs, comprised of skilled and professional individuals
                throughout the world with our headquarters located in Ontario, Canada.
              </p>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Dribbble className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2 lg:col-start-7">
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-white">
                    Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    UI/UX Designs
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-white">
                    Join us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Plans
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 Solnary. All rights reserved</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-sm hover:text-white">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
