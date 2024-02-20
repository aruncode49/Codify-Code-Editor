import { Boxes } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-1.5 p-1 cursor-pointer text-2xl sm:text-3xl">
      <Boxes className="text-primary" />
      <h1 className="font-bold">Codify</h1>
    </div>
  );
};

export default Logo;
