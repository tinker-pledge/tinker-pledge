export const SHARE_URL = "https://tinkerpledge.org"
export const PLEDGE_LINE = "the freedom to tinker is how people get fluent — so the breakthroughs take care of themselves."
const X_HANDLE = "@tinkerpledge"

export function buildPledgeShareText(firstName = "") {
  const who = firstName
    ? `I'm ${firstName}, and I'm taking the Tinker Pledge: `
    : "I'm taking the Tinker Pledge: "

  return `${who}${PLEDGE_LINE}`
}

export function buildXShareUrl(text: string) {
  const xText = `${text}\n\nvia ${X_HANDLE}`
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(xText)}&url=${encodeURIComponent(SHARE_URL)}`
}

export function buildLinkedInShareUrl() {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`
}
