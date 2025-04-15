export const themeToken = Object.freeze({
  primaryNormal: "var(--Primary-Normal)",
  primaryAlternative: "var(--Primary-Alternative)",
  primaryAssistive: "var(--Primary-Assistive)",
  secondaryNormal: "var(--Secondary-Normal)",
  secondaryAlternative: "var(--Secondary-Alternative)",
  secondaryAssistive: "var(--Secondary-Assistive)",
  labelNormal: "var(--Label-Normal)",
  labelStrong: "var(--Label-Strong)",
  labelNeutral: "var(--Label-Neutral)",
  labelAlternative: "var(--Label-Alternative)",
  labelAssistive: "var(--Label-Assistive)",
  labelDisable: "var(--Label-Disable)",
  lineNormal: "var(--Line-Normal)",
  lineNeutral: "var(--Line-Neutral)",
  lineAlternative: "var(--Line-Alternative)",
  fillNormal: "var(--Fill-Normal)",
  fillNeutral: "var(--Fill-Neutral)",
  fillAlternative: "var(--Fill-Alternative)",
  fillSupport: "var(--Fill-Support)",
  fillAssistive: "var(--Fill-Assistive)",
  backgroundNormal: "var(--Background-Normal)",
  backgroundNeutral: "var(--Background-Neutral)",
  backgroundAlternative: "var(--Background-Alternative)",
  statusNegative: "var(--Status-Negative)",
  statusCautionary: "var(--Status-Cautionary)",
  statusPositive: "var(--Status-Positive)",
  statusInfo: "var(--Status-Info)",
  staticWhite: "var(--Static-White)",
  staticBlack: "var(--Static-Black)",
});

export type ThemeType = keyof typeof themeToken;
