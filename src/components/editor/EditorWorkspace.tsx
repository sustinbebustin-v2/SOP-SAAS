import { useState } from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, History, Share, Send } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EditorWorkspace() {
  const [sources] = useState([
    { id: "1", title: "Customer Onboarding SOP", selected: true },
    { id: "2", title: "Product Release Guidelines", selected: false },
    { id: "3", title: "Security Incident Response", selected: false },
  ]);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            New SOP
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <History className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share className="h-4 w-4" />
          </Button>
          <Button size="sm">Save</Button>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left Sidebar */}
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <div className="h-full flex flex-col border-r">
            <div className="p-4">
              <h2 className="text-lg mb-4">Sources</h2>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search sources..." className="pl-8" />
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-2">
                {sources.map((source) => (
                  <button
                    key={source.id}
                    className={`w-full flex items-center gap-2 p-2 rounded-md text-left ${source.selected ? "bg-muted" : "hover:bg-muted/50"}`}
                  >
                    <FileText className="h-4 w-4" />
                    <span className="text-sm">{source.title}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </ResizablePanel>

        {/* Main Content Area */}
        <ResizablePanel defaultSize={80}>
          <div className="h-full flex flex-col">
            {/* Document Header */}
            <div className="p-4 border-b">
              <h1 className="text-xl font-semibold">Customer Onboarding SOP</h1>
              <p className="text-sm text-muted-foreground">
                Last edited 2 minutes ago
              </p>
            </div>

            {/* Editor and Suggestions */}
            <div className="flex-1 flex">
              {/* Main Editor */}
              <div className="flex-1 p-4">
                <textarea
                  className="w-full h-full resize-none bg-background p-4 text-base focus:outline-none"
                  placeholder="Start writing your SOP here..."
                />
              </div>

              {/* Right Sidebar - AI Suggestions */}
              <div className="w-80 border-l">
                <Tabs defaultValue="suggestions" className="h-full">
                  <TabsList className="w-full justify-start px-4 pt-4">
                    <TabsTrigger value="suggestions">
                      AI Suggestions
                    </TabsTrigger>
                    <TabsTrigger value="versions">Versions</TabsTrigger>
                  </TabsList>
                  <TabsContent value="suggestions" className="p-4 space-y-4">
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <p className="text-sm">
                        Consider adding a section about safety protocols.
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-7 text-xs"
                        >
                          Apply
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 text-xs"
                        >
                          Dismiss
                        </Button>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg border bg-muted/30">
                      <p className="text-sm">
                        This paragraph could be more concise.
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-7 text-xs"
                        >
                          Apply
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 text-xs"
                        >
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Bottom Chat */}
            <div className="border-t p-4">
              <div className="relative">
                <Input placeholder="Ask AI assistant..." className="pr-24" />
                <Button size="sm" className="absolute right-1 top-1">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
