export function media(size) {
  let width;

  if (size === "tablet") width = "768";
  if (size === "laptop-s") width = "1024";
  if (size === "laptop-l") width = "1440";
  if (size === "4k") width = "2560";

  return `@media only screen and (min-width: ${width}px)`;
}
