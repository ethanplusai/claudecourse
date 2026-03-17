import { prisma } from "./db";

// Cache settings in memory for the duration of a request
let settingsCache: Record<string, string> | null = null;

export async function getSetting(key: string): Promise<string | undefined> {
  // Check DB first, fall back to env vars
  if (!settingsCache) {
    const all = await prisma.setting.findMany();
    settingsCache = Object.fromEntries(
      all.filter((s) => s.value).map((s) => [s.key, s.value])
    );
    // Clear cache after 30 seconds so it picks up changes
    setTimeout(() => {
      settingsCache = null;
    }, 30000);
  }

  return settingsCache[key] || process.env[key] || undefined;
}

export async function getSettings(
  group?: string
): Promise<Array<{ key: string; value: string; label: string; group: string }>> {
  const where = group ? { group } : {};
  return prisma.setting.findMany({ where, orderBy: { group: "asc" } });
}

export async function upsertSetting(
  key: string,
  value: string,
  label: string,
  group: string
): Promise<void> {
  await prisma.setting.upsert({
    where: { key },
    create: { key, value, label, group },
    update: { value },
  });
  // Clear cache
  settingsCache = null;
}

// Seed default settings structure (empty values)
export async function seedDefaultSettings(): Promise<void> {
  const defaults = [
    // Email (Resend)
    { key: "RESEND_API_KEY", label: "Resend API Key", group: "email" },
    {
      key: "EMAIL_FROM",
      label: "From Address",
      group: "email",
    },

    // SMS (Twilio)
    {
      key: "TWILIO_ACCOUNT_SID",
      label: "Twilio Account SID",
      group: "sms",
    },
    { key: "TWILIO_AUTH_TOKEN", label: "Twilio Auth Token", group: "sms" },
    {
      key: "TWILIO_PHONE_NUMBER",
      label: "Twilio Phone Number",
      group: "sms",
    },

    // General
    {
      key: "NEXT_PUBLIC_SITE_URL",
      label: "Site URL",
      group: "general",
    },
    { key: "BOOKING_URL", label: "Booking/Calendar URL", group: "booking" },

    // Cron
    { key: "CRON_SECRET", label: "Cron Secret", group: "general" },
  ];

  for (const d of defaults) {
    const existing = await prisma.setting.findUnique({
      where: { key: d.key },
    });
    if (!existing) {
      await prisma.setting.create({
        data: { ...d, value: process.env[d.key] || "" },
      });
    }
  }
}
