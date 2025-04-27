export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="container m-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="mx-auto max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl leading-[1.208] font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                App 1
              </h2>
              <p className="text-base text-body-color dark:text-white">
                <a href="/test">Open App1</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
