import React, { ReactNode } from "react";

const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "text-gray-800 dark:text-gray-200";

  const styles: { [key in keyof JSX.IntrinsicElements]?: string } = {
    h1: "text-4xl font-bold leading-[44px]",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    p: "text-base leading-[1.4rem]",
    blockquote: "pl-4 border-l-4 border-gray-300 dark:border-gray-600 italic",
    ul: "list-disc list-inside mb-2",
    ol: "list-decimal list-inside mb-2",
    a: "text-blue-500 hover:underline",
  };

  const componentStyle = styles[Component as keyof JSX.IntrinsicElements] || "";

  /* Fix specificity of custom classNames */
  return (
    <Component
      className={`${className} ${componentStyle} ${baseStyles}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  [key: string]: any; // Allows for additional props
}
