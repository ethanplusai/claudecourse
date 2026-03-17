import { prisma } from "@/lib/db";
import { redirect, notFound } from "next/navigation";
import { TemplateForm } from "../template-form";

export default async function TemplateEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const template = await prisma.nurtureTemplate.findUnique({ where: { id } });
  if (!template) notFound();

  async function updateTemplate(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const slug = formData.get("slug") as string;
    const channel = formData.get("channel") as string;
    const subject = formData.get("subject") as string | null;
    const body = formData.get("body") as string;
    const variablesRaw = formData.get("variables") as string;
    const variables = variablesRaw
      ? variablesRaw.split(",").map((v) => v.trim()).filter(Boolean)
      : [];

    await prisma.nurtureTemplate.update({
      where: { id },
      data: { name, slug, channel, subject: channel === "email" ? subject : null, body, variables },
    });

    redirect("/portal/admin/templates");
  }

  async function deleteTemplate() {
    "use server";
    await prisma.nurtureTemplate.delete({ where: { id } });
    redirect("/portal/admin/templates");
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">
        Edit Template
      </h1>
      <TemplateForm
        template={{
          name: template.name,
          slug: template.slug,
          channel: template.channel,
          subject: template.subject || "",
          body: template.body,
          variables: template.variables.join(", "),
        }}
        saveAction={updateTemplate}
        deleteAction={deleteTemplate}
      />
    </div>
  );
}
