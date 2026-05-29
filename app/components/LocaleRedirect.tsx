import { LOCALES, routePath, withBasePath } from "../lib/seo";

type Props = {
  segment?: string;
};

function buildRedirectScript(segment?: string) {
  return `(() => {
    const supported = new Set(${JSON.stringify(LOCALES)});
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

    const target = ${JSON.stringify(withBasePath("/"))} + locale + ${JSON.stringify(
      segment ? `/${segment}/` : "/",
    )};
    if (window.location.pathname !== target) {
      window.location.replace(target + window.location.search + window.location.hash);
    }
  })();`;
}

export function LocaleRedirect({ segment }: Props) {
  const target = routePath("en", segment || "");

  return (
    <main className="root-redirect-shell" aria-hidden="true">
      <script dangerouslySetInnerHTML={{ __html: buildRedirectScript(segment) }} />
      <div className="root-redirect-card">
        <p className="root-redirect-copy">Redirecting to miros...</p>
        <a href={target}>Continue</a>
      </div>
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
      </noscript>
    </main>
  );
}
