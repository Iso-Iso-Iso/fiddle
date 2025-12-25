import React from "react";
import {
  FiddleList,
  Name,
  PersonalInfo,
  ProfileInfo,
} from "./employerView.styles";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";
import Link from "next/link";
import { Button } from "@/components/uikit/Button/Button";
import { getFiddlesByUserId } from "@/services/fiddle/getFiddlesByUserId";
import { FiddleCard } from "../FiddleCard/FiddleCard";

export const EmployerView = async ({ user, isEditable }) => {
  const fiddles = await getFiddlesByUserId({ userId: user.id });

  return (
    <>
      <ProfileInfo>
        <Avatar variant="profile" />
        <PersonalInfo>
          <Name>
            <Typography text={user.firstName} variant="h5" />
            <Typography text={user.lastName[0] + "."} variant="h5" />
          </Name>
          <Typography text={`Email: ${user.email}`} variant="body2" />
        </PersonalInfo>
        {isEditable && (
          <Link href="/users/settings">
            <Button variant="outlined" text="Edit Profile" />
          </Link>
        )}
      </ProfileInfo>
      <Typography variant="h4" text="Fiddles" />
      <FiddleList>
        {fiddles.map((item) => (
          <FiddleCard key={item.id} fiddle={item} />
        ))}
      </FiddleList>
    </>
  );
};
