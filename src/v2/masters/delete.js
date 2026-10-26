import { deleteLedger } from "tally-http-json";

const startFunc = async (ledgerName) => {
    const rawResponse = await deleteLedger(ledgerName);

    return await rawResponse;
};

export default startFunc;