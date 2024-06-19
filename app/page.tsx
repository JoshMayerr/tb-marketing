import EntryForm from "@/components/entry-form";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-24 min-h-screen md:px-20 px-8">
        <div className="hidden md:flex md:col-span-3 flex-col justify-center border-r py-16">
          <div className="">
            <Image
              src={"logo.svg"}
              width={200}
              height={210}
              alt="Tollbit Logo"
            />
            <h3 className="text-sm mt-4 pl-1">
              TollBit is a tool for websites of all sizes to monitor, manage,
              and monitize AI bot traffic.
            </h3>
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="mt-12 mb-0">
            <Image
              src={"logo.svg"}
              width={140}
              height={80}
              alt="Tollbit Logo"
            />
            <h3 className="text-sm mt-4 pl-1">
              TollBit is a tool for websites of all sizes to monitor, manage,
              and monitize AI bot traffic.
            </h3>
          </div>
        </div>
        <div className="md:col-span-2 md:py-16">
          <div className="flex md:justify-center md:items-center md:h-full">
            <EntryForm />
          </div>
        </div>
      </div>
    </>
  );
}
