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
  PortfolioGrid,
  ProfileInfo,
  TestimonialsCard,
} from "@/app/(main)/users/[id]/page.styles";
import { Button } from "@/components/uikit/Button/Button";
import Link from "next/link";
import { CollapsableDescription } from "@/app/(main)/users/[id]/components/CollapsableDescription/CollapsableDescription";
import { Chip } from "@/components/uikit/Chip/Chip";
import { IconButton } from "@/components/uikit/IconLink/IconButton";
import { PortfolioCard } from "@/app/(main)/users/[id]/components/PortfolioCard/PortfolioCard";
import { Rating } from "@/components/uikit/Rating/Rating";
import { TestimonialCard } from "@/app/(main)/users/[id]/components/TestimonialCard/TestimonialCard";

const mock =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dictum leo. Sed a orci eget neque euismod dictum. Mauris nisl eros, fermentum nec velit vitae, sodales suscipit nisi. Suspendisse ut felis ut ipsum facilisis vestibulum. In lacus justo, tincidunt nec viverra et, varius nec sem. Cras et massa non justo vehicula consectetur at dignissim lorem. Phasellus cursus orci ut nisl placerat, sit amet rutrum magna vestibulum. Vestibulum luctus quis odio at consectetur. Etiam ornare risus lectus, ut faucibus tellus tempor vitae. Duis pellentesque mollis augue eu aliquam. Duis porttitor diam eget nulla commodo cursus ut non elit. Quisque varius semper velit nec porta. Morbi id sem elit.\n" +
  "\n" +
  "In ac est a odio elementum lobortis. Nulla non nulla eu quam commodo iaculis. Phasellus blandit interdum est ac aliquet. Fusce gravida eleifend interdum. Sed ut arcu varius, suscipit orci ut, pharetra mi. Donec suscipit massa quis orci porttitor ornare. Nulla id porta libero, quis rhoncus magna. Aenean a odio diam. Integer iaculis, ipsum vitae viverra tristique, nulla dolor ultrices nibh, non mollis erat ligula vitae ligula. Nullam bibendum sapien non ex ultricies ornare. Cras iaculis nec elit eu condimentum. Vivamus placerat finibus nulla vitae consectetur. Nunc ornare tristique leo sed venenatis. Nulla ipsum sapien, mattis eget quam ut, porttitor ultricies nunc. Morbi eu sodales metus, at convallis turpis.";

const Page = async ({ params }) => {
  const session = await decryptUserSession();
  const user = await getUserById(params.id);

  if (!user) {
    return redirect("/404");
  }

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
      <Typography variant="h4" text="Portfolio" />
      <PortfolioGrid>
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <PortfolioCard key={i} />
          ))}
      </PortfolioGrid>
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
