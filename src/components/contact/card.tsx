interface ContactProps {
  icon: React.ReactNode;
  info: string;
}

export function CardInfo({ icon, info }: ContactProps) {
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-2 p-3">
      <div className="flex justify-center items-center rounded-full">
        {icon}
      </div>
      <p className="font-bold text-center">{info}</p>
    </div>
  );
}
