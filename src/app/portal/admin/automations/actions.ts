"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function toggleAutomationActive(id: string, isActive: boolean) {
  await prisma.automation.update({ where: { id }, data: { isActive } });
  revalidatePath("/portal/admin/automations");
}
