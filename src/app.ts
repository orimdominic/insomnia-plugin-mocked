import { Context, TemplateTag } from "./insomnia.lib";
import {
  date,
  lorem,
  hacker,
  internet,
  commerce,
  datatype,
  random,
  system,
  name,
  address,
  image,
  finance,
} from "faker";

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
          { displayName: "Random phrase", value: "phrase" },
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
          {
            displayName: "Random bank account - 8 digits",
            value: "bank_account_8_digit",
          },
          {
            displayName: "Random bank accout IBAN",
            value: "bank_account_iban",
          },
          {
            displayName: "Random bank identifier code",
            value: "bank_identifier_code",
          },
          { displayName: "Random currency code", value: "currency_code" },
          { displayName: "Random bitcoin address", value: "bitcoin_address" },
          { displayName: "Random future date", value: "date_future" },
          { displayName: "Random past date", value: "date_past" },
          { displayName: "Random weekday", value: "weekday" },
          { displayName: "Random month", value: "month" },
          { displayName: "Random lorem sentence", value: "lorem_sentence" },
          { displayName: "Random lorem paragraph", value: "lorem_paragraph" },
        ],
      },
    ],
    run(_context: Context, selection: string) {
      switch (selection) {
        // Text, Numbers and Colors
        case "abbreviation":
          return hacker.abbreviation();

        case "hex_colour":
          return internet.color();

        case "colour":
          return commerce.color();

        case "integer":
          return datatype.number();

        case "phrase":
          return hacker.phrase();

        // Internet and IP Addresses
        case "ipv4":
          return internet.ip();

        case "ipv6":
          return internet.ipv6();

        case "mac_address":
          return internet.mac();

        case "alpha_num_password":
          return internet.password();

        case "lang_locale_code":
          return random.locale();

        case "user_agent":
          return internet.userAgent();

        case "semver":
          return system.semver();

        // Names
        case "first_name":
          return name.firstName();

        case "last_name":
          return name.lastName();

        case "full_name":
          return `${name.firstName()} ${name.lastName()}`;

        case "name_prefix":
          return name.prefix();

        case "name_suffix":
          return name.suffix();

        // Profession
        case "job_area":
          return name.jobArea();

        case "job_desc":
          return name.jobDescriptor();

        case "job_type":
          return name.jobType();

        case "job_title":
          return name.jobTitle();

        // Address and Location
        case "city":
          return address.city();

        case "street_address":
          return address.streetAddress();

        case "country":
          return address.country();

        case "country_code":
          return address.countryCode();

        case "longitude":
          return address.longitude();

        case "latitude":
          return address.latitude();

        // Images
        case "image_avatar":
          return image.avatar();

        case "image_random":
          return image.imageUrl();

        case "image_abstract":
          return image.abstract();

        case "image_animal":
          return image.animals();

        case "image_business":
          return image.business();

        case "image_cat":
          return image.cats();

        case "image_city":
          return image.city();

        case "image_food":
          return image.food();

        case "image_fashion":
          return image.fashion();

        case "image_people":
          return image.people();

        case "image_nature":
          return image.nature();

        case "image_sport":
          return image.sports();

        case "image_transport":
          return image.transport();

        case "image_data_uri":
          return image.dataUri();

        // Finance
        case "bank_account_8_digit":
          return finance.account();

        case "bank_account_iban":
          return finance.iban();

        case "bank_identifier_code":
          return finance.bic();

        case "currency_code":
          return finance.currencyCode();

        case "bitcoin_address":
          return finance.bitcoinAddress();

        // Dates
        case "date_future":
          return date.future();

        case "date_past":
          return date.past();

        case "weekday":
          return date.weekday();

        case "month":
          return date.month();

        // Lorem Ipsum
        case "lorem_sentence":
          return lorem.sentence();

        case "lorem_paragraph":
          return lorem.paragraph();

        default:
          return "";
      }
    },
  },
];
