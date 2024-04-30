import Landing from "@/layout/Landing";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Landing />
      </main>
    </NextUIProvider>
  );
}
