// Always show the intro on every page load.
// The overlay handles its own dismissal internally.
export function useIntroAnimation() {
  // no-op — kept so callers don't need to change their import
  const completeIntro = () => {};
  return { shouldShow: true, completeIntro };
}
