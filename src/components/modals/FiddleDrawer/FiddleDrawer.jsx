"use client";
import React, { useState } from "react";
import { Drawer } from "@/components/uikit/Drawer/Drawer";
import { Typography } from "@/components/uikit/Typography/Typography";
import { TextEditViewer } from "@/components/TextEditViewer/TextEditViewer";
import {
  FiddleContent,
  ImageGrid,
  ProposalWrapper,
  WithdrawProposals,
} from "./fiddleDrawer.styles";
import Image from "next/image";
import { Divider } from "@mui/material";
import { Button } from "@/components/uikit/Button/Button";
import { Textarea } from "@/components/uikit/Textarea/Textarea";
import { Input } from "@/components/uikit/Input/Input";
import { useForm } from "react-hook-form";
import {
  FIDDLE_PROPOSALS_FIELDS,
  fiddleProposalsResolver,
  getFiddleProposalsDefaultValues,
} from "@/validation/fiddleProposals.schema";
import { createFiddleProposalAction } from "@/actions/fiddleProposals/createFiddleProposalAction";
import { useGetProposalsBalanceQuery } from "@/services/proposalsBalance/useGetProposalsBalanceQuery";
import { useCreateFiddleProposalMutation } from "@/services/fiddleProposals/useCreateFiddleProposalMutation";

export const FiddleDrawer = ({ fiddle }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const { data: proposalBalance } = useGetProposalsBalanceQuery();
  const { mutate: createFiddleProposalMutate } =
    useCreateFiddleProposalMutation();

  const isSubmitNotAvailable = proposalBalance.amount === 0;

  const { control, handleSubmit } = useForm({
    resolver: fiddleProposalsResolver,
    values: getFiddleProposalsDefaultValues(proposalBalance.amount),
  });

  const handleProposalSend = (data) => {
    console.log("DATA");
    createFiddleProposalMutate({
      withdrawAmount: data.withdrawAmount,
      greeting: data.greeting,
      fiddleId: fiddle.id,
    });
  };

  return (
    <Drawer>
      <FiddleContent>
        <Typography text={fiddle.name} variant="h4" />
        <TextEditViewer content={fiddle.content} />
        <ImageGrid>
          {fiddle.images.map((image) => (
            <Image
              key={image}
              width={130}
              height={80}
              alt={fiddle.name}
              src={image}
            />
          ))}
        </ImageGrid>
      </FiddleContent>
      <Divider />
      <ProposalWrapper>
        {isSubmit ? (
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
        ) : (
          <Button
            fullWidth
            variant="outlined"
            text="Submit proposal"
            onClick={() => setIsSubmit(true)}
          />
        )}
      </ProposalWrapper>
    </Drawer>
  );
};
