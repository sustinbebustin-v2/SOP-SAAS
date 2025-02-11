import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const documents = [];

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="flex items-center gap-4 p-2">
          <span className="font-medium">Documents</span>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Documents..." className="pl-8" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/editor/new")}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      {documents.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <Plus className="h-12 w-12 text-muted-foreground" />
          <div className="text-center">
            <p className="text-muted-foreground">No Documents Yet</p>
            <p className="text-sm text-muted-foreground">
              Click below to create your first document
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/editor/new")}>
              <Plus className="h-4 w-4 mr-2" />
              Create Document
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex-1 p-4">{/* Document list will go here */}</div>
      )}
    </div>
  );
}
