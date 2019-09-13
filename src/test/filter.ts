import "mocha";
import { expect } from "chai";
import { filterObjectByRegExp } from "../index";


describe("filterObject", () => {
  const source = {
    property: true,
    Property: true,
    key: "value"
  };

  it("case sensitive filter: /property/i", () => {
    const filtered = filterObjectByRegExp(source, /property/i);

    expect(filtered).to.eql({
      property: true,
      Property: true
    });
  });

  it("group filter: property|key", () => {
    const filtered = filterObjectByRegExp(source, /property|key/);

    expect(filtered).to.eql({
      property: true,
      key: "value"
    });
  });

  it("copy object: .*", () => {
    const filtered = filterObjectByRegExp(source, /.*/);

    expect(filtered).to.eql(source);
  });
});
