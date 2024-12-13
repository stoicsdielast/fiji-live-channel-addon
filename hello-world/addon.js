const { addonBuilder } = require("stremio-addon-sdk")

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
	"id": "community.fiji",
	"version": "0.0.1",
	"catalogs": [],
	"resources": [],
	"types": [],
	"name": "fiji live channels",
	"description": "Live channel addons for Fiji on stremio"
}
const builder = new addonBuilder(manifest)

module.exports = builder.getInterface()