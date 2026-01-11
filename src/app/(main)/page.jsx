import { MainScreen } from "./components/MainScreen/MainScreen";
import { CategoriesGrid } from "@/app/(main)/components/CategoriesGrid/CategoriesGrid";
import { GuidelineSection } from "@/app/(main)/components/GuidelineSection/GuidelineSection";
import { BestFreelancersOfMonth } from "@/app/(main)/components/BestFreelancersOfMonth/BestFreelancersOfMonth";

export default function Home() {
  return (
    <>
      <MainScreen />
      <GuidelineSection />
      <CategoriesGrid />
      <BestFreelancersOfMonth />
    </>
  );
}
