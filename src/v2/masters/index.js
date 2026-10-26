import { importLedger } from "tally-http-json";

const startFunc = async (ledgerName) => {
    const rawResponse = await importLedger(ledgerName);

    return await rawResponse;
};

export default startFunc;