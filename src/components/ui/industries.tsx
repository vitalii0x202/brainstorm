"use client";
import { cn } from "@/lib/utils";

export function TextComponent({
  number,
  title,
  content,
  isOpen,
  index,
  icon: Icon,
  loadingWidthPercent,
  color
}: Readonly<{
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  index: number;
  color: string;
  loadingWidthPercent?: number;
  icon?: any
}>) {

  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border overflow-hidden w-full  ",
        isOpen
          ? "border-neutral-500/10 bg-gradient-to-b from-neutral-200/15 to-neutral-200/5 dark:border-neutral-500/15 dark:from-neutral-600/15 dark:to-neutral-500/0 dark:shadow-[2px_4px_25px_0px_rgba(248,248,248,0.06)_inset] "
          : " border-transparent opacity-50 saturate-0"
      )}
    >
      <div className="flex w-full items-center gap-4 p-4 ">
        <div
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-black"
          style={{ backgroundColor: color }}
        >
          {Icon && <Icon size={20} />}
        </div>
        <h2
          className="text-left text-lg 2xl:text-[1.12rem] font-semibold tracking-wide capitalize"
          style={{ color: color }}
        >
          {title}
        </h2>
      </div>
      <div
        className={`w-full overflow-hidden text-left text-neutral-600 transition-all duration-500 animate-in fade-in-0 dark:text-neutral-200" ${isOpen ? " max-h-[7rem]" : "max-h-0 h-full"
          } `}
      >
        <p className="p-4 pt-1 text-[.9rem] 2xl:text-[.95rem] text-[#c2c2c2]">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className="absolute left-0 top-0 h-1"
              style={{
                backgroundColor: color,
                width: `${loadingWidthPercent}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
