import { Context } from "./insomnia.lib";
import * as faker from "faker";
import { templateTags } from "./app";

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

  it("returns a single name when last_name selected", () => {
    const fn = jest.spyOn(faker.name, "suffix");

    const res = templateTag.run
      ? templateTag.run(mockContext, "name_suffix")
      : void 0;

    expect(fn).toHaveBeenCalled();
    expect(typeof res).toBe("string");
  });

  it("returns an empty string when nothing is selected", () => {
    const res = templateTag.run ? templateTag.run(mockContext, "") : void 0;

    expect(res).toBe("");
  });
});
