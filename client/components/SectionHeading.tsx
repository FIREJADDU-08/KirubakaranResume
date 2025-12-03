interface SectionHeadingProps {
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionHeading({
  subtitle,
  children,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {subtitle && (
        <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
          <span>⌨️</span> {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
        <span className="w-1 h-14 bg-primary rounded-full flex-shrink-0"></span>
        <div className="leading-tight">
          {typeof children === "string" ? (
            <span>
              {children.split(" ").map((word, i, arr) => (
                <span key={i}>
                  {word === arr[arr.length - 1] ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    <>{word} </>
                  )}
                </span>
              ))}
            </span>
          ) : (
            children
          )}
        </div>
      </h2>
    </div>
  );
}
