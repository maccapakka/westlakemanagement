import Image from "next/image";

export default function SafetyMeasures() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">
        Safety Measures in the Workplace
      </h2>
      <ol className="list-disc list-inside">
        <li>Consider the layout office, and how you can make a quick exit.</li>
        <li>
          Position the visitor in a position where they are not between yourself
          and the door.
        </li>
        <li>Prepare the meeting room and clear objects/potential weapons.</li>
        <li>Let people know where you are in the building.</li>
      </ol>
    </>
  );
}
