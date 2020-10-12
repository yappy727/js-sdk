import childProcess from "child_process";
import { promisify } from "util";
const exec = promisify(childProcess.exec);

describe("main", () => {
  it("should throw error when no commands are passed", () => {
    return expect(exec("npm run run-ts")).rejects.toThrow();
  });
  it("should throw error when an inexist command is passed", () => {
    return expect(exec("npm run run-ts dummy")).rejects.toThrow();
  });
});
