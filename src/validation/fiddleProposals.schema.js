import * as v from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";

export const FIDDLE_PROPOSALS_FIELDS = {
  GREETING: "greeting",
  WITHDRAW_AMOUNT: "withdrawAmount",
  // This field exists only for correct validation
  BALANCE: "balance",
};

export const fiddleProposalsSchema = v.pipe(
  v.object({
    [FIDDLE_PROPOSALS_FIELDS.WITHDRAW_AMOUNT]: v.pipe(v.number()),
    [FIDDLE_PROPOSALS_FIELDS.GREETING]: v.string(),
    [FIDDLE_PROPOSALS_FIELDS.BALANCE]: v.number(),
  }),
  v.forward(
    v.partialCheck(
      [
        FIDDLE_PROPOSALS_FIELDS.WITHDRAW_AMOUNT,
        FIDDLE_PROPOSALS_FIELDS.BALANCE,
      ],
      (input) =>
        +input[FIDDLE_PROPOSALS_FIELDS.WITHDRAW_AMOUNT] <=
        input[FIDDLE_PROPOSALS_FIELDS.BALANCE],
      "Withdraw cannot be more that your balance."
    ),
    [FIDDLE_PROPOSALS_FIELDS.WITHDRAW_AMOUNT]
  )
);

export const fiddleProposalsResolver = valibotResolver(fiddleProposalsSchema);

export const getFiddleProposalsDefaultValues = (balanceAmount) => ({
  [FIDDLE_PROPOSALS_FIELDS.GREETING]: "",
  [FIDDLE_PROPOSALS_FIELDS.WITHDRAW_AMOUNT]: "",
  [FIDDLE_PROPOSALS_FIELDS.BALANCE]: balanceAmount,
});
