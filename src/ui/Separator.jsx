export default function Separator({ isMarginBottom = true, style }) {
  const base = `hidden sm:block m-auto mt-14 h-[2px] max-w-[90%] bg-[#434343] + ${style}`;
  const marginHere = base + " mb-14";
  return <div className={isMarginBottom ? `${marginHere}` : `${base}`}></div>;
}
