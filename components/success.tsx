import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Success() {
  return (
    <div className="w-full">
      <Card className="text-center py-8">
        <CardHeader>
          <CardTitle className="flex flex-col items-center space-y-4">
            <CheckCircle />
            <span>Success!</span>
          </CardTitle>
          <CardDescription>You'll hear from us shortly.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="https://tolbit.com">
            <Button>Back to home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
