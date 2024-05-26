import React from "react";

interface PageTitleProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function PageTitle({ children, ...props }: PageTitleProps) {
  return (
    <h1 {...props} className={`font-bold text-4xl ${props.className}`}>
      {children}
    </h1>
  );
}
