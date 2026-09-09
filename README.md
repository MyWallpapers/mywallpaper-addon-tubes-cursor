# Tubes Cursor

Tubes Cursor is a visual MyWallpaper add-on that renders a configurable field
of glowing 3D tubes following the pointer across the shared wallpaper Canvas.
It is a Canvas effect: it does not replace the native Windows cursor and does
not inject code into another process.

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
Open this add-on's management page in MyWallpaper and select that tag to request
publication with an active lifetime entitlement.

MyWallpaper resolves the exact public repository and commit, dispatches its
pinned central workflow, rebuilds and verifies the artifacts, and publishes the
immutable transport from the platform repository. The add-on repository needs
no publication workflow or MyWallpaper credential. Do not pre-create a GitHub
release: a source tag alone does not publish the add-on to the catalogue.

Each accepted newer release is available for new installations. Existing
wallpapers remain pinned to their exact release until explicitly changed.

## License

MIT. See [LICENSE](LICENSE).
