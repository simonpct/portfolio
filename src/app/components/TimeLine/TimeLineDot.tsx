import clsx from "clsx";

export const TimeLineDot: React.FC<{ blinking: boolean; type: "stop" | "terminus"; }> = ({ blinking, type }) => {
  return (
    <div
      className={clsx(
        "w-4 h-4 mt-1.5 rounded-full border-3 border-black z-10",
        type === "terminus" && "bg-black",
        type==="stop" && (blinking ? "bg-yellow-500" : "bg-white"),
      )}
    />
  );
};