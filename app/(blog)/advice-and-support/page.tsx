import Link from "next/link";

export default function AdviceAndSupport() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">
        Advice & Support
      </h2>
      <p>
        If you dont have time to attend one of our in depth training courses
        some quick guides that you might find useful.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/report-writing "
          >
            Report Writing
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 hover:text-blue-400"
            href="/safety-measures-in-the-workplace"
          >
            Safety measures in the workplace
          </Link>
        </li>
      </ul>
    </>
  );
}
