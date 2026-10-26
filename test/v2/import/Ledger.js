import { masters } from "../../../src/index.js";

const run = async () => {
    const res = await masters("aa6");

    console.log("Sample:", res);
};

run().catch(console.error);
