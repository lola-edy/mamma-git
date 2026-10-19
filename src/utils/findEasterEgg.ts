import type { EasterEgg } from "../types/pizza";

export function findEasterEgg(selectedIds: string[], eggs: EasterEgg[]) {
  return eggs.find(egg => {
    const containsAll = egg.requiredIds.every(id => selectedIds.includes(id));
    if (egg.exact) {
      return containsAll && selectedIds.length === egg.requiredIds.length;
    }
    return containsAll;
  });
}