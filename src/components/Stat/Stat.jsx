import StatLogo from "../Stat/StatLogo";
import StatContent from "../Stat/StatContent";

export default function Stat() {
  return (
    <div className="">
      <div className="text-center custom-screen ">
        <div className="max-w-2xl md:mx-auto">
          {/* Stat Header */}
          <StatLogo />

          {/* Stat Content */}
          <StatContent />
        </div>
      </div>
    </div>
  );
}
