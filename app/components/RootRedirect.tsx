import { DEFAULT_LOCALE, withBasePath } from "../lib/seo";

const REDIRECT_SCRIPT = `(() => {
  const supported = new Set(["en", "fr", "de", "it"]);
  const languages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];

  let locale = "en";

  for (const language of languages) {
    const normalized = String(language).toLowerCase().split("-")[0];
    if (supported.has(normalized)) {
      locale = normalized;
      break;
    }
  }

  const target = ${JSON.stringify(withBasePath("/"))} + locale + "/";
  if (window.location.pathname !== target) {
    window.location.replace(target + window.location.search + window.location.hash);
  }
})();`;

export function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: REDIRECT_SCRIPT }} />
      <main className="root-redirect-shell" aria-hidden="true">
        <div className="root-redirect-card">
          <img
            className="root-redirect-logo"
            src={withBasePath("/images/cropped-B1_noBG-70x75.png")}
            alt=""
            width="70"
            height="75"
          />
          <img
            className="root-redirect-pod"
            src={withBasePath("/images/miros_wp_cloud.png")}
            alt=""
            width="360"
            height="275"
          />
        </div>
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=${withBasePath(`/${DEFAULT_LOCALE}/`)}`} />
        </noscript>
      </main>
    </>
  );
}
