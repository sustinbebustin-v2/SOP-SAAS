import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Mail, Search, MoreVertical } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Invited";
  avatar: string;
};

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const members: TeamMember[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=john`,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      status: "Active",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=jane`,
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Viewer",
      status: "Invited",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=mike`,
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Team Management</h1>
            <p className="text-muted-foreground mt-1">
              Manage your team members and their access levels
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Invite by Email
            </Button>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search team members..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </Card>

        <Card>
          <Tabs defaultValue="members" className="w-full">
            <TabsList className="w-full justify-start p-4 border-b">
              <TabsTrigger value="members" className="flex-1">
                Members ({members.length})
              </TabsTrigger>
              <TabsTrigger value="roles" className="flex-1">
                Roles & Permissions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="members" className="p-0">
              <ScrollArea className="h-[calc(100vh-350px)]">
                <div className="p-4">
                  <div className="grid gap-4">
                    {filteredMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full bg-muted"
                          />
                          <div>
                            <h3 className="font-semibold">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {member.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${member.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}`}
                          >
                            {member.status}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {member.role}
                          </span>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="roles" className="p-4">
              <div className="space-y-6">
                {[
                  {
                    role: "Admin",
                    description: "Full access to all features and settings",
                    permissions: [
                      "Create/Edit SOPs",
                      "Manage team",
                      "Configure settings",
                      "Delete content",
                    ],
                  },
                  {
                    role: "Editor",
                    description: "Can create and edit SOPs",
                    permissions: [
                      "Create/Edit SOPs",
                      "Comment",
                      "Share content",
                    ],
                  },
                  {
                    role: "Viewer",
                    description: "Can view and comment on SOPs",
                    permissions: ["View SOPs", "Comment"],
                  },
                ].map((role) => (
                  <div key={role.role} className="p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold">{role.role}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {role.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.permissions.map((permission) => (
                        <span
                          key={permission}
                          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
