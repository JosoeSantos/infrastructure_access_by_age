import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Selecione um estado",
      url: "#",
      items: [
        {
          title: "Acre",
          url: "/state/AC",
        },
        {
          title: "Alagoas",
          url: "/state/AL",
        },
        {
          title: "Amapá",
          url: "/state/AP",
        },
        {
          title: "Amazonas",
          url: "/state/AM",
        },
        {
          title: "Bahia",
          url: "/state/BA",
        },
        {
          title: "Ceará",
          url: "/state/CE",
        },
        {
          title: "Distrito Federal",
          url: "/state/DF",
        },
        {
          title: "Espírito Santo",
          url: "/state/ES",
        },
        {
          title: "Goiás",
          url: "/state/GO",
        },
        {
          title: "Maranhão",
          url: "/state/MA",
        },
        {
          title: "Mato Grosso",
          url: "/state/MT",
        },
        {
          title: "Mato Grosso do Sul",
          url: "/state/MS",
        },
        {
          title: "Minas Gerais",
          url: "/state/MG",
        },
        {
          title: "Pará",
          url: "/state/PA",
        },
        {
          title: "Paraíba",
          url: "/state/PB",
        },
        {
          title: "Paraná",
          url: "/state/PR",
        },
        {
          title: "Pernambuco",
          url: "/state/PE",
        },
        {
          title: "Piauí",
          url: "/state/PI",
        },
        {
          title: "Rio de Janeiro",
          url: "/state/RJ",
        },
        {
          title: "Rio Grande do Norte",
          url: "/state/RN",
        },
        {
          title: "Rio Grande do Sul",
          url: "/state/RS",
        },
        {
          title: "Rondônia",
          url: "/state/RO",
        },
        {
          title: "Roraima",
          url: "/state/RR",
        },
        {
          title: "Santa Catarina",
          url: "/state/SC",
        },
        {
          title: "São Paulo",
          url: "/state/SP",
        },
        {
          title: "Sergipe",
          url: "/state/SE",
        },
        {
          title: "Tocantins",
          url: "/state/TO",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Lista de estados</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
