"use client";
import React from "react";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Divider } from "@/components/uikit/Divider/Divider";
import { Spoiler } from "@/components/uikit/Spoiler/Spoiler";
import {
  PageWrapper,
  HeaderSection,
  QuestionsWrapper,
  FooterSection,
} from "./page.styles";

const questions = [
  {
    title: "How do I start searching for projects?",
    content:
      "Once you create a profile and list your technical skills, you can browse projects 'Fiddles' from the main dashboard. Use the search filters to narrow down by technology, budget, and timeline.",
  },
  {
    title: "How are payments handled on the platform?",
    content:
      "We use a secure escrow-based payment system. The client deposits the project fee once the engagement starts, and funds are released to your account after the client approves the final deliverables.",
  },
  {
    title: "What happens if a client is unresponsive after project completion?",
    content:
      "If a client doesn't respond within 14 days of your final submission, the platform triggers an automatic review. If the deliverables meet the agreed-upon scope, the funds are released to the freelancer automatically.",
  },
  {
    title: "Can I work on multiple projects simultaneously?",
    content:
      "Yes, you can manage multiple active projects as long as you meet the deadlines and maintain the quality expected by each client. Use our project management dashboard to keep track of concurrent tasks.",
  },
  {
    title: "How does the platform ensure technical quality?",
    content:
      "Fiddle uses a peer-review and rating system. Clients rate freelancers on communication, code quality, and adherence to requirements. Consistently high ratings improve your platform standing and visibility.",
  },
  {
    title: "What is the platform's service fee for freelancers?",
    content:
      "We charge a tiered service fee ranging from 10% to 15% based on the total project value. This covers escrow services, dispute resolution, and platform maintenance fee is automatically deducted from the project payout.",
  },
  {
    title: "How do I improve my profile visibility to potential clients?",
    content:
      "Complete your technical profile thoroughly, upload a portfolio of previous work, and earn verified skill badges. Projects completed with high client satisfaction scores are the best way to boost your presence.",
  },
  {
    title: "What technical fields are currently most in demand?",
    content:
      "Currently, AI/ML engineering, Cloud Architecture (AWS/Azure), and specialized React/Next.js development see the highest volume of projects and competitive rates on Fiddle.",
  },
  {
    title: "How do I handle project scope creep during development?",
    content:
      "Wait for the client to formalize any scope changes through the platform's 'Add-on' feature. This ensures both parties are protected and that you are fairly compensated for any additional technical work.",
  },
  {
    title: "Does the platform provide dispute resolution services?",
    content:
      "Yes, Fiddle has a dedicated dispute resolution team. If a disagreement arises regarding project deliverables, our technical mediators review the agreed-upon scope and final submission to reach a fair outcome.",
  },
  {
    title: "How do I export my project history and testimonials?",
    content:
      "You can download a certified Technical Resume from your profile settings, which includes a summary of your completed projects, technologies used, and verified client testimonials.",
  },
  {
    title: "Are there any specific hardware/software requirements to join?",
    content:
      "Fiddle is browser-based, but we recommend a setup capable of running modern development environments. Some projects may require specific software licenses, which clients typically provide for the project duration.",
  },
  {
    title: "How do I update my skill tags to match new project trends?",
    content:
      "You can edit your skill set in the 'Skills & expertise' section of your profile. We regularly update our taxonomy to include trending libraries and frameworks so you can accurately reflect your current stack.",
  },
];

const Page = () => {
  return (
    <PageWrapper>
      <HeaderSection>
        <Typography variant="h3" text="Frequently Asked Questions" />
        <Typography
          variant="subtitle1"
          text="Everything you need to know about working on Fiddle"
          color="textSecondary"
        />
      </HeaderSection>

      <Divider />

      <QuestionsWrapper>
        {questions.map((q, index) => (
          <Spoiler key={index} title={q.title} content={q.content} />
        ))}
      </QuestionsWrapper>

      <Divider />

      <FooterSection>
        <Typography
          variant="body2"
          text="Still have questions? Contact our support team at support@fiddle.com"
        />
      </FooterSection>
    </PageWrapper>
  );
};

export default Page;
