import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="container m-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-10">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl leading-[1.208] font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Animal Ink Project
              </h2>
              <p className="text-base text-body-color dark:text-white">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
