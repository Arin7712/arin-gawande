import Image from "next/image";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { AvatarCirclesDemo } from "./AvatarCirclesDemo";
import { ArrowRight } from "lucide-react";
import { caseStudy } from "@/constants";
import Link from "next/link";

const Case = () => {
  return (
    <div className="padding pt-[2rem] md:pt-[10rem]">
      {/* <Image src='/m1.png' alt='image' width={10000} height={40} className='rounded-xl'/> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            caseStudy.map((caseStudy, index) => (
        <Card>
          <CardContent>
            <Image
              src={caseStudy.projectImage || ''}
              alt="image"
              width={1000}
              height={40}
              className="rounded-xl w-[100%]"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start pt-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl">{caseStudy.projectName}</h1>
              <p className="text-xs text-neutral-800">
                {caseStudy.projectDescription}
              </p>
            </div>
            <div className="flex justify-between w-full pt-8">
              <div className="flex items-center">
                <div className="text-sm text-zinc-500 flex items-center gap-2">
                  → View Case Study
                </div>
              </div>
              <Button>
                <Link href={caseStudy.projectUrl || ''}>
                View Site
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
        ))}
      </div>
    </div>
  );
};

export default Case;
