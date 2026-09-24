import { FutzoneLogo } from "@/components/futzone-logo";
import { LoginForm } from "@/components/auth-forms";
import { getSessionUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Entrar",
  description: "Entre na sua conta FUTZONE.",
};

export default async function EntrarPage() {
  const user = await getSessionUser();
  if (user) redirect("/conta");

  return (
    <section className="mx-auto max-w-md px-4 py-12 md:px-6">
      <div className="mb-8 text-center">
        <FutzoneLogo className="justify-center" />
        <h1 className="font-display mt-6 text-4xl text-white">Entrar</h1>
        <p className="mt-3 text-sm text-muted">
          Use o e-mail e a senha da sua conta para acompanhar o clube, os campeonatos e o virtual pro.
        </p>
      </div>
      <LoginForm />
    </section>
  );
}
