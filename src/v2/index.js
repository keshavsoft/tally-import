import masters from "./masters/index.js";

const call = async (input, companyName) => {
    const route = String(input ?? "").trim();
    const normalized = route.replace(/^tally\./i, "");
    const splitArray = normalized.split(".");
    const firstSegment = splitArray[0]?.trim();

    if (!firstSegment) {
        throw new Error("Missing route input");
    };

    if (firstSegment === "masters") {
        return await masters(splitArray[1]);
    };

    throw new Error(`Unsupported route: ${input}`);
};

export { masters, call };
export default { masters, call };