import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, History, Download, Share } from "lucide-react";

export default function DocumentEditor() {
  const [content, setContent] = useState("");
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      text: "Consider adding a section about safety protocols.",
      start: 0,
      end: 0,
    },
    { id: 2, text: "This paragraph could be more concise.", start: 0, end: 0 },
  ]);

  return (
    <div className="h-full flex flex-col">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h1 className="text-xl font-semibold">Customer Onboarding SOP</h1>
          <p className="text-sm text-muted-foreground">
            Last edited 2 minutes ago
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <History className="h-4 w-4 mr-2" />
            History
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 flex gap-4 p-4 overflow-hidden">
        <div className="flex-1 min-w-0">
          <Card className="h-full">
            <div className="p-4">
              <textarea
                className="w-full h-[calc(100vh-280px)] resize-none bg-background p-4 text-base focus:outline-none"
                placeholder="Start writing your SOP here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 flex-shrink-0">
          <Tabs defaultValue="suggestions" className="h-full">
            <TabsList className="w-full">
              <TabsTrigger value="suggestions" className="flex-1">
                AI Suggestions
              </TabsTrigger>
              <TabsTrigger value="versions" className="flex-1">
                Versions
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="suggestions"
              className="mt-4 h-[calc(100%-45px)]"
            >
              <Card className="h-full">
                <ScrollArea className="h-[calc(100vh-280px)]">
                  <div className="p-4 space-y-4">
                    {suggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className="p-3 rounded-lg border bg-muted/30"
                      >
                        <p className="text-sm">{suggestion.text}</p>
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
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>

            <TabsContent value="versions" className="mt-4 h-[calc(100%-45px)]">
              <Card className="h-full">
                <ScrollArea className="h-[calc(100vh-280px)]">
                  <div className="p-4 space-y-4">
                    {[
                      {
                        version: "v1.3",
                        time: "2 minutes ago",
                        author: "John Doe",
                      },
                      {
                        version: "v1.2",
                        time: "1 hour ago",
                        author: "John Doe",
                      },
                      {
                        version: "v1.1",
                        time: "2 hours ago",
                        author: "Jane Smith",
                      },
                      {
                        version: "v1.0",
                        time: "1 day ago",
                        author: "John Doe",
                      },
                    ].map((version, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg border"
                      >
                        <div>
                          <p className="font-medium">{version.version}</p>
                          <p className="text-sm text-muted-foreground">
                            {version.time} by {version.author}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost" className="h-7">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
