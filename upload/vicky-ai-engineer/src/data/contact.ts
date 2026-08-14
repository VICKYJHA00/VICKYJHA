/**
 * Single source of truth for outbound contact/social links.
 *
 * The previous version of this site had these hardcoded as "#" in both
 * Contact.tsx and Footer.tsx, which meant the GitHub/LinkedIn icons went
 * nowhere and the "send message" form never actually sent anything.
 *
 * Update the two TODOs below with your real LinkedIn URL and the inbox
 * you want messages delivered to — everything else picks it up automatically.
 */
export const CONTACT = {
  github: "https://github.com/vickyjha00",
  // TODO: replace with your real LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/vickyjha00",
  // TODO: replace with an inbox you actually monitor
  email: "hello@vicky.dev",
};
