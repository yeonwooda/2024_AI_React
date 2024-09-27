export type LankNumProps = {
  lankNum: number;
};

const LankNum = ({ lankNum }: LankNumProps) => {
  return (
    <span className="w-5 text-sm text-gray-500 flex items-center">
      {lankNum}
    </span>
  );
};

export default LankNum;
