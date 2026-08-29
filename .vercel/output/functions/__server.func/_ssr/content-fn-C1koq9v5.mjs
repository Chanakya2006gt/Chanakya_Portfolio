import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-fn-C1koq9v5.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchContent_createServerFn_handler = createServerRpc({
	id: "2b99909e19342163fb9618a3b1f343b57fe68205625d940d83a174e978667293",
	name: "fetchContent",
	filename: "src/data/content-fn.ts"
}, (opts) => fetchContent.__executeServer(opts));
var fetchContent = createServerFn({ method: "GET" }).handler(fetchContent_createServerFn_handler, async () => {
	const { readContent } = await import("./content.server-osXMLVNu.mjs").then((n) => n.t);
	return readContent();
});
//#endregion
export { fetchContent_createServerFn_handler };
