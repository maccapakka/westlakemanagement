import Image from "next/image";

export default function PhysicalIntervention() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">
        Physical Intervention
      </h2>
      <p>
        On occasions staff are required to make physical contact with clients in
        order to move them for their own or other person’s safety. At these
        times staff cannot simply pull, push or shove individuals – they must
        move clients with consideration to moral, ethical and legal rights.
      </p>
      <p>
        Westlake are able to provide high quality training in such specialist
        skills as moving and escorting as well as skills for personal safety and
        the safety of others.
      </p>
      <p>
        All training is carried out with an appreciation that any use of force
        is a last resort and if applied must be done so with minimal contact and
        at a reasonable level justifiable under the law.
      </p>
      <p>
        All the training techniques are medically assessed and full risk
        assessments have been carried out to ensure that the techniques are as
        harm free as possible. The course content includes a full understanding
        of the law, reasonable force, report writing and personal safety issues
        related to this area.
      </p>
      <p>
        In these litigious times it quickly pays to have highly trained staff
        who need to make physical contact well trained in all aspects of
        Physical Intervention.
      </p>
      <Image
        className="rounded mx-auto block"
        src="/physical-intervention.jpeg"
        width="300"
        height="272"
        alt=""
      />
    </>
  );
}
