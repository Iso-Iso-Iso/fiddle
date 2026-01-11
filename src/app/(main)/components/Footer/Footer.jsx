import React from "react";
import {
  CompanyName,
  NavigationColumn,
  NavigationList,
  Wrapper,
} from "./footer.styles";
import { Container } from "@/components/uikit/Container/Container";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Divider } from "@/components/uikit/Divider/Divider";

const navigationMap = [
  [
    { title: "Categories" },
    { title: "Development & IT" },
    { title: "Design & Creative" },
    { title: "Digital & Marketing" },
    { title: "Writing & Translation" },
    { title: "Music & Audio" },
  ],
  [
    { title: "For Clients" },
    { title: "How fiddle works" },
    { title: "Customers success stories" },
    { title: "Quality Guide" },
    { title: "Fiddle Answers" },
    { title: "Browse Freelancers" },
  ],
  [
    { title: "For Freelancers" },
    { title: "For a Fiddle Freelancer" },
    { title: "Community Hub" },
    { title: "Events" },
    { title: "Forum" },
  ],
  [
    { title: "About Company" },
    { title: "About Fiddle" },
    { title: "Help Center" },
    { title: "Trust & Safety" },
    { title: "Careers" },
    { title: "Term of services" },
    { title: "Privacy Policy" },
    { title: "Partnership" },
    { title: "Press & News" },
  ],
];

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <NavigationList>
          {navigationMap.map((item, index) => (
            <NavigationColumn key={index}>
              {item.map((navItem) => (
                <Typography
                  color="white"
                  key={navItem.title}
                  text={navItem.title}
                />
              ))}
            </NavigationColumn>
          ))}
        </NavigationList>
        <Divider color="white" />
        <CompanyName>© Fiddle International Ltd. 2026</CompanyName>
      </Container>
    </Wrapper>
  );
};
