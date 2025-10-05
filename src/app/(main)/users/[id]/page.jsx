import React from "react";
import { getUserById } from "@/services/users/getUserById";
import { decryptUserSession } from "@/utils/sessions/decryptUserSession";
import { redirect } from "next/navigation";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import {
  BadgeWrapper,
  Name,
  PersonalInfo,
  ProfileInfo,
  TestimonialsCard,
} from "@/app/(main)/users/[id]/page.styles";
import { Button } from "@/components/uikit/Button/Button";
import Link from "next/link";
import { CollapsableDescription } from "@/app/(main)/users/[id]/components/CollapsableDescription/CollapsableDescription";
import { Chip } from "@/components/uikit/Chip/Chip";
import { IconButton } from "@/components/uikit/IconLink/IconButton";
import { Rating } from "@/components/uikit/Rating/Rating";
import { TestimonialCard } from "@/app/(main)/users/[id]/components/TestimonialCard/TestimonialCard";
import { PortfolioGrid } from "@/app/(main)/users/[id]/components/PortfolioGrid/PortfolioGrid";
import { getUserPortfolios } from "@/services/portfolios/getUserPortfolios";

const Page = async ({ params }) => {
  const session = await decryptUserSession();
  const user = await getUserById(params.id);

  if (!user) {
    return redirect("/404");
  }

  const portfolios = await getUserPortfolios({ userId: user.id });

  const isEditable = user.id === session?.userId;

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

export default Page;
