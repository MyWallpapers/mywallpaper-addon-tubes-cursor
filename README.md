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

Publishing is performed only by MyWallpaper's immutable OIDC admission
workflow. A version is tagged only after the pull request is merged and all
quality checks are green. Promotion and recommendation remain separate owner
actions after the resulting release has been ingested and tested.

## License

MIT. See [LICENSE](LICENSE).
