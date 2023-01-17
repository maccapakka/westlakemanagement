import Image from "next/image";

export default function Biography() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">Biography</h2>
      <div className="font-bold text-slate-900">
        <h3>Chris Kirkpatrick (MICM)</h3>
        <h3>Member Of The Institute Of Conflict Management.</h3>
      </div>
      <p>
        Chris Kirkpatrick has experience as an independent member of Cheshire
        Police Authority as well as being a member of the independent board of
        management of the UK’s largest Category C prison.
      </p>
      <p>
        The exposure and access that Chris has across the Criminal Justice
        system means that he is able to keep up to date with thinking and
        interpretation in the field of managing violence and aggression.
      </p>
      <p>
        Chris is a Conflict Management, Physical Intervention & Tactical Self
        Defence instructor, as well as providing training in Stress Awareness,
        Armed Robbery Safety and Basic Health & Safety.
      </p>
      <p>
        Chris is qualified by the NHS, BIIAB and is the Conflict Management and
        Physical Intervention instructor with the Chartered Institute of Housing
      </p>
      <section>
        <Image src="/logos.gif" width="295" height="56" alt="" />
      </section>
    </>
  );
}
