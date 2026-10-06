# Tubes Cursor

Tubes Cursor is a visual MyWallpaper add-on that renders a configurable field
of glowing 3D tubes following the pointer across the shared wallpaper Canvas.
It is a Canvas effect: it does not replace the native Windows cursor and does
not inject code into another process.

The manifest uses `ui.pointerEvents: "none"` so this decorative effect lets
clicks reach the widgets below it. Its existing `document` mouse listener still
observes movement in the shared Canvas document; the effect does not need to
be the event target. The Canvas host makes the visual layer inert, and this
add-on has no controls inside it. Controls in MyWallpaper's settings remain
available.

## Development

Use Node.js 24 and the pnpm version pinned by `packageManager`:

```powershell
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
```

For an in-application preview, run `mywallpaper dev`, enable Developer Mode in
MyWallpaper Desktop, and load the loopback URL printed by the CLI. Settings are
organized into Geometry, Material, Motion, Lighting, Bloom, and Actions groups.

## Publishing

Merge the source and matching manifest/package version into the reviewed default
branch, wait for quality checks, then push a new immutable `v<version>` tag.
With a signed-in, eligible creator account, request publication from the CLI:

```sh
mywallpaper publish --addon <ADDON_ID> --tag v6.0.6 --dry-run --json
mywallpaper publish --addon <ADDON_ID> --tag v6.0.6 --wait --json
```

The creator MCP exposes the same operation through `mywallpaper_addon_publish`:
provide the project directory, registered add-on ID and tag, first with
`dryRun: true`, then with `dryRun: false` after reviewing the result. Keep the
returned publication ID and use `mywallpaper_publication_status` to resume
observation; only `available` confirms catalogue availability. The service
enforces current creator terms, account rights and quotas. Repository creation,
source commits and tag pushes use the creator's ordinary Git tools.

MyWallpaper resolves the exact public repository and commit, dispatches its
pinned central workflow, rebuilds and verifies the artifacts, and publishes the
immutable transport from the platform repository. The add-on repository needs
no publication workflow or MyWallpaper credential. Do not pre-create a GitHub
release: a source tag alone does not publish the add-on to the catalogue.

Each accepted newer release is available for new installations. Existing
wallpapers remain pinned to their exact release until explicitly changed.

## License

MIT. See [LICENSE](LICENSE).
