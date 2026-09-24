import { PageHud } from "@/components/page-hud";

export function ComingSoon({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <PageHud kicker={kicker} title={title}>
        {text}
      </PageHud>
      <p className="hud-card border border-line bg-panel p-5 text-sm leading-6 text-muted">
        Esta etapa ainda não está ligada. O portal e a plataforma (fases 1 e 2) seguem abertos.
      </p>
    </section>
  );
}
