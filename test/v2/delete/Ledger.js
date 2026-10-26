import { delete as deleteLedger } from "../../../src/index.js";

const run = async () => {
    const res = await deleteLedger("aa6");

    console.log("Sample:", res);
};

run().catch(console.error);
