import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type React from "react";

interface CardText {
  icon: React.ReactNode
  title: string
  description:string
}

export function CardText({ icon, title, description }: CardText) {
  return (
    <Card className="w-full max-w-sm flex justify-center">
      <CardHeader>
        <CardTitle className="text-3xl">
          {icon}
        </CardTitle>
        <CardTitle className="text-lg">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  )
}
