interface SectionWrapperProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export default function SectionWrapper({ children, fullWidth = false, className = "" }: SectionWrapperProps) {
  return (
    <div className={`flex-1 pb-10 ${fullWidth ? "" : "flex justify-center items-center"} ${className}`}>
      <div className={fullWidth ? "w-full" : "w-full max-w-7xl"}>
        {children}
      </div>
    </div>
  );
}
