export function checkState(state) {
  if (state.health > 50) {
    return "healthy";
  }
  if (state.health < 50 && state.health >= 15) {
    return "wounded";
  }
  if (state.health < 15) {
    return "critical";
  }
}

export function sortState(arr) {
  return arr.sort((a, b) => b.health - a.health);
}