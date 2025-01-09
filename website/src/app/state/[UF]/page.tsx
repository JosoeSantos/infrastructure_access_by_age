"use client";
import { AgePyramid } from "@/components/age-pyramid/components_age-pyramid";
import { Component } from "@/components/mocks/bar-chart";
import { BarChart } from "lucide-react";
import { useParams } from "next/navigation";

export default function StatePage() {
  const params = useParams<{ uf: string }>();
  return (
    <div>
      <h1>{params.uf}</h1>
      <div className="flex gap-4 p-4 flex-wrap justify-around">
        <AgePyramid />
        <Component />
      </div>
    </div>
  );
}
