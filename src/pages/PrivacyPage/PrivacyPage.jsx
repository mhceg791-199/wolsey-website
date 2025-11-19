import { useEffect } from "react";
import TitleWithList from "../../components/shared/TitleWithList/TitleWithList";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function PrivacyPage() {
  const paragraphs = [
    "Wolsey Structural Engineering is dedicated to protecting the privacy and security of all personal information collected in the course of our operations. This Privacy Policy describes our practices for collecting, using, storing, and disclosing personal information in accordance with relevant data protection laws. By engaging with our services, you agree to the terms outlined in this policy.",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-[2.5rem] md:mt-[6.5rem]">
        <DescriptionAbout
          id="PRIVACY-wolesy"
          firstWord="Privacy"
          secondWord="Policy"
          paragraphs={paragraphs}
          particleColors={["#e0e0d4", "#e0e0d4"]}
          height="h-[35vh] md:h-[50vh]"
        />
      </div>

      <div className="md:px-20 px-5">
        <TitleWithList
          title="INFORMATION COLLECTION"
          text="In providing our services, we may collect both personal and non-personal information to facilitate effective engagement. 
Information we may gather includes, but is not limited to:"
          list={[
            "Personal Identifiers: Full name, contact details, employment information, and other necessary identifiers for our business processes.",
            "Usage Data: Interaction data with Wolsey’s platforms to improve service quality and user experience.",
          ]}
        />
        <TitleWithList
          title="PURPOSE OF DATA COLLECTION"
          text="Wolsey collects personal data solely to enhance service quality, optimise operational efficiency, and deliver a secure, personalised experience. Key purposes include:"
          list={[
            "Enhancing User Experience: Analysing usage patterns to improve our services.",
            "Compliance and Legal Obligations: Meeting regulatory requirements and facilitating necessary audits or disclosures.",
          ]}
        />
        <TitleWithList
          title="DATA SECURITY"
          text="We implement industry-standard security measures to protect your information from unauthorised access, modification, or destruction. This includes encryption, secure data storage, and strict access controls."
        />
        <TitleWithList
          title="DATA SHARING AND DISCLOUSRE"
          text="Wolsey respects your privacy and does not share personal information with third parties outside our organisation, except as outlined here. Data may be shared under the following circumstances:"
          list={[
            "Service Providers: Trusted partners that assist us in delivering our services, under strict confidentiality agreements.",
            "Legal Compliance: When required by law or in response to legal proceedings.",
            "Corporate Transactions: In the event of mergers, acquisitions, or other corporate restructuring, in line with data protection regulations.",
          ]}
        />
        <TitleWithList
          title="DATA RETENTION"
          text="Personal data is retained only as long as necessary to fulfil the purposes outlined in this policy or as legally required. When no longer needed, data is securely disposed of to prevent unauthorised access."
        />
        <TitleWithList
          title="POLICY CHANGES"
          text="Wolsey reserves the right to update this Privacy Policy to reflect changes in our practices, legal requirements, or operational needs. Updated policies will be posted on our website, with the “Last Updated” date indicating the most recent revisions."
        />
        <TitleWithList
          title="CONTACT US"
          text="For questions or concerns regarding this Privacy Policy or your personal data, please contact our Data Protection Officer through the contact information provided on our website."
        />
      </div>
    </>
  );
}

export default PrivacyPage;

