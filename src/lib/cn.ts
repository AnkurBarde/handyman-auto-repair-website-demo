// Tiny class-name joiner. Filters out falsy values so conditional classes stay tidy.
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
