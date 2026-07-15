export enum RedealReason {
  SeaFourKind = "SEA_FOUR_KIND",
  FourKind = "FOUR_KIND",
  DealerFourKind = "DEALER_FOUR_KIND",
  AllBlack = "ALL_BLACK",
}

export interface RedealResult {
  canRedeal: boolean;
  forceRedeal: boolean;
  reason: RedealReason | null;
}