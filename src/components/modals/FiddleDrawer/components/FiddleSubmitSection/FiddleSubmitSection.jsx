import React from "react";
import { Textarea } from "@/components/uikit/Textarea/Textarea";
import {
  FIDDLE_PROPOSALS_FIELDS,
  fiddleProposalsResolver,
  getFiddleProposalsDefaultValues,
} from "@/validation/fiddleProposals.schema";
import { Input } from "@/components/uikit/Input/Input";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Button } from "@/components/uikit/Button/Button";
import { useCreateFiddleProposalMutation } from "@/services/fiddleProposals/useCreateFiddleProposalMutation";
import { useForm } from "react-hook-form";
import { useGetProposalsBalanceQuery } from "@/services/proposalsBalance/useGetProposalsBalanceQuery";
import { WithdrawProposals } from "./fiddleSubmitSection.styles";

export const FiddleSubmitSection = () => {
  const { data: proposalBalance } = useGetProposalsBalanceQuery();

  const isSubmitNotAvailable = proposalBalance.amount === 0;

  const { control, handleSubmit } = useForm({
    resolver: fiddleProposalsResolver,
    values: getFiddleProposalsDefaultValues(proposalBalance.amount),
  });

  const { mutate: createFiddleProposalMutate } =
    useCreateFiddleProposalMutation();

  const handleProposalSend = (data) => {
    createFiddleProposalMutate({
      withdrawAmount: data.withdrawAmount,
      greeting: data.greeting,
      fiddleId: fiddle.id,
    });
  };

  return (
    <>
      <Textarea
        control={control}
        name={FIDDLE_PROPOSALS_FIELDS.GREETING}
        label="Greeting"
      />
      <WithdrawProposals>
        <Input
          control={control}
          name={FIDDLE_PROPOSALS_FIELDS.WITHDRAW_AMOUNT}
          label="Withdraw proposals"
          inputType="number"
        />
        <Typography
          variant="body2"
          text={`Balance: ${proposalBalance.amount} proposals`}
        />
      </WithdrawProposals>
      <Button
        text="Submit"
        disabled={isSubmitNotAvailable}
        onClick={handleSubmit(handleProposalSend)}
      />
      {isSubmitNotAvailable && (
        <Typography
          text="You balance is 0. Top up your balance for further submission."
          color="error"
        />
      )}
    </>
  );
};
