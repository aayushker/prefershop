import React from "react";
import Landing from "@/layout/Landing";
import { NextUIProvider } from "@nextui-org/react";
import "@/assets/css/output.css";
import "@/assets/css/globals.css";

export default function Home() {
  return (
    <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <Landing />
      </main>
    </NextUIProvider>
  </React.StrictMode>
  );
}