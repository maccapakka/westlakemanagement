import Link from "next/link";

export default function Training() {
  return (
    <>
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
