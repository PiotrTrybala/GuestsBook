import {
    writable
} from "svelte/store";
let session_store = writable();

export default session_store;