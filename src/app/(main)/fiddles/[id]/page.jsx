import React from "react";
import { getFiddleById } from "@/services/fiddle/getFiddleById";
import { Typography } from "@/components/uikit/Typography/Typography";
import { redirect } from "next/navigation";
import { TextEditViewer } from "@/components/TextEditViewer/TextEditViewer";
import { IconButton } from "@/components/uikit/IconLink/IconButton";
import NavLink from "next/link";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";
import { Heading, ImageGrid, Wrapper } from "./page.styles";
import Image from "next/image";

const Page = async ({ params }) => {
  const fiddle = await getFiddleById(params.id);
  const authorizedUser = await getAuthorizedUser();

  const isUserCanEdit = authorizedUser?.id === fiddle.user.id;

  if (!fiddle) {
    return redirect("/404");
  }

  return (
    <Wrapper>
      <Heading>
        <Typography text={fiddle.name} />
        {isUserCanEdit && (
          <NavLink href={`/fiddles/${params.id}/edit`}>
            <IconButton name="edit" />
          </NavLink>
        )}
      </Heading>
      <TextEditViewer content={fiddle.content} />
      {fiddle.images.length > 0 && (
        <ImageGrid>
          {fiddle.images.map((image) => (
            <Image
              key={image}
              width={280}
              height={120}
              src={image}
              alt={fiddle.name}
            />
          ))}
        </ImageGrid>
      )}
    </Wrapper>
  );
};

export default Page;
