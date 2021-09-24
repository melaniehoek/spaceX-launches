import { FC } from "react";
import { Badge } from "@chakra-ui/layout";

interface BadgeProps {
  upcoming: boolean;
  launch_success: boolean | null;
}

export const LaunchBadge: FC<BadgeProps> = ({ upcoming, launch_success }) => {
  if (upcoming) {
    return (
      <Badge borderRadius="md" colorScheme="purple">
        Upcoming launch
      </Badge>
    );
  }

  return (
    <Badge
      px="2"
      borderRadius="md"
      colorScheme={launch_success ? "green" : "red"}
    >
      Launch {!launch_success && "not"} successful
    </Badge>
  );
};
