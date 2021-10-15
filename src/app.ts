import { Context, TemplateTag } from "./insomnia.lib";
import * as faker from "faker";

const templateTags: TemplateTag[] = [
  {
    name: "mocked",
    displayName: "Mocked",
    description: "generate a random mocked value",
    args: [
      {
        displayName: "Mocked value",
        type: "enum",
        options: [
          {
            displayName: "Random abbreviation",
            value: "abbreviation",
          },
          { displayName: "Random hex colour", value: "hex_colour" },
          { displayName: "Random colour", value: "colour" },
          { displayName: "Random integer", value: "integer" },
          { displayName: "Random IPV4", value: "ipv4" },
          { displayName: "Random IPV6", value: "ipv6" },
          { displayName: "Random MAC address", value: "mac_address" },
          {
            displayName: "Random 15-character alpha-numeric password",
            value: "alpha_num_password",
          },
          {
            displayName: "Random two-letter language code (ISO 639-1)",
            value: "lang_locale_code",
          },
          { displayName: "Random user agent", value: "user_agent" },
          { displayName: "Random semantic version number", value: "semver" },
        ],
      },
    ],
    run(_context: Context, selection: string) {
      switch (selection) {
        // Text, Numbers and Colors
        case "abbreviation":
          return faker.hacker.abbreviation();
        case "hex_colour":
          return faker.internet.color();
        case "colour":
          return faker.commerce.color();
        case "integer":
          return faker.datatype.number();

        // Internet and IP Addresses
        case "ipv4":
          return faker.internet.ip();
        case "ipv6":
          return faker.internet.ipv6();
        case "mac_address":
          return faker.internet.mac();
        case "alpha_num_password":
          return faker.internet.password();
        case "lang_locale_code":
          return faker.random.locale();
        case "user_agent":
          return faker.internet.userAgent();
        case "semver":
          return faker.system.semver();
        default:
          return "";
      }
    },
  },
];

module.exports = { templateTags };
