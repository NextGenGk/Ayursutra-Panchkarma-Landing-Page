import { LegalLayout } from "@/components/legal/legal-layout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy"
      lastUpdated="September 26, 2025"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <p className="text-foreground/90 leading-relaxed mb-4">
            This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service. It explains Your privacy rights and how the law protects You.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>

        {/* Interpretation and Definitions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Interpretation and Definitions</h2>
          
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-foreground/90">Interpretation</h3>
            <p className="text-foreground/80">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. 
              The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-foreground/90">Definitions</h3>
            <p className="text-foreground/80">For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
              <li><strong>Application</strong> refers to AyurSutra, the software program provided by the Company.</li>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to The Blue Boon, Durg, Chhattishgarg (C.G), 491001.</li>
              <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
              <li><strong>Country</strong> refers to: Chhattisgarh, India</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Application or the Website or both.</li>
              <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
              <li><strong>Website</strong> refers to AyurSutra, accessible from <a href="https://ayursutra.devgaurav.me/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ayursutra.devgaurav.me/</a></li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </div>
        </section>

        {/* Collecting and Using Personal Data */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Collecting and Using Your Personal Data</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground/90">Types of Data Collected</h3>
            
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-foreground/85">Personal Data</h4>
              <p className="text-foreground/80">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. 
                Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-medium text-foreground/85">Usage Data</h4>
              <p className="text-foreground/80">
                Usage Data is collected automatically when using the Service. This may include information such as Your Device's Internet Protocol address (e.g. IP address), 
                browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, 
                unique device identifiers and other diagnostic data.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium text-foreground/90">Use of Your Personal Data</h3>
            <p className="text-foreground/80">The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 text-foreground/80">
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account</li>
              <li>For the performance of a contract</li>
              <li>To contact You</li>
              <li>To provide You with news, special offers and general information</li>
              <li>To manage Your requests</li>
              <li>For business transfers</li>
              <li>For other purposes: We may use Your information for data analysis, identifying usage trends, and improving our Service.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium text-foreground/90">Retention of Your Personal Data</h3>
            <p className="text-foreground/80">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-medium text-foreground/90">Security of Your Personal Data</h3>
            <p className="text-foreground/80">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, 
              or method of electronic storage is 100% secure.
            </p>
          </div>
        </section>

        {/* Additional Privacy Sections */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
            <p className="text-foreground/80">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable 
              information from anyone under the age of 13.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">Links to Other Websites</h2>
            <p className="text-foreground/80">
              Our Service may contain links to other websites that are not operated by Us. We strongly advise You to review 
              the Privacy Policy of every site You visit.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">Changes to this Privacy Policy</h2>
            <p className="text-foreground/80">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new 
              Privacy Policy on this page.
            </p>
            <p className="text-foreground/80">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>
          </div>
        </section>
      </div>

    </LegalLayout>
  );
}
