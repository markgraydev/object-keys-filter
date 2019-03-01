import "mocha";
import { expect } from "chai";
import { filterObject } from "../index";


describe("filterObject", () => {
  const source = {
    property: true,
    Property: true,
    key: "value"
  };

  it("Case sensitive filter: /property/i", () => {
    const filtered = filterObject(source, /property/i);

    expect(filtered).to.eql({
      property: true,
      Property: true
    });
  });

  it("Group filter: property|key", () => {
    const filtered = filterObject(source, /property|key/);

    expect(filtered).to.eql({
      property: true,
      key: "value"
    });
  });

  it("Copy object: .*", () => {
    const filtered = filterObject(source, /.*/);

    expect(filtered).to.eql(source);
  });
});
