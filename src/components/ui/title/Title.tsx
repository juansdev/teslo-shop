import {titleFont} from "@/config/fonts";

interface ITitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({title, subtitle, className}: ITitleProps) => {
  const elementSubtitle = subtitle ? <h3 className="text-xl mb-5">{subtitle}</h3> : <></>;
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-7`}>
        {title}
      </h1>
      {elementSubtitle}
    </div>
  );
}