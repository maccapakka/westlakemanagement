import Image from "next/image";

export default function StressAwareness() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">
        Stress Awareness
      </h2>
      <p>
        “Stress costs your company £2000 per employee per year” Dr V Coleman,
        Stress Management Techniques
      </p>
      <p>
        2 in 3 people suffer from stress at work and stress causes more staff
        absences than the common cold Investors in People Survey
      </p>
      <Image
        className="mx-auto rounded"
        src="/stress-awareness.jpeg"
        width="225"
        height="300"
        alt=""
      />
      <p>
        Your company’s biggest hidden asset is the people it employs. Learn how
        to take care of your employees, reduce their exposure to stress and you
        will undoubtedly improve the efficiency and profitability of your
        organisation.
      </p>
      <p>
        As an employer you have a statutory duty under the Management of Health
        and Safety at Work Regulations 1999, to regularly assess potential risks
        to the health of your employees. This includes taking steps to ensure
        they do not suffer stress related illness as a result of their work.
      </p>
      <p>
        The HSE estimates 6.5 million lost working days per year, costing UK
        business £370 million.
      </p>
      <p>
        Westlake’s Stress Management Courses are tailored to your organisational
        needs and offer you the chance to:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Understand and recognise the signs of stress</li>
        <li>To look at the causes of stress</li>
        <li>How it affects your employee and business</li>
        <li>And help you to manage your stress</li>
      </ul>
      <p>
        Stress will affect all of us at some time in our lives, but Westlake’s
        Stress Management course will equip you with the knowledge that there is
        something you can do and that the benefits of taking positive actions to
        manage your employees stress will reap its own rewards.
      </p>
      <p>Act now, call Westlake for more information and course details.</p>
    </>
  );
}
