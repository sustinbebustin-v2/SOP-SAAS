import { useState } from "react";
import { cn } from "@/lib/utils";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Settings,
  Plus,
} from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="h-screen w-screen bg-background text-foreground flex flex-col">
      {/* Top Navigation */}
      <header className="h-14 border-b flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
          <h1 className="text-xl font-semibold">SOP Platform</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Sidebar */}
        <ResizablePanel
          defaultSize={20}
          minSize={10}
          maxSize={30}
          className={cn(
            "bg-muted/30",
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
          collapsible={true}
          collapsedSize={4}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 flex items-center gap-2">
              <Button className="w-full" variant="secondary">
                <Plus className="h-4 w-4 mr-2" />
                New SOP
              </Button>
            </div>
            <div className="px-4 pb-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search SOPs..."
                  className="w-full pl-8 pr-2 py-2 text-sm bg-background rounded-md border"
                />
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-2">
                {[
                  { title: "Dashboard", path: "/" },
                  { title: "SOP Library", path: "/library" },
                  { title: "Team", path: "/team" },
                  { title: "Settings", path: "/settings" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => (window.location.href = item.path)}
                    className="w-full text-left px-2 py-1.5 rounded-md hover:bg-muted text-sm font-medium"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </ResizablePanel>

        {/* Main Content */}
        <ResizablePanel defaultSize={80}>
          <div className="h-full flex flex-col">
            <main className="flex-1 overflow-auto">{children}</main>
            {/* Chat Panel */}
            <div className="h-64 border-t bg-muted/30 p-4">
              <div className="h-full flex flex-col">
                <ScrollArea className="flex-1 mb-4">
                  {/* Chat messages will go here */}
                </ScrollArea>
                <div className="relative">
                  <input
                    placeholder="Ask AI assistant..."
                    className="w-full pl-4 pr-10 py-2 text-sm bg-background rounded-md border"
                  />
                  <Button size="sm" className="absolute right-1 top-1">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
