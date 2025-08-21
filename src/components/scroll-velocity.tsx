interface ScrollProps {
  texts: string[]
}

export default function ScrollVelocityText( {texts}: ScrollProps ) {
  return (
    <div
      className="relative w-full overflow-hidden bg-foreground py-10 flex justify-center inset-shadow-sm inset-shadow-indigo-500/50">
      <div className="flex gap-8 text-3xl md:text-5xl font-extrabold text-background eagle-lake-regular">
        {texts.map((txt, index) => (
          <div key={index} className="">
            {txt}
          </div>
        ))}
      </div>
    </div>
  );
}
