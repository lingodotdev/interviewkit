import { FileText } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "~/components/ui/sidebar";

const navigationItems = [
  {
    title: "Requests",
    icon: FileText,
    url: "/requests",
  },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Remove padding for specific routes that need full-width content
  const noPaddingRoutes = ['/requests'];
  const shouldRemovePadding = noPaddingRoutes.includes(currentPath);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-border px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-sm font-bold">T</span>
              </div>
              <span className="text-lg font-semibold">Test App</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={currentPath === item.url}
                      >
                        <Link to={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-1 flex-col">
          {/* Header/Navbar */}
          <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center gap-4 px-6">
            </div>
          </header>

          {/* Main Content */}
          <main className={shouldRemovePadding ? "flex-1" : "flex-1 p-6"}>{children}</main>

          {/* Footer */}
          <footer className="border-t border-border bg-muted/30">
            <div className="flex items-center px-6 py-4 text-sm text-muted-foreground">
              <p>© 2026 Test App. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
