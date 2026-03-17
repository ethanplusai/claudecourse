import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { seedDefaultSettings, upsertSetting } from "@/lib/settings";
import { revalidatePath } from "next/cache";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") redirect("/portal");

  // Ensure default settings exist
  await seedDefaultSettings();

  const settings = await prisma.setting.findMany({
    orderBy: [{ group: "asc" }, { key: "asc" }],
  });

  // Group settings
  const groups: Record<string, typeof settings> = {};
  for (const s of settings) {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  }

  const groupLabels: Record<string, string> = {
    general: "General",
    email: "Email (Resend)",
    sms: "SMS (Twilio)",
    booking: "Booking",
  };

  const groupDescriptions: Record<string, string> = {
    general: "Core platform settings.",
    email:
      "Connect Resend to send nurture emails. Get your API key at resend.com/api-keys.",
    sms: "Connect Twilio to send SMS messages. Get credentials at console.twilio.com.",
    booking: "Calendar and booking integration.",
  };

  async function saveSettings(formData: FormData) {
    "use server";
    const entries = Array.from(formData.entries());
    for (const [key, value] of entries) {
      if (key.startsWith("setting_")) {
        const settingKey = key.replace("setting_", "");
        const setting = settings.find((s) => s.key === settingKey);
        if (setting) {
          await upsertSetting(
            settingKey,
            value as string,
            setting.label,
            setting.group
          );
        }
      }
    }
    revalidatePath("/portal/admin/settings");
  }

  // Check connection status
  const resendKey = settings.find((s) => s.key === "RESEND_API_KEY")?.value;

  // Filter out SMS/Twilio settings since we're email-only
  const filteredGroups = Object.fromEntries(
    Object.entries(groups).filter(([group]) => group !== "sms")
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-text-muted mt-1">
          Manage integrations and platform configuration.
        </p>
      </div>

      {/* Connection status */}
      <div className="mb-8">
        <div className="bg-bg-card border border-border rounded-xl p-4 flex items-center gap-3 max-w-sm">
          <span
            className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
              resendKey ? "bg-green-500" : "bg-red-400"
            }`}
          />
          <div>
            <p className="text-sm font-medium">Email (Resend)</p>
            <p className="text-xs text-text-muted">
              {resendKey ? "Connected" : "Not configured"}
            </p>
          </div>
        </div>
      </div>

      <form action={saveSettings}>
        <div className="space-y-8">
          {Object.entries(filteredGroups).map(([group, groupSettings]) => (
            <div key={group}>
              <div className="mb-4">
                <h2 className="text-sm font-semibold">
                  {groupLabels[group] || group}
                </h2>
                {groupDescriptions[group] && (
                  <p className="text-xs text-text-muted mt-0.5">
                    {groupDescriptions[group]}
                  </p>
                )}
              </div>

              <div className="bg-bg-card border border-border rounded-xl divide-y divide-border">
                {groupSettings.map((setting) => {
                  const isSecret =
                    setting.key.includes("KEY") ||
                    setting.key.includes("TOKEN") ||
                    setting.key.includes("SECRET") ||
                    setting.key.includes("SID");

                  return (
                    <div
                      key={setting.key}
                      className="flex items-center gap-4 px-5 py-3"
                    >
                      <div className="w-48 flex-shrink-0">
                        <label
                          className="text-sm font-medium"
                          htmlFor={setting.key}
                        >
                          {setting.label}
                        </label>
                        <p className="text-xs text-text-light font-mono">
                          {setting.key}
                        </p>
                      </div>
                      <input
                        id={setting.key}
                        name={`setting_${setting.key}`}
                        type={isSecret ? "password" : "text"}
                        defaultValue={setting.value}
                        placeholder={isSecret ? "••••••••" : "Not set"}
                        className="flex-1 bg-bg border border-border rounded-lg px-3 py-2 text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all font-mono"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-accent text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-accent-hover transition-colors"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
