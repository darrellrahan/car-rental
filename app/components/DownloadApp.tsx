import Image from "next/image";
import Link from "next/link";
import React from "react";

function DownloadApp() {
  return (
    <div className="p-8 my-16 space-y-8 text-center">
      <div>
        <h1 className="text-5xl font-bold leading-tight">Download our app</h1>
      </div>
      <div>
        <p className="text-custom-grey text-[0.9rem]">
          Download our app to get the most out of it!
        </p>
      </div>
      <div>
        <Link href="https://play.google.com/store/games?device=windows">
          <Image
            src="/svg/google-play.svg"
            alt="google play"
            width={200}
            height={200}
            className="m-auto"
          />
        </Link>
      </div>
      <div>
        <Link href="https://www.apple.com/app-store/">
          <Image
            src="/svg/app-store.svg"
            alt="app store"
            width={200}
            height={200}
            className="m-auto"
          />
        </Link>
      </div>
    </div>
  );
}

export default DownloadApp;
