import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full mx-auto px-4 justify-center text-left flex-1 max-w-(--fd-layout-width)">
      <h1 className="text-6xl font-medium mb-4 w-full mx-auto ">
        The Topshelf Documentation
      </h1>
      <p className="w-2xl mb-4">
        <span className="text-red-500">TS Docs</span> is a documentation webpage
        that provides valuable information about the Topshelf ERP system and how
        it operates. Give it a try – Ask the AI if you have any questions!.
      </p>
      <Link href="/docs">
        <button
          type="button"
          className="rounded-md bg-red-500 py-1 px-1.5 w-28 h-11 text-xs font-normal text-white shadow-xs hover:bg-red-600 hover:font-medium hover:cursor-pointer transition-all"
        >
          <span className="">Explore the docs</span>
        </button>
      </Link>
    </div>
  );
}
