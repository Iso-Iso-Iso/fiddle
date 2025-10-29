import React from "react";
import { getUserPortfolios } from "@/services/portfolios/getUserPortfolios";
import {
  BadgeWrapper,
  Name,
  PersonalInfo,
  ProfileInfo,
  TestimonialsCard,
} from "./freelancerView.styles";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Rating } from "@/components/uikit/Rating/Rating";
import { Chip } from "@/components/uikit/Chip/Chip";
import { IconButton } from "@/components/uikit/IconLink/IconButton";
import Link from "next/link";
import { Button } from "@/components/uikit/Button/Button";
import { CollapsableDescription } from "@/app/(main)/users/[id]/components/CollapsableDescription/CollapsableDescription";
import { PortfolioGrid } from "@/app/(main)/users/[id]/components/PortfolioGrid/PortfolioGrid";
import { TestimonialCard } from "@/app/(main)/users/[id]/components/TestimonialCard/TestimonialCard";

export const FreelancerView = async ({ user, isEditable }) => {
  const portfolios = await getUserPortfolios({ userId: user.id });

  return (
    <>
      <ProfileInfo>
        <Avatar variant="profile" />
        <PersonalInfo>
          <Name>
            <Typography text={user.firstName} variant="h5" />
            <Typography text={user.lastName[0] + "."} variant="h5" />
            <Rating />
          </Name>
          <Typography text={`Email: ${user.email}`} variant="body2" />
          <BadgeWrapper>
            <Chip label="20$/hour" color="primary" />
            <Chip label="Open to work" color="success" />
            <Chip label="Front-end" />
            <Chip label="Back-end" />
            <Chip label="JavaScript" />
            <IconButton size={18} name="edit" color="primary" />
          </BadgeWrapper>
        </PersonalInfo>
        {isEditable && (
          <Link href="/users/settings">
            <Button variant="outlined" text="Edit Profile" />
          </Link>
        )}
      </ProfileInfo>
      {user.description && <CollapsableDescription text={user.description} />}
      <PortfolioGrid items={portfolios} />
      <Typography variant="h4" text="Testimonials" />
      <TestimonialsCard>
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <TestimonialCard key={i} />
          ))}
      </TestimonialsCard>
    </>
  );
};
