export const siteConfig = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Next Litebans",
  logo: process.env.NEXT_PUBLIC_SITE_LOGO || "/logo.webp",
  favicon: process.env.NEXT_PUBLIC_SITE_FAVICON || "/logo.webp",
  languages: {
    available: [
      "en",
      "es",
    ],
    default: process.env.NEXT_PUBLIC_SITE_DEFAULT_LANGUAGE || "en",
  },
  console: {
    name: process.env.NEXT_PUBLIC_SITE_CONSOLE_NAME || "Console", // Just for filter badge
    uuid: process.env.NEXT_PUBLIC_SITE_CONSOLE_UUID || "[Console]", // Use for filter url and to check if a punishment is made from the Console. In some versions of Litebans, the console uuid is "CONSOLE".
    icon: process.env.NEXT_PUBLIC_SITE_CONSOLE_ICON || "/console.webp",
    body: process.env.NEXT_PUBLIC_SITE_CONSOLE_BODY || "/console-body.webp",
    bust: process.env.NEXT_PUBLIC_SITE_CONSOLE_BUST || "/console-bust.webp",
  },
  defaultPlayerLookup: process.env.NEXT_PUBLIC_SITE_DEFAULT_PLAYER || "YoSoyVilla",
  // When enabled, body and bust images will show a steve skin
  bedrock: {
    enabled: process.env.NEXT_PUBLIC_SITE_BEDROCK_ENABLED === "true",
    prefix: process.env.NEXT_PUBLIC_SITE_BEDROCK_PREFIX || "BP_",
  },
  openGraph: {
    dateFormat: process.env.NEXT_PUBLIC_SITE_OG_DATE_FORMAT || "yyyy-MM-dd hh:mm:ss",
    pages: {
      main: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        next-litebans punishment web interface.

        Total punishments: {total}

          🚫 Bans: {bans}
          🔇 Mutes: {mutes}
          ⚠️ Warns: {warns}
          ❌ Kicks: {kicks}
        `
      },
      history: {
        // Placeholders: {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        Total punishments: {total}

          🚫 Bans: {bans}
          🔇 Mutes: {mutes}
          ⚠️ Warns: {warns}
          ❌ Kicks: {kicks}
        `
      },
      player: {
        // Placeholders: {name}, {total}, {bans}, {mutes}, {kicks}, {warns}
        description: `
        {name}'s punishments.

        Total punishments: {total}

          🚫 Bans: {bans}
          🔇 Mutes: {mutes}
          ⚠️ Warns: {warns}
          ❌ Kicks: {kicks}
        `,
        bans: {
          description: `
          {name}'s bans.

          Total bans: {total}
          `,
        },
        mutes: {
          description: `
          {name}'s mutes.

          Total mutes: {total}
          `,
        },
        warns: {
          description: `
          {name}'s warns.

          Total warns: {total}
          `,
        },
        kicks: {
          description: `
          {name}'s kicks.

          Total kicks: {total}
          `,
        },
      },
      bans: {
        // Placeholders: {total}
        description: "Total bans: {total}"
      },
      mutes: {
        // Placeholders: {total}
        description: "Total mutes: {total}"
      },
      warns: {
        // Placeholders: {total}
        description: "Total warns: {total}"
      },
      kicks: {
        // Placeholders: {total}
        description: "Total kicks: {total}"
      },
    },
    punishments: {
      ban: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
        👤 User: {name}
        👮 Staff: {staff}

        📜 Reason: {reason}
        🕒 Date: {time}
        ⌛ Duration: {duration}
        `
      },
      mute: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {duration}, {server}
        description: `
        👤 User: {name}
        👮 Staff: {staff}

        📜 Reason: {reason}
        🕒 Date: {time}
        ⌛ Duration: {duration}
        `
      },
      warn: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
        👤 User: {name}
        👮 Staff: {staff}

        📜 Reason: {reason}
        🕒 Date: {time}
        `
      },
      kick: {
        // Placeholders: {name}, {staff}, {reason}, {time}, {server}
        description: `
        👤 User: {name}
        👮 Staff: {staff}

        📜 Reason: {reason}
        🕒 Date: {time}
        `
      }
    }
  }
}
export type SiteConfig = typeof siteConfig;
