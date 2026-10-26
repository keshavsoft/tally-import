import create from "./masters/create.js";
import del from "./masters/delete.js";

export { create, del as delete };
export default { create, delete: del };