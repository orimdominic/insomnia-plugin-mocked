import { Context } from "./insomnia.lib";
import * as faker from "faker";
import { templateTags } from "./app";
import {
  isDataURI,
  isDate,
  isDateString,
  isNumberString,
  isURL,
} from "class-validator";

describe("mocked template tags object", () => {
  const [templateTag] = templateTags;
  let mockContext: Context;

  beforeEach(() => jest.clearAllMocks());

  it("is defined", () => {
    expect(templateTag).toBeDefined();
    expect(typeof templateTag.run).toBe("function");
    expect(templateTag.name).toBe("mocked");
  });

  it("returns an abbreviation when abbreviation is selected", () => {
    const fn = jest.spyOn(faker.hacker, "abbreviation");
    const res = templateTag.run
      ? templateTag.run(mockContext, "abbreviation")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a hex colour when hex_colour is selected", () => {
    const fn = jest.spyOn(faker.internet, "color");
    const res = templateTag.run
      ? templateTag.run(mockContext, "hex_colour")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a colour when colour is selected", () => {
    const fn = jest.spyOn(faker.commerce, "color");
    const res = templateTag.run
      ? templateTag.run(mockContext, "colour")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an integer when integer is selected", () => {
    const fn = jest.spyOn(faker.datatype, "number");
    const res = templateTag.run
      ? templateTag.run(mockContext, "integer")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("number");
  });

  it("returns a random phrase when phrase is selected", () => {
    const fn = jest.spyOn(faker.hacker, "phrase");
    const res = templateTag.run
      ? templateTag.run(mockContext, "phrase")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an ipv4 address when ipv4 is selected", () => {
    const fn = jest.spyOn(faker.internet, "ip");
    const res = templateTag.run ? templateTag.run(mockContext, "ipv4") : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an ipv6 address when ipv6 is selected", () => {
    const fn = jest.spyOn(faker.internet, "ipv6");
    const res = templateTag.run ? templateTag.run(mockContext, "ipv6") : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an mac address when mac is selected", () => {
    const fn = jest.spyOn(faker.internet, "mac");
    const res = templateTag.run
      ? templateTag.run(mockContext, "mac_address")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an alpha numeric password when alpha_num_password is selected", () => {
    const fn = jest.spyOn(faker.internet, "password");
    const res = templateTag.run
      ? templateTag.run(mockContext, "alpha_num_password")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a language locale when lang_locale_code is selected", () => {
    const fn = jest.spyOn(faker.random, "locale");
    const res = templateTag.run
      ? templateTag.run(mockContext, "lang_locale_code")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a user agent when user_agent is selected", () => {
    const fn = jest.spyOn(faker.internet, "userAgent");
    const res = templateTag.run
      ? templateTag.run(mockContext, "user_agent")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a semantic version when semver is selected", () => {
    const fn = jest.spyOn(faker.system, "semver");
    const res = templateTag.run
      ? templateTag.run(mockContext, "semver")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a name when first_name is selected", () => {
    const fn = jest.spyOn(faker.name, "firstName");

    const res = templateTag.run
      ? templateTag.run(mockContext, "first_name")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a name when last_name is selected", () => {
    const fn = jest.spyOn(faker.name, "lastName");

    const res = templateTag.run
      ? templateTag.run(mockContext, "last_name")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns two names separated by a space when full_name is selected", () => {
    const fnFirst = jest.spyOn(faker.name, "firstName");
    const fnLast = jest.spyOn(faker.name, "lastName");

    const res = templateTag.run
      ? templateTag.run(mockContext, "full_name")
      : void 0;

    expect(fnFirst).toHaveBeenCalled();
    expect(fnLast).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(typeof res === "string" ? res?.split(" ").length : undefined).toBe(
      2
    );
  });

  it("returns a name prefix when name_prefix is selected", () => {
    const fn = jest.spyOn(faker.name, "prefix");

    const res = templateTag.run
      ? templateTag.run(mockContext, "name_prefix")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a name suffix when name_suffix selected", () => {
    const fn = jest.spyOn(faker.name, "suffix");

    const res = templateTag.run
      ? templateTag.run(mockContext, "name_suffix")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a job area when job_area is selected", () => {
    const fn = jest.spyOn(faker.name, "jobArea");

    const res = templateTag.run
      ? templateTag.run(mockContext, "job_area")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a job descriptor when job_desc is selected", () => {
    const fn = jest.spyOn(faker.name, "jobDescriptor");

    const res = templateTag.run
      ? templateTag.run(mockContext, "job_desc")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a job type when job_type is selected", () => {
    const fn = jest.spyOn(faker.name, "jobType");

    const res = templateTag.run
      ? templateTag.run(mockContext, "job_type")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a job title when job_title is selected", () => {
    const fn = jest.spyOn(faker.name, "jobTitle");

    const res = templateTag.run
      ? templateTag.run(mockContext, "job_title")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a city when city is selected", () => {
    const fn = jest.spyOn(faker.address, "city");

    const res = templateTag.run ? templateTag.run(mockContext, "city") : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a street address when street_address is selected", () => {
    const fn = jest.spyOn(faker.address, "streetAddress");

    const res = templateTag.run
      ? templateTag.run(mockContext, "street_address")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a country when country is selected", () => {
    const fn = jest.spyOn(faker.address, "country");

    const res = templateTag.run
      ? templateTag.run(mockContext, "country")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a country code when country_code is selected", () => {
    const fn = jest.spyOn(faker.address, "countryCode");

    const res = templateTag.run
      ? templateTag.run(mockContext, "country_code")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a longitude when longitude is selected", () => {
    const fn = jest.spyOn(faker.address, "longitude");

    const res = templateTag.run
      ? templateTag.run(mockContext, "longitude")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a latitude when latitude is selected", () => {
    const fn = jest.spyOn(faker.address, "latitude");

    const res = templateTag.run
      ? templateTag.run(mockContext, "latitude")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a latitude when latitude is selected", () => {
    const fn = jest.spyOn(faker.address, "latitude");

    const res = templateTag.run
      ? templateTag.run(mockContext, "latitude")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an avatar image url when image_avatar is selected", () => {
    const fn = jest.spyOn(faker.image, "avatar");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_avatar")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a random image url when image_random is selected", () => {
    const fn = jest.spyOn(faker.image, "imageUrl");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_random")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns an abstract image url when image_abstract is selected", () => {
    const fn = jest.spyOn(faker.image, "abstract");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_abstract")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns an animal image url when image_animal is selected", () => {
    const fn = jest.spyOn(faker.image, "animals");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_animal")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a business image url when image_business is selected", () => {
    const fn = jest.spyOn(faker.image, "business");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_business")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a cat image url when image_cat is selected", () => {
    const fn = jest.spyOn(faker.image, "cats");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_cat")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a city image url when image_city is selected", () => {
    const fn = jest.spyOn(faker.image, "city");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_city")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a food image url when image_food is selected", () => {
    const fn = jest.spyOn(faker.image, "food");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_food")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a fashion image url when image_fashion is selected", () => {
    const fn = jest.spyOn(faker.image, "fashion");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_fashion")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a people image url when image_people is selected", () => {
    const fn = jest.spyOn(faker.image, "people");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_people")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a nature image url when image_nature is selected", () => {
    const fn = jest.spyOn(faker.image, "nature");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_nature")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a sport image url when image_sport is selected", () => {
    const fn = jest.spyOn(faker.image, "sports");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_sport")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns a transport image url when image_transport is selected", () => {
    const fn = jest.spyOn(faker.image, "transport");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_transport")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isURL(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns an image data uri when image_data_uri is selected", () => {
    const fn = jest.spyOn(faker.image, "dataUri");

    const res = templateTag.run
      ? templateTag.run(mockContext, "image_data_uri")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
    expect(isDataURI(typeof res === "string" ? res : "")).toBe(true);
  });

  it("returns an 8-digit bank account string when bank_account_8_digit is selected", () => {
    const fn = jest.spyOn(faker.finance, "account");

    const res = templateTag.run
      ? templateTag.run(mockContext, "bank_account_8_digit")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(isNumberString(typeof res === "string" ? res : "")).toBe(true);
    expect(typeof res === "string" ? res.length : undefined).toBe(8);
  });

  it("returns an IBAN string when bank_account_iban is selected", () => {
    const fn = jest.spyOn(faker.finance, "iban");

    const res = templateTag.run
      ? templateTag.run(mockContext, "bank_account_iban")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a bank identifier code when bank_identifier_code is selected", () => {
    const fn = jest.spyOn(faker.finance, "bic");

    const res = templateTag.run
      ? templateTag.run(mockContext, "bank_identifier_code")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a currency code when currency_code is selected", () => {
    const fn = jest.spyOn(faker.finance, "currencyCode");

    const res = templateTag.run
      ? templateTag.run(mockContext, "currency_code")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a bitcoin address when bitcoin_address is selected", () => {
    const fn = jest.spyOn(faker.finance, "bitcoinAddress");

    const res = templateTag.run
      ? templateTag.run(mockContext, "bitcoin_address")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a future date when date_future is selected", () => {
    const fn = jest.spyOn(faker.date, "future");

    const res = templateTag.run
      ? templateTag.run(mockContext, "date_future")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(isDate(res)).toBe(true);
    expect(new Date().getTime() < new Date(res as Date).getTime());
  });

  it("returns a past date when date is selected", () => {
    const fn = jest.spyOn(faker.date, "past");

    const res = templateTag.run
      ? templateTag.run(mockContext, "date_past")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(isDate(res)).toBe(true);
    expect(new Date().getTime() > new Date(res as Date).getTime());
  });

  it("returns a weekday when weekday is selected", () => {
    const fn = jest.spyOn(faker.date, "weekday");

    const res = templateTag.run
      ? templateTag.run(mockContext, "weekday")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a month when month is selected", () => {
    const fn = jest.spyOn(faker.date, "month");

    const res = templateTag.run
      ? templateTag.run(mockContext, "month")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a lorem text when lorem_sentence is selected", () => {
    const fn = jest.spyOn(faker.lorem, "sentence");

    const res = templateTag.run
      ? templateTag.run(mockContext, "lorem_sentence")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns a lorem paragraph when lorem_paragraph is selected", () => {
    const fn = jest.spyOn(faker.lorem, "paragraph");

    const res = templateTag.run
      ? templateTag.run(mockContext, "lorem_paragraph")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an empty string when nothing is selected", () => {
    const res = templateTag.run ? templateTag.run(mockContext, "") : void 0;

    expect(res).toBe("");
  });
});
