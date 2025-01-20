import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Navbar from "../components/Navbar"
import NewHomepage from "../components/NewHomepage"


export default function Page() {
  return (
    <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-background">
                                    <BreadcrumbPage className="line-clamp-1">
                                        Home
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="ml-auto px-3 flex flex-row">
                        <Navbar />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 px-4 py-10">
                    <NewHomepage />
                </div>
            </SidebarInset>
        </SidebarProvider>
  )
}
