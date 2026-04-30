import Image from "next/image";

import { APPLE_APP_URL, GOOGLE_PLAY_URL } from "../lib/content";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function StoreBadges() {
  return (
    <div className="store-badges" aria-label="App stores">
      <a
        className="store-badge store-badge-apple"
        href={APPLE_APP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Apple App Store"
      >
        <Image
          src={`${BASE_PATH}/images/badge-app-store.svg`}
          alt="Download on the App Store"
          width={170}
          height={52}
        />
      </a>
      <a
        className="store-badge store-badge-google"
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Google Play Store"
      >
        <Image
          src={`${BASE_PATH}/images/badge-google-play.png`}
          alt="Get it on Google Play"
          width={170}
          height={52}
        />
      </a>
    </div>
  );
}
