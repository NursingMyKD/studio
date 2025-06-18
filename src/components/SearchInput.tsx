
"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import type { ChangeEvent, HTMLProps } from "react";
import { cn } from "@/lib/utils"; // Added this import

interface SearchInputProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'type'> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  containerClassName?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search topics, systems, or protocols...",
  className,
  containerClassName,
  ...props
}: SearchInputProps) {
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn("relative w-full", containerClassName)}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className={cn("w-full pl-10 pr-4 py-3 text-base rounded-lg border-2 bg-background border-border focus:border-primary transition-colors", className)}
        aria-label={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}

