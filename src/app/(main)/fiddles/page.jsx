import React from "react";
import { ProposalItem } from "@/app/(main)/fiddles/components/ProposalItem/ProposalItem";
import { Container } from "@/components/uikit/Container/Container";
import { PageContent, SideBar, SidebarProfile } from "./page.styles";
import { Box } from "@mui/material";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Typography } from "@/components/uikit/Typography/Typography";

const mock = [
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 1,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 2,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 3,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 4,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 5,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 6,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 7,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 8,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 9,
  },
  {
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty",
    creator: { firstName: "John", lastName: "Doe" },
    id: 10,
  },
];

const Page = () => {
  return (
    <PageContent>
      <Box>
        {mock.map((item) => (
          <ProposalItem key={item.id} proposal={item} />
        ))}
      </Box>
      <SideBar>
        <SidebarProfile>
          <Avatar text="OI" />
          <Box>
            <Typography text="Oleg I." />
            <Typography text="Front-end engeneer" />
          </Box>
        </SidebarProfile>
      </SideBar>
    </PageContent>
  );
};

export default Page;
