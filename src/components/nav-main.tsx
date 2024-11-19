"use client"

import { type LucideIcon } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    link: string
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <Link href={item.link}>
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={!item.isActive}>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
          </SidebarMenuItem>
          </Link>
      ))}
    </SidebarMenu>
  )
}
