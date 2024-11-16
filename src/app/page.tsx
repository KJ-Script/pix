import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-inherit">
      <div className=" h-[90%] flex justify-center items-center">
        <div>
          <p className="font-[family-name:var(--font-geist-sans)] text-[90px] font-bold p-8 bg-black text-white text-center">
            Pix
          </p>
          <div className="flex text-[55px] space-x-14 w-full justify-center py-5">
            <Link
              href="/upload"
              className="hover:text-purple-500 hover:underline"
            >
              upload
            </Link>
            <p>or</p>
            <Link
              href="/view"
              className="hover:text-purple-500 hover:underline"
            >
              browse
            </Link>
          </div>
        </div>
      </div>

      <footer className="flex justify-center">
        this shi was made by{" "}
        <Link
          href="/https://github.com/KJ-Script"
          className="hover:text-purple-500 hover:underline"
        ></Link>
        me
      </footer>
    </div>
  );
}
