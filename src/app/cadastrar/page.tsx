import { FutzoneLogo } from "@/components/futzone-logo";
import { RegisterForm } from "@/components/auth-forms";
import { getSessionUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Criar conta",
  description: "Cadastre-se na FUTZONE.",
};

export default async function CadastrarPage() {
  const user = await getSessionUser();
  if (user) redirect("/conta");

  return (
    <section className="mx-auto max-w-md px-4 py-12 md:px-6">
      <div className="mb-8 text-center">
        <FutzoneLogo className="justify-center" />
        <h1 className="font-display mt-6 text-4xl text-white">Criar conta</h1>
        <p className="mt-3 text-sm text-muted">
          Nome, e-mail, senha e plataforma. Depois você já entra no site e pode cadastrar o time.
        </p>
      </div>
      <RegisterForm />
    </section>
  );
}
