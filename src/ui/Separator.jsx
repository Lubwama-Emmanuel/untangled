export default function Separator({ isMarginBottom = true }) {
  const base = "m-auto mt-14 h-[2px] max-w-[90%] bg-[#434343]";
  const marginHere = base + " mb-14";
  return <div className={isMarginBottom ? `${marginHere}` : `${base}`}></div>;
}
