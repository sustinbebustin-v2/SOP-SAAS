import { useState } from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Settings,
  Send,
  Bold,
  Italic,
  Code,
  Mic,
  Pencil,
} from "lucide-react";

export default function ComposerWorkspace() {
  const [content, setContent] = useState("");

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <span className="text-sm">Agent Plan</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            Close Composer
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Notes Panel */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
          <div className="h-full flex flex-col">
            <div className="p-2 border-b flex items-center justify-between">
              <span className="text-sm font-medium">Notes</span>
            </div>
            <Tabs defaultValue="notes" className="flex-1">
              <TabsList className="w-full justify-start px-2 border-b bg-transparent h-9">
                <TabsTrigger
                  value="notes"
                  className="text-sm data-[state=active]:bg-transparent"
                >
                  Notes
                </TabsTrigger>
                <TabsTrigger
                  value="sources"
                  className="text-sm data-[state=active]:bg-transparent"
                >
                  Sources
                </TabsTrigger>
                <TabsTrigger
                  value="compositions"
                  className="text-sm data-[state=active]:bg-transparent"
                >
                  Compositions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="notes" className="flex-1 p-0">
                <ScrollArea className="h-[calc(100vh-8.5rem)]">
                  <div className="p-4 flex flex-col items-center justify-center h-48">
                    <p className="text-sm text-muted-foreground">
                      No Notes Yet
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Start adding voice or text notes to your thread
                    </p>
                  </div>
                </ScrollArea>
                <div className="border-t p-2 flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Mic className="h-4 w-4 mr-2" />
                    Record
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <Pencil className="h-4 w-4 mr-2" />
                    Write
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="sources" className="flex-1">
                <ScrollArea className="h-[calc(100vh-8.5rem)]">
                  <div className="p-4 flex flex-col items-center justify-center h-48">
                    <p className="text-sm text-muted-foreground">
                      No Sources Yet
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Add sources to reference in your composition
                    </p>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="compositions" className="flex-1">
                <ScrollArea className="h-[calc(100vh-8.5rem)]">
                  <div className="p-4 flex flex-col items-center justify-center h-48">
                    <p className="text-sm text-muted-foreground">
                      No Compositions Yet
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your saved compositions will appear here
                    </p>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </ResizablePanel>

        {/* Composer Panel */}
        <ResizablePanel defaultSize={45}>
          <div className="h-full flex flex-col">
            <div className="p-2 border-b flex items-center justify-between">
              <span className="text-sm font-medium">Composer</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Previous Compositions
                </span>
                <span className="bg-muted px-1.5 py-0.5 rounded text-xs">
                  3
                </span>
                <Button size="sm" variant="default">
                  Save Composition (⌘+S)
                </Button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="mb-4 flex gap-2">
                <Button variant="ghost" size="sm">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  H1
                </Button>
                <Button variant="ghost" size="sm">
                  H2
                </Button>
                <Button variant="ghost" size="sm">
                  H3
                </Button>
                <Button variant="ghost" size="sm">
                  UL
                </Button>
                <Button variant="ghost" size="sm">
                  OL
                </Button>
                <Button variant="ghost" size="sm">
                  <Code className="h-4 w-4" />
                </Button>
              </div>
              <div className="mb-4">
                <h1 className="text-2xl font-semibold mb-4">
                  AI Agents for Beginners
                </h1>
                <h2 className="text-xl font-semibold mb-2">
                  What is an AI Agent
                </h2>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-[calc(100vh-16rem)] resize-none bg-background text-base focus:outline-none"
                  placeholder="Start writing..."
                />
              </div>
            </div>
          </div>
        </ResizablePanel>

        {/* AI Chat Panel */}
        <ResizablePanel defaultSize={30}>
          <div className="h-full flex flex-col">
            <div className="p-2 border-b flex items-center justify-between">
              <span className="text-sm font-medium">AI Chat</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Previous Chats
                </span>
                <span className="bg-muted px-1.5 py-0.5 rounded text-xs">
                  1202
                </span>
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-4">
                <div className="text-sm">
                  Make the first paragraph more simple
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm">
                    An AI Agent is a computer program that can think and act on
                    its own using artificial intelligence. Think of it like a
                    smart digital helper that can understand what you say,
                    figure things out, and do tasks without needing someone to
                    guide it every step of the way. These agents use special AI
                    tools called large language models (LLMs) to understand and
                    respond to different situations. They can be set up to help
                    with many different jobs, from answering customer questions
                    to looking through lots of data.
                  </p>
                  <Button size="sm" variant="secondary" className="mt-2">
                    Review changes
                  </Button>
                </div>
              </div>
            </ScrollArea>
            <div className="p-2 border-t">
              <div className="relative">
                <Input placeholder="Ask a question..." className="pr-24" />
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
