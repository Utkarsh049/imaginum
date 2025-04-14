import React from "react";
import right from '/right.svg'
interface CardProps {
  image: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl: string;
  buttonText?: string;
  imagePosition?: "left" | "right"; // new prop
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  subtitle,
  description,
  tags,
  liveUrl,
  buttonText = "View Website",
  imagePosition = "left", // default is left
}) => {
  const layoutDirection =
    imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div
      className={`
      rounded-2xl p-6 shadow-xl flex flex-col ${layoutDirection} 
      gap-6 w-[84vw] mx-auto md:mt-24 mt-12 text-white bg-[#616161] bg-opacity-10
       backdrop-blur-sm border border-white/20`}
    >
      <img
        src={image}
        alt="project"
        className="w-full md:w-1/2 rounded-xl object-cover"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="lg:text-5xl text-2xl font-semibold leading-loose font-figtree">
            {name}{" "}<br/>
            <span className="text-[#6683C1] font-normal">{subtitle}</span>
          </h2>
          <p className="md:text-2xl text-white font-sora font-light mt-6 tracking-wide">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className=" px-6 py-1 text-xs rounded-full border border-[#98BEFF]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[linear-gradient(180deg,_rgba(0,0,0,0)_-40.91%,_#002094_132.95%)] px-6 py-3 font-sans rounded-lg text-sm font-medium transition border-[#ffffff] border-opacity-20 border-2   shadow-[inset_0px_14.04px_42.12px_0px_#497BFFB2,_0px_14.04px_56.16px_0px_#3F4AAF80] 
  backdrop-blur-[28.07938575744629px] "
          >
            <div className="flex justify-center items-center gap-2">
            {buttonText}
            <img src={right} alt="#" className="h-4" />
            </div>
          </a>
          <span className="text-green-400 text-sm">● Live</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
