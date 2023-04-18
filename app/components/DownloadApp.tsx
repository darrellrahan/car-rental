import Image from "next/image";
import Link from "next/link";
import React from "react";

function DownloadApp() {
  return (
    <section id="download">
      <div className="p-8 my-16 space-y-8 text-center">
        <div>
          <h1 className="text-[2.75rem] font-bold leading-tight">
            Download our app to get most out of it
          </h1>
        </div>
        <div>
          <p className="text-custom-grey text-[0.9rem]">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
        </div>
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
    </section>
  );
}

export default DownloadApp;
