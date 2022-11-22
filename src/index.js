import { call, NearBindgen, Vector, view } from "near-sdk-js";

@NearBindgen({})
export class Contractt {
  constructor() {
    this.vector = new Vector("a");
  }

  @call({})
  addObjecttoVector({ name, value }) {
    const object = { name, value };
    this.vector.push(object);
  }

  @view({})
  getVector() {
    return this.vector.toArray();
  }
}
