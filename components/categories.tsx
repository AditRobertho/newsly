"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu"
import { Banknote, BikeIcon, CpuIcon, FlaskConical, TvIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Separator } from "./ui/separator"

const categories = [
  { label: "business", icon: Banknote },
  { label: "entertainment", icon: TvIcon },
  { label: "science", icon: FlaskConical },
  { label: "sports", icon: BikeIcon },
  { label: "technology", icon: CpuIcon },
]

export const Categories = () => {
  const pathname = usePathname()

  return (
    <NavigationMenu className="flex max-w-[95vw] items-start justify-start">
      <NavigationMenuList>
        {categories.map((category, index) => (
          <NavigationMenuItem key={category.label}>
            <Link href={`/category/${category.label}`} passHref legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-2 transition-all hover:bg-transparent hover:text-orange-800"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-between gap-2  capitalize",
                    {
                      "text-orange-700":
                        pathname === `/category/${category.label}`,
                    }
                  )}
                >
                  {<category.icon className="size-4" />}
                  <span className="text-sm">{category.label}</span>
                  {index === categories?.length - 1 ? null : (
                    <Separator
                      orientation="vertical"
                      className="ml-4 h-8 rotate-45 bg-orange-700"
                    />
                  )}
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
