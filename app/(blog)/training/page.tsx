import Link from "next/link";

export default function Training() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">
        Conflict Management
      </h2>
      <p>
        More and more of our workforce are facing verbal assault on a daily
        basis – whilst just doing their job. We all think of the easy example
        like traffic wardens – but what about nurses, doctors, call centre
        staff, teachers….the list is endless.
      </p>
      <p>
        The conflict management course puts violence into perspective and
        explains the triggers that can start an incident. In hindsight
        flashpoints could often have been predicted if we only knew the signs.
      </p>
      <p>
        If a member of staff is being abused we teach how that employee can
        dissolve the aggression and should the situation deteriorate, extricate
        themselves from a verbal or violent and at the very least, upsetting
        situation.
      </p>
      <p>
        Verbal assault can have a greater impact upon you than physical assault.
        Physical attacks bring sympathy and understanding, whilst verbal attacks
        just leave the victim being told “Ignore it – it meant nothing” – not
        easy to do when you are on the receiving end.
      </p>
      <p>
        Learn the skills to turn anger into positive action and stop your staff
        being verbally assaulted.
      </p>
      <h2 className="text-3xl font-semibold text-slate-900">Training</h2>
      <p>
        We provide a range of training in addition to our conflict management
        ranging from stress management and bereavement to breakaway personal
        protection.
      </p>

      <p>
        We aim to ensure that attendees for our course are engaged throughout
        the day and come away having both enjoyed the session and learned some
        important new skills.
      </p>

      <ul className="list-disc list-inside">
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/armed-self-defence"
          >
            Armed Self Defence
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/breakaway-personal-protection"
          >
            Breakaway Personal Protection Safety
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/armed-robbery-safety"
          >
            Armed Robbery Safety
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/physical-intervention"
          >
            Physical Intervention
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/health-and-safety"
          >
            Health and Safety
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/stress-awareness"
          >
            Stress Awareness
          </Link>
        </li>
      </ul>
    </>
  );
}
