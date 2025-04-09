const Light = ({ top, left }: { top: number; left: number }) => {
  return (
    <div className={`absolute top-[${top}rem] left-[${left}rem]`}>
      <div className="h-[40rem] w-[40rem] rounded-full bg-[#006fff] blur-[150px]"></div>
    </div>
  );
};

export default Light;