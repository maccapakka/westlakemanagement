import Image from "next/image";

export default function ReportWriting() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">Report Writing</h2>
      <ol className="list-decimal list-inside">
        <li>Write the report as soon after the incident as possible.</li>
        <li>The report must be Factual.</li>
        <li>Always assume the reader knows nothing of the incident</li>
        <li>Never use jargon or slang.</li>
        <li>Write in black ink as they will need to be photocopied.</li>
        <li>If you make a mistake draw a line through the words.</li>
        <li>Keep a precise record for yourself. (Medical or Legal)</li>
        <li>Record any witnesses on the incident form.</li>
        <li>Fill in all the boxes. (Time/location etc)</li>
        <li>Always draw a map.</li>
        <li>If you need more space – get some more paper.</li>
      </ol>
    </>
  );
}
