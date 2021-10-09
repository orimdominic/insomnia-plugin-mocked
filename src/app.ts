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
            value: "random_abbreviation",
          },
          { displayName: "Random hex colour", value: "random_hex_colour" },
          { displayName: "Random colour", value: "random_colour" },
          { displayName: "Random integer", value: "random_integer" },
        ],
      },
    ],
    run(_context: Context, selection: string) {
      switch (selection) {
        case "random_abbreviation":
          return faker.hacker.abbreviation();
        case "random_hex_colour":
          return faker.internet.color();
        case "random_colour":
          return faker.commerce.color();
        case "random_integer":
          return faker.datatype.number();
        default:
          return faker.hacker.abbreviation();
      }
    },
  },
];

module.exports = { templateTags };
