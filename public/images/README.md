# Images

These are temporary branded placeholders. Replace each one with a real photo
before the site goes live. Keep the same file name so no code changes are needed,
or update the path where the image is used (see the component noted below).

Shoot in landscape unless noted. Bright, in-focus, no heavy filters. Real photos
of this shop build more trust than stock images.

| File | Used in | What to shoot | Suggested size |
| --- | --- | --- | --- |
| `storefront.jpg` ✅ added | Hero, Open Graph share image | Real photo in place: a vehicle on a lift in the service bay (348x348). Consider a higher-res landscape shot of the shop from the street for sharper link previews. | 1200 x 630 |
| `repair-bay.svg` → `repair-bay.jpg` | "Why this shop" band | Inside the shop: a clean bay, a lift, a car being worked on. | 1200 x 800 |
| `dai-at-work.svg` → `dai-at-work.jpg` | "Why this shop" band | Dai working on or pointing at a car, ideally showing a customer the problem. Portrait orientation. | 1000 x 1200 |
| `logo.svg` | Header mark (optional) | A real logo if the shop has one. The header currently uses a built-in wrench icon, so this is optional. | Square, transparent background |

## After adding real photos

1. Drop the `.jpg` / `.png` / `.webp` files into this folder.
2. Update the `src` in the component (search the `src/components` folder for the old `.svg` path).
3. Real raster photos do not need the `dangerouslyAllowSVG` setting in `next.config.ts`.
   Once every placeholder SVG is replaced, that setting can be removed.
