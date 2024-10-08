 
import ResetPassword from "@/components/recover/ResetPassoword";
import React from "react";

export const metadata = {
  title: "Reset your Password",
  description: "This is a log in page",
};

const Page = ({searchParams}) => {
  return <ResetPassword token={searchParams.token}/>;
};

export default Page;
