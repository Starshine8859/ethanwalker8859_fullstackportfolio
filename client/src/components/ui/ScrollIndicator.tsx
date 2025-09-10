import { useScrollPosition } from "../../hooks/useScrollPosition";

export default function ScrollIndicator() {
  const scrollY = useScrollPosition();
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = Math.min((scrollY / documentHeight) * 100, 100);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}
