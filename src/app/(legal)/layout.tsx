import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellex",
  description: " ",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
