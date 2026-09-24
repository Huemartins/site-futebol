import { extras, storePrices } from "@/lib/fc27";

const familyLabel = {
  playstation: "PlayStation",
  xbox: "Xbox",
  pc: "PC",
  nintendo: "Nintendo",
} as const;

const familyColor = {
  playstation: "text-pitch",
  xbox: "text-pitch",
  pc: "text-pitch",
  nintendo: "text-red-400",
} as const;

export function PriceMatrix() {
  return (
    <div>
      <div className="overflow-x-auto rounded-3xl border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-white/5 text-muted">
            <tr>
              <th className="px-4 py-3">Loja</th>
              <th className="px-4 py-3">Standard</th>
              <th className="px-4 py-3">Ultimate</th>
              <th className="px-4 py-3">Ultimate Plus</th>
              <th className="px-4 py-3">O que muda</th>
            </tr>
          </thead>
          <tbody>
            {storePrices.map((row) => (
              <tr key={row.store} className="border-t border-line align-top">
                <td className="px-4 py-4">
                  <p className={`text-xs uppercase tracking-[0.16em] ${familyColor[row.family]}`}>
                    {familyLabel[row.family]}
                  </p>
                  <p className="mt-1 font-medium text-white">{row.store}</p>
                </td>
                <td className="px-4 py-4 font-display text-lg text-white">{row.standard}</td>
                <td className="px-4 py-4 font-display text-lg text-white">{row.ultimate}</td>
                <td className="px-4 py-4 font-display text-lg text-pitch">{row.plus}</td>
                <td className="px-4 py-4 text-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {extras.map((item) => (
          <div key={item.title} className="rounded-2xl border border-line bg-panel p-4">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-xs leading-5 text-muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
