interface techCardsProps {
  icon: string
  title: string
  description: string
  techStack: string[]
}

const techIcons: Record<string, string> = {
  react: "/react.svg",
  next: "/next.svg",
}

const TechCards = ({ icon, title, description, techStack }: techCardsProps) => {
  return (
    <div className="relative rounded-2xl p-[0.4px] w-full max-w-sm bg-[linear-gradient(52.48deg,#000000_45%,#9D9D9D_50%,#9D9D9D_100%)] shadow-lg  ">
      <div className="rounded-2xl bg-[linear-gradient(15.29deg,#000000_-18.99%,#0055FF_328.64%)] p-6 text-white ">
        <div className="bg-[#1F2B51] p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
          <img src={icon} alt="Icon" width={24} height={24} />
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <p className="text-sm text-gray-400 mb-1">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <div key={tech} className="flex items-center gap-1 bg-[#2B3551] rounded-md px-3 py-1 text-sm">
              <img src={techIcons[tech]} alt={tech} width={16} height={16} />
              <span className="capitalize">{tech} Js</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechCards