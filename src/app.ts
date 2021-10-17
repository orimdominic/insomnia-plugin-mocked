import { Context, TemplateTag } from "./insomnia.lib";
import * as faker from "faker";

export const templateTags: TemplateTag[] = [
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
          //
          { displayName: "Random first name", value: "first_name" },
          { displayName: "Random last name", value: "last_name" },
          { displayName: "Random full name", value: "full_name" },
          { displayName: "Random name prefix", value: "name_prefix" },
          { displayName: "Random name suffix", value: "name_suffix" },
          { displayName: "Random job area", value: "job_area" },
          { displayName: "Random job descriptor", value: "job_desc" },
          { displayName: "Random job type", value: "job_type" },
          { displayName: "Random job title", value: "job_title" },
          { displayName: "Random city", value: "city" },
          { displayName: "Random street address", value: "street_address" },
          { displayName: "Random country", value: "country" },
          { displayName: "Random country code", value: "country_code" },
          { displayName: "Random longitude", value: "longitude" },
          { displayName: "Random latitude", value: "latitude" },
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

        // Names
        case "first_name":
          return faker.name.firstName();

        case "last_name":
          return faker.name.lastName();

        case "full_name":
          return `${faker.name.firstName()} ${faker.name.lastName()}`;

        case "name_prefix":
          return faker.name.prefix();

        case "name_suffix":
          return faker.name.suffix();

        // Profession
        case "job_area":
          return faker.name.jobArea();

        case "job_desc":
          return faker.name.jobDescriptor();

        case "job_type":
          return faker.name.jobType();

        case "job_title":
          return faker.name.jobTitle();

        // Address and Location
        case "city":
          return faker.address.city();

        case "street_address":
          return faker.address.streetAddress();

        case "country":
          return faker.address.country();

        case "country_code":
          return faker.address.countryCode();

        case "longitude":
          return faker.address.longitude();

        case "latitude":
          return faker.address.latitude();

        // Images
        case "image_avatar":
          return faker.image.avatar();

        case "image_random":
          return faker.image.imageUrl();

        case "image_abstract":
          return faker.image.abstract();

        case "image_animal":
          return faker.image.animals();

        case "image_business":
          return faker.image.business();

        case "image_cat":
          return faker.image.cats();

        case "image_city":
          return faker.image.city();

        case "image_food":
          return faker.image.food();

        case "image_fashion":
          return faker.image.fashion();

        case "image_people":
          return faker.image.people();

        case "image_nature":
          return faker.image.nature();

        case "image_sport":
          return faker.image.sports();

        case "image_transport":
          return faker.image.transport();

        case "image_data_uri":
          return faker.image.dataUri();

        default:
          return "";
      }
    },
  },
];
