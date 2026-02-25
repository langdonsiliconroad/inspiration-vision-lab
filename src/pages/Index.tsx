import { useQuery } from "@tanstack/react-query";

const KIOSK_ID = "F7F71F04-3660-1C31-92FD-F229BFF2B8EF";

const API_BASE_URL =
  import.meta.env.VITE_PROPERTY_API_BASE_URL ?? "http://103.230.158.111";

const endpoint = `${API_BASE_URL}/api/public/properties/by-kiosk/${KIOSK_ID}/frontend-data`;

const fetchFrontendData = async () => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch landing page data (${response.status})`);
  }

  return response.json() as Promise<unknown>;
};

const Index = () => {
  const { data, isPending, error, refetch, isFetching } = useQuery({
    queryKey: ["frontend-data", endpoint],
    queryFn: fetchFrontendData,
  });

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Landing Page Data Feed
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Property Frontend JSON
          </h1>
          <p className="break-all text-sm text-slate-300">Source: {endpoint}</p>
        </header>

        <section className="rounded-lg border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40 sm:p-6">
          {isPending ? (
            <p className="text-slate-300">Loading landing page data…</p>
          ) : error instanceof Error ? (
            <div className="space-y-3">
              <p className="text-red-300">{error.message}</p>
              <button
                className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-sm transition hover:bg-slate-700"
                onClick={() => refetch()}
                type="button"
              >
                Retry
              </button>
            </div>
          ) : (
            <pre className="max-h-[70vh] overflow-auto rounded-md bg-slate-950 p-4 text-xs leading-relaxed text-slate-100 sm:text-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </section>

        <footer className="text-xs text-slate-400">
          {isFetching ? "Refreshing data…" : "Data loaded from the configured API endpoint."}
        </footer>
      </div>
    </main>
  );
};

export default Index;
