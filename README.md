# Pratham Keyboard

A virtual keyboard you can actually type on — click the keys or use your physical keyboard, and it plays a key sound, shows the character, and supports the editing shortcuts you expect.

**Live:** https://pratham-keyboard.web.app

## Features

- **On-screen keyboard** with a full QWERTY layout
- **Physical keyboard input** — `keydown` is captured, so typing on your real keyboard drives the same display
- **Shift / Caps Lock** with automatic release, so you do not get stuck in uppercase
- **Editing shortcuts** wired to real actions: copy, cut, paste, select all
- **Key sound** on every press
- **Light/dark font feedback** while Shift is held, so the modifier state is visible
- **Text area** that reflects everything typed

## How it works

`main.js` binds a single `keydown` listener on `window` and maps each key to a handler:

| Function | Purpose |
|---|---|
| `handleKeyDown` | Entry point for every physical key press |
| `updateAlphabetCase` | Applies Shift/Caps state to the letter keys |
| `autoTurnOffShift` | Releases Shift after one character |
| `lightDarkFontwhileShifting` | Visual feedback while a modifier is held |
| `keyplayAudio` | Plays the key sound |
| `copyText` / `cutText` / `pasteText` / `selectAllText` | Editing shortcuts |

## Tech

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

## Run locally

```bash
npx serve .
# or
python -m http.server 8080
```

Then open http://localhost:8080 and start typing.

## Deploy

```bash
firebase deploy --only hosting --project pratham-keyboard
```

## License

MIT — see [LICENSE](LICENSE).
