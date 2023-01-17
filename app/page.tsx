import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const footerContent = [
  {
    title: "Training",
    image: "/training.jpeg",
    content:
      "We provide a range of training in addition to our conflict management ranging from stress management and bereavement to breakaway personal protection. We aim to...",
  },
  {
    title: "Advice and Support",
    image: "/support.jpeg",
    content:
      "If you dont have time to attend one of our in depth training courses some quick guides that you might find useful. Report Writing  Safety...",
  },
  {
    title: "About Us",
    image: "/about.jpeg",
    content:
      "All training is bespoke and written with and for you. Training is constantly monitored and updated with research and ongoing evaluation to ensure best value...",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-[1124px]">
      <div
        className="rounded bg-overlay bg-cover min-h-[500px] flex"
        style={{
          //@ts-ignore-next-line
          "--overlay-image": "url('/hero.jpeg')",
          "--overlay-colors": "rgba(0, 0, 0, .7), rgba(0, 0, 0, .2)",
        }}
      >
        <div className="p-10 text-white space-y-3 lg:w-3/4 self-end">
          <h1 className="text-3xl lg:text-5xl font-bold lg:leading-tight">
            <span className="font-normal">The UK’s Leading Authority in </span>
            Conflict Management & Physical Intervention{" "}
            <span className="font-normal">Training.</span>
          </h1>
          <p>
            Westlake supplies high quality training to staff at risk in the
            public and voluntary sector, industry, education, medical and
            housing.
          </p>
          <p className="font-semibold">
            Detect, Deter, Defend, Depart from Danger
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col gap-8 mt-2 py-12">
        {footerContent.map((i) => (
          <div className="grid grid-flow-row gap-4 relative" key={i.title}>
            <Image
              className="object-cover rounded block w-auto h-[260px]"
              src={i.image}
              width="300"
              height="300"
              priority
              alt={i.title}
            />
            <div className="grid grid-flow-row gap-2 lg:gap-4">
              <h2 className="text-2xl text-slate-900 font-semibold">
                {i.title}
              </h2>
              <p>{i.content}</p>
              <a className="inline-block text-blue-500 font-semibold" href="/">
                Read More...
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
