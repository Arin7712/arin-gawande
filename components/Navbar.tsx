import React from "react";
import { navItems } from "@/constants";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Equal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-16 py-4">
      <div className="flex flex-col">
        <h4 className="text-sm/tight">Arin Gawande</h4>
        <p className="text-xs text-neutral-400">Pune, Maharashtra</p>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-6 items-center text-xs font-thin">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`${
                item.name == "Home"
                  ? "bg-black text-white rounded-2xl px-4 py-1.5"
                  : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-col items-end">
          <div className="text-xs/tight text-neutral-400">Social:</div>
          <ul className="text-xs flex gap-2">
            <li>IG</li>
            <li>FB</li>
            <li>LI</li>
          </ul>
        </div>
      </div>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
          <Equal/>
          </SheetTrigger>
          <SheetContent side={"top"} className="h-screen">
            <SheetHeader>
              {navItems.map((item, index) => (
                <SheetTitle
                key={index}
                className={`font-light mt-6 ${item.name == "Home" ? "bg-black text-white rounded-2xl px-4 py-1.5" : ""}`}
                >
                {item.name}
                </SheetTitle>
              ))}
              <SheetDescription suppressHydrationWarning>
                <div className="mt-6 text-md">
                    Social:
                </div>
                <ul className="flex gap-6 justify-center text-black text-lg">
                    <li>
                        IG
                    </li>
                    <li>
                        FB
                    </li>
                    <li>
                        LI
                    </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
