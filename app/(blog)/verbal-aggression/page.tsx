import Image from "next/image";

export default function VerbalAggression() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">
        Verbal Aggression (Face to Face and Telephone)
      </h2>
      <p>
        Some roles sadly come with conflict and many staff already have the
        ‘everyday’ skills to manage customer issues.
      </p>
      <p>
        On occasion staff face issues either face to face or on the telephone
        which require specific skills to defuse the anger and bring the
        situation down to a point where they can then apply their customer care
        skills.
      </p>
      <Image
        className="mx-auto rounded"
        src="/verbal-aggression.jpeg"
        width="300"
        height="300"
        alt=""
      />
      <p>
        It is not until you can calm your contact down and enable interaction
        that your message and their solution can be heard.
      </p>
      <p>
        The course gives many simple psychological techniques to achieve and
        develop communication in anger situations, passing through ‘everyday’
        and into extreme circumstances.
      </p>
      <p>
        The course further puts staff back in control of the situation and
        supports them as they face such difficulties on an all too regular
        basis.
      </p>
    </>
  );
}
