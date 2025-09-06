import React from "react";
import { getFiddleById } from "@/services/fiddle/getFiddleById";
import { Typography } from "@/components/uikit/Typography/Typography";
import { redirect } from "next/navigation";
import { TextEditViewer } from "@/components/TextEditViewer/TextEditViewer";
import { IconButton } from "@/components/uikit/IconLink/IconButton";
import NavLink from "next/link";
import { getAuthorizedUser } from "@/services/users/getAuthorizedUser";

const Page = async ({ params }) => {
  const fiddle = await getFiddleById(params.id);
  const authorizedUser = await getAuthorizedUser();

  if (!fiddle) {
    return redirect("/404");
  }

  return (
    <div>
      <div>
        <Typography text={fiddle.name} />
        {authorizedUser?.id === fiddle.user.id && (
          <NavLink href={`/fiddles/${params.id}/edit`}>
            <IconButton name="edit" />
          </NavLink>
        )}
      </div>
      <TextEditViewer content={fiddle.content} />
    </div>
  );
};

export default Page;
