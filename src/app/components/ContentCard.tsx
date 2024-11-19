"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface info{

    title: string,
    description: string
}


export default function ContentCard({title,description}: info  ) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
              <CardTitle className="text-center m-3 text-xl">{title}</CardTitle>
        <CardDescription className="text-center pt-4 ">{description}</CardDescription>
      </CardHeader>

    </Card>
  )
}
