"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, ShoppingBag, User, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Our Story", href: "/about" },
        { name: "Team", href: "/about#team" },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      submenu: [
        { name: "Education Support", href: "/programs#education" },
        { name: "Healthcare", href: "/programs#healthcare" },
        { name: "Safe Housing", href: "/programs#housing" },
        { name: "Nutrition", href: "/programs#nutrition" },
      ],
    },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/images/Brand_Logo.png"
              alt="The Unique & Safe Child Foundation"
              width={40}
              height={40}
              className="sm:w-[45px] sm:h-[45px]"
            />
            <div className="hidden xs:block">
              <h1 className="text-base sm:text-lg font-bold text-amber-600 leading-tight">
                THE UNIQUE
              </h1>
              <p className="text-xs text-gray-600 leading-tight">
                & SAFE CHILD FOUNDATION
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-amber-600 transition-colors duration-200 data-[state=open]:text-amber-600">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52">
                        <ul className="grid w-[220px] gap-1 p-3 bg-white border border-gray-200 rounded-md shadow-lg">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700 active:bg-amber-100"
                                  onClick={() => {
                                    // Close the navigation menu when a submenu item is clicked
                                    const navMenu = document.querySelector('[data-radix-navigation-menu-viewport]');
                                    if (navMenu) {
                                      (navMenu as any).style.display = 'none';
                                      setTimeout(() => {
                                        (navMenu as any).style.display = '';
                                      }, 100);
                                    }
                                  }}
                                >
                                  <div className="text-sm font-medium leading-none text-gray-700 hover:text-amber-700">
                                    {subItem.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-amber-50 data-[active]:text-amber-700 data-[state=open]:bg-amber-50 data-[state=open]:text-amber-700">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden md:flex text-gray-700 hover:text-amber-700 hover:bg-amber-50"
            >
              <Link href="/volunteer">
                <User className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Volunteer</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-gray-700 hover:text-amber-700 hover:bg-amber-50"
            >
              <Link href="/store">
                <ShoppingBag className="w-4 h-4" />
                <span className="sr-only">Store</span>
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-200"
              asChild
            >
              <Link href="/donate">
                <Heart className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">Donate</span>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden ml-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                >
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
                <div className="p-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 mb-8 pb-6 border-b border-gray-200">
                    <Image
                      src="/images/icon.png"
                      alt="The Unique & Safe Child Foundation"
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-amber-600 leading-tight">
                        THE UNIQUE
                      </h2>
                      <p className="text-xs text-gray-600 leading-tight">
                        & SAFE CHILD FOUNDATION
                      </p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <div key={item.name} className="border-b border-gray-100 pb-2">
                        {item.submenu ? (
                          <div>
                            <button
                              onClick={() => toggleSubmenu(item.name)}
                              className="flex items-center justify-between w-full text-left py-3 px-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors duration-200"
                            >
                              <span className="font-medium">{item.name}</span>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  openSubmenu === item.name ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {openSubmenu === item.name && (
                              <div className="ml-4 mt-2 space-y-1 pb-2">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block py-2 px-3 text-sm text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-3 px-2 font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                    
                    {/* Mobile Action Items */}
                    <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                      <Link
                        href="/volunteer"
                        className="flex items-center py-3 px-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="w-4 h-4 mr-3" />
                        Volunteer
                      </Link>
                      <Link
                        href="/store"
                        className="flex items-center py-3 px-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <ShoppingBag className="w-4 h-4 mr-3" />
                        Store
                      </Link>
                      <Link
                        href="/donate"
                        className="flex items-center justify-center py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Donate Now
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}