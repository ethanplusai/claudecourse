import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { TemplateForm } from "../template-form";

export default function NewTemplatePage() {
  async function createTemplate(formData: FormData) {
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

    await prisma.nurtureTemplate.create({
      data: {
        name,
        slug,
        channel,
        subject: channel === "email" ? subject : null,
        body,
        variables,
      },
    });

    redirect("/portal/admin/templates");
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">
        New Template
      </h1>
      <TemplateForm
        template={{ name: "", slug: "", channel: "email", subject: "", body: "", variables: "" }}
        saveAction={createTemplate}
      />
    </div>
  );
}
