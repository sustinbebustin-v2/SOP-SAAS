import { Card } from "@/components/ui/card";
import { FileText, Clock, Users, Star } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-500/10">
              <FileText className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total SOPs</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-full bg-green-500/10">
              <Clock className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recent Updates</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-full bg-yellow-500/10">
              <Star className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Favorites</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-full bg-purple-500/10">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team Members</p>
              <p className="text-2xl font-bold">6</p>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Customer Support SOP",
                  action: "Updated",
                  time: "2h ago",
                },
                {
                  title: "Product Release Guide",
                  action: "Created",
                  time: "4h ago",
                },
                {
                  title: "Onboarding Process",
                  action: "Reviewed",
                  time: "6h ago",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.action}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid gap-2">
              {[
                {
                  title: "Create New SOP",
                  icon: <FileText className="h-4 w-4" />,
                },
                {
                  title: "Import Documents",
                  icon: <FileText className="h-4 w-4" />,
                },
                { title: "Manage Team", icon: <Users className="h-4 w-4" /> },
              ].map((item, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 p-2 hover:bg-muted rounded-md text-left"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
