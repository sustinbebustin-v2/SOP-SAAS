import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Star, MoreVertical, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SOP = {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  status: "Draft" | "Published" | "Under Review";
  favorite: boolean;
};

export default function LibraryPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const sops: SOP[] = [
    {
      id: "1",
      title: "Customer Onboarding Process",
      category: "Customer Success",
      lastUpdated: "2h ago",
      status: "Published",
      favorite: true,
    },
    {
      id: "2",
      title: "Product Release Guidelines",
      category: "Product",
      lastUpdated: "1d ago",
      status: "Draft",
      favorite: false,
    },
    {
      id: "3",
      title: "Security Incident Response",
      category: "Security",
      lastUpdated: "3d ago",
      status: "Published",
      favorite: true,
    },
    {
      id: "4",
      title: "Employee Onboarding",
      category: "HR",
      lastUpdated: "5d ago",
      status: "Under Review",
      favorite: false,
    },
  ];

  const filteredSOPs = sops.filter(
    (sop) =>
      sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sop.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">SOP Library</h1>
          <Button onClick={() => navigate("/editor/new")}>
            <FileText className="h-4 w-4 mr-2" />
            New SOP
          </Button>
        </div>

        <Card className="mb-6">
          <div className="p-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search SOPs..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </Card>

        <Card>
          <ScrollArea className="h-[calc(100vh-280px)]">
            <div className="p-4">
              <div className="grid gap-4">
                {filteredSOPs.map((sop) => (
                  <div
                    key={sop.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 cursor-pointer"
                    onClick={() => navigate(`/editor/${sop.id}`)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{sop.title}</h3>
                          {sop.favorite && (
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {sop.category}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">
                            Last updated {sop.lastUpdated}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {sop.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}
