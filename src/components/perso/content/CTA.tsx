export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Devenez libre
            <br />
            Commencez votre activité dans les meilleuirs conditions
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#form"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Commencer
            </a>
            <a
              href="#form"
              className="text-sm font-semibold leading-6 text-white"
            >
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#111827" />
            <stop offset={1} stopColor="#1e3a8a" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
