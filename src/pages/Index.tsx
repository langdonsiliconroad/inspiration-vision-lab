import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

const KIOSK_ID = "F7F71F04-3660-1C31-92FD-F229BFF2B8EF";

const API_BASE_URL = (import.meta.env.VITE_PROPERTY_API_BASE_URL ?? "").replace(/\/$/, "");

const endpointPath = `/api/public/properties/by-kiosk/${KIOSK_ID}/frontend-data`;
const endpoint = API_BASE_URL ? `${API_BASE_URL}${endpointPath}` : endpointPath;

type JsonRecord = Record<string, unknown>;

const helpText = [
  "If this is local development, use the Vite proxy endpoint (no VITE_PROPERTY_API_BASE_URL) and run:",
  "npm run dev -- --host 127.0.0.1 --port 8080",
  "Also ensure your API is reachable at the proxy target (default: http://127.0.0.1:5000).",
].join("\n");

const fetchFrontendData = async () => {
  let response: Response;

  try {
    response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
      },
    });
  } catch {
    throw new Error(`Network error while requesting ${endpoint}.\n\n${helpText}`);
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch landing page data (${response.status}) from ${endpoint}.`);
  }

  return response.json() as Promise<unknown>;
};

const normalize = (value: string) => value.replace(/[^a-z0-9]/gi, "").toLowerCase();

const getFirstValue = (input: unknown, keys: string[]): unknown => {
  if (!input || typeof input !== "object") return undefined;

  const wanted = new Set(keys.map(normalize));
  const queue: unknown[] = [input];

  while (queue.length > 0) {
    const current = queue.shift();

    if (Array.isArray(current)) {
      queue.push(...current);
      continue;
    }

    if (!current || typeof current !== "object") {
      continue;
    }

    for (const [key, value] of Object.entries(current as JsonRecord)) {
      if (wanted.has(normalize(key))) {
        return value;
      }

      if (value && typeof value === "object") {
        queue.push(value);
      }
    }
  }

  return undefined;
};

const toStringValue = (value: unknown) => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  return "";
};

const toStringList = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value
      .flatMap((item) => {
        if (typeof item === "string") return [item];
        if (item && typeof item === "object") {
          const label =
            toStringValue((item as JsonRecord).name) ||
            toStringValue((item as JsonRecord).title) ||
            toStringValue((item as JsonRecord).label) ||
            toStringValue((item as JsonRecord).value);
          return label ? [label] : [];
        }
        return [];
      })
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const toImageUrls = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];

  return value
    .flatMap((item) => {
      if (typeof item === "string") return [item];
      if (item && typeof item === "object") {
        const src =
          toStringValue((item as JsonRecord).url) ||
          toStringValue((item as JsonRecord).src) ||
          toStringValue((item as JsonRecord).image_url);
        return src ? [src] : [];
      }
      return [];
    })
    .filter(Boolean);
};

const Index = () => {
  const { data, isPending, error, refetch, isFetching } = useQuery({
    queryKey: ["frontend-data", endpoint],
    queryFn: fetchFrontendData,
    retry: false,
  });

  const viewModel = useMemo(() => {
    const title =
      toStringValue(getFirstValue(data, ["property_title", "title", "name"])) || "Property";

    const street = toStringValue(getFirstValue(data, ["property_street", "street", "address_line_1"]));
    const suburb = toStringValue(getFirstValue(data, ["property_suburb", "suburb", "city", "town"]));
    const state = toStringValue(getFirstValue(data, ["property_state", "state", "region"]));
    const postcode = toStringValue(getFirstValue(data, ["property_postcode", "postcode", "zip", "zip_code"]));
    const country = toStringValue(getFirstValue(data, ["property_country", "country"]));
    const address = [street, suburb, state, postcode, country].filter(Boolean).join(", ");

    const subtitle =
      toStringValue(getFirstValue(data, ["tagline", "subtitle", "short_description"])) ||
      "Live data from the property frontend API";

    const description =
      toStringValue(getFirstValue(data, ["property_description", "description", "about", "summary"])) ||
      "No description available.";

    const features = toStringList(
      getFirstValue(data, ["features", "property_features", "amenities", "highlights"]),
    );

    const houseRules = toStringList(getFirstValue(data, ["house_rules", "rules", "things_to_note"]));

    const images = toImageUrls(getFirstValue(data, ["property_images", "images", "gallery"]));

    const hostName = toStringValue(getFirstValue(data, ["host_name", "owner_name", "manager_name"]));

    return { title, address, subtitle, description, features, houseRules, images, hostName };
  }, [data]);

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b bg-card px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-3">
          <h1 className="text-3xl font-bold sm:text-4xl">{viewModel.title}</h1>
          {viewModel.address ? <p className="text-muted-foreground">{viewModel.address}</p> : null}
          <p className="text-sm text-muted-foreground">{viewModel.subtitle}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-8">
        <section className="rounded-lg border bg-card p-6">
          {isPending ? (
            <p className="text-muted-foreground">Loading landing page data…</p>
          ) : error instanceof Error ? (
            <div className="space-y-3">
              <p className="whitespace-pre-line text-red-600">{error.message}</p>
              <button
                className="rounded-md border px-4 py-2 text-sm transition hover:bg-accent"
                onClick={() => refetch()}
                type="button"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="text-muted-foreground">{viewModel.description}</p>
              </section>

              {viewModel.features.length > 0 ? (
                <section className="space-y-2">
                  <h2 className="text-xl font-semibold">Features</h2>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {viewModel.features.map((feature) => (
                      <li className="rounded-md border bg-background px-3 py-2 text-sm" key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {viewModel.images.length > 0 ? (
                <section className="space-y-2">
                  <h2 className="text-xl font-semibold">Gallery</h2>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {viewModel.images.slice(0, 6).map((imageUrl) => (
                      <img
                        alt={viewModel.title}
                        className="h-48 w-full rounded-md object-cover"
                        key={imageUrl}
                        loading="lazy"
                        src={imageUrl}
                      />
                    ))}
                  </div>
                </section>
              ) : null}

              {viewModel.houseRules.length > 0 ? (
                <section className="space-y-2">
                  <h2 className="text-xl font-semibold">Things to note</h2>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {viewModel.houseRules.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {viewModel.hostName ? (
                <section className="space-y-2">
                  <h2 className="text-xl font-semibold">Host</h2>
                  <p className="text-muted-foreground">Hosted by {viewModel.hostName}</p>
                </section>
              ) : null}
            </div>
          )}
        </section>

        <footer className="text-xs text-muted-foreground">
          <p className="break-all">Source: {endpoint}</p>
          <p>{isFetching ? "Refreshing data…" : "Data loaded from the configured API endpoint."}</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
