import { create } from "../../../src/index.js";

const run = async () => {
    const res = await create("aa6");

    console.log("Sample:", res);
};

run().catch(console.error);
