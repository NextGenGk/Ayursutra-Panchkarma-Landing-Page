import { LegalLayout } from "@/components/legal/legal-layout";

export default function CookiesPolicy() {
  return (
    <LegalLayout 
      title="Cookies Policy"
      lastUpdated="September 26, 2025"
    >
      <div className="space-y-6">
        <div className="prose prose-lg max-w-none">
          <p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the <a href="https://www.termsfeed.com/cookies-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookies Policy Generator</a>.</p>
          
          <p>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>
          
          <p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>
          
          <h3 className="text-xl font-medium mb-2">Interpretation</h3>
          <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          
          <h3 className="text-xl font-medium mb-2">Definitions</h3>
          <p className="mb-4">For the purposes of this Cookies Policy:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to The Blue Boon, Durg, Chhattisgarh (C.G), 490001.</li>
            <li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
            <li><strong>Website</strong> refers to AyurSutra, accessible from <a href="https://ayursutra.devgaurav.me/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ayursutra.devgaurav.me/</a></li>
            <li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">The use of the Cookies</h2>
          
          <h3 className="text-xl font-medium mb-2">Type of Cookies We Use</h3>
          <p className="mb-4">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
          <p className="mb-6">We use both session and persistent Cookies for the purposes set out below:</p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h4 className="text-lg font-semibold mb-2">Necessary / Essential Cookies</h4>
              <p className="mb-2"><strong>Type:</strong> Session Cookies</p>
              <p className="mb-2"><strong>Administered by:</strong> Us</p>
              <p>These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h4 className="text-lg font-semibold mb-2">Functionality Cookies</h4>
              <p className="mb-2"><strong>Type:</strong> Persistent Cookies</p>
              <p className="mb-2"><strong>Administered by:</strong> Us</p>
              <p>These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Your Choices Regarding Cookies</h3>
          <p className="mb-4">If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
          <p className="mb-6">If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
          
          <p className="mb-4">If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser:</p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.google.com/accounts/answer/32050</a></li>
            <li>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://support.microsoft.com/kb/278835</a></li>
            <li>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li>
            <li>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
          </ul>
          
          <p className="mb-6">For any other web browser, please visit your web browser's official web pages.</p>
          
          <h3 className="text-xl font-medium mb-4">More Information about Cookies</h3>
          <p>You can learn more about cookies here: <a href="https://www.termsfeed.com/blog/cookies/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">All About Cookies by TermsFeed</a>.</p>
        </div>
      </div>
    </LegalLayout>
  );
}