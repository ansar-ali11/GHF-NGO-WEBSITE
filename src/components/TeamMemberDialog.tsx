import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  responsibilities: string[];
  email: string;
  experience: string;
}

interface TeamMemberDialogProps {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TeamMemberDialog = ({
  member,
  open,
  onOpenChange,
}: TeamMemberDialogProps) => {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold">
            Team Member Profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                {member.role}
              </div>
            </div>
          </div>

          {/* Name and Basic Info */}
          <div className="text-center space-y-2">
            <h2 className="font-heading font-bold text-3xl">{member.name}</h2>
            <p className="text-muted-foreground">{member.experience}</p>
            <a
              href={`mailto:${member.email}`}
              className="inline-block text-primary hover:underline"
            >
              {member.email}
            </a>
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-3">
              Key Responsibilities
            </h3>
            <ul className="space-y-2">
              {member.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
