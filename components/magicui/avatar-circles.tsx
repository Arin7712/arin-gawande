"use client";

import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            key={index}
            className="h-10 w-10 rounded-full bg-black p-2 border-2 border-white dark:border-gray-800"
            src={url.imageUrl}
            width={30}
            height={30}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}

    </div>
  );
};
