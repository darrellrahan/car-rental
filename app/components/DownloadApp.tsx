import Image from "next/image";
import Link from "next/link";
import React from "react";

function DownloadApp() {
  return (
    <section id="download">
      <div className="text-center lg:text-left lg:bg-[url('/images/download-bg.png')] lg:bg-no-repeat lg:bg-cover lg:bg-top py-8 lg:py-16">
        <div className="mb-16 mx-8 lg:mx-28 space-y-8 lg:space-y-10 lg:max-w-2xl">
          <div>
            <h1 className="text-[2.75rem] font-bold leading-tight">
              Download our app to get most out of it
            </h1>
          </div>
          <div>
            <p className="text-custom-grey text-[0.9rem] lg:text-base">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div>
              <Link href="https://play.google.com/store/games?device=windows">
                <Image
                  src="/svg/google-play.svg"
                  alt="google play"
                  width={225}
                  height={225}
                  className="m-auto"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.apple.com/app-store/">
                <Image
                  src="/svg/app-store.svg"
                  alt="app store"
                  width={225}
                  height={225}
                  className="m-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
