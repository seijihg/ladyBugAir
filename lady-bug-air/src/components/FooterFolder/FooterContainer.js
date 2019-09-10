import React from "react";
import CompanyCard from "./CompanyCard";
import LogoCard from "./LogoCard";
import ContactCard from "./ContactCard";
import MoreCard from "./MoreCard";
import CopyrightCard from "./CopyrightCard";

const FooterContainer = props => {
  return (
    <div className="footer_container_inside">
        <LogoCard />
        <CompanyCard />
        <ContactCard />
        <MoreCard />
        <CopyrightCard />
    </div>
  )
}
export default FooterContainer;
