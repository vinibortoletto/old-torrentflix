export function media(size) {
  let width;

  if (size === 'small') width = '768';
  if (size === 'medium') width = '1024';
  if (size === 'large') width = '1366';
  if (size === 'xlarge') width = '1920';
  if (size === 'xxlarge') width = '2560';

  return `@media only screen and (min-width: ${width}px)`;
}
