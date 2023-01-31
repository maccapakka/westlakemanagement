import Image from "next/image";

export default function SafetyMeasures() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-slate-900">Get in Touch</h2>
      <p>
        If you are in your organisation is in need of conflict management
        training you can get in touch via the below
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Phone</h3>
          <p>07759830418</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Email</h3>
          <a
            className="text-blue-500 hover:text-blue-400"
            href="mailto:chris@westlakemanagement.com"
          >
            chris@westlakemanagement.com
          </a>
        </div>
        <div>
          <p>
            You can also find Chris on{" "}
            <a
              className="text-blue-500 hover:text-blue-400"
              href="https://www.linkedin.com/in/chris-kirkpatrick-577a6a25/"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
