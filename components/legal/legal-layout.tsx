import { ReactNode } from 'react';

type LegalLayoutProps = {
  children: ReactNode;
  title: string;
  lastUpdated: string;
};

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-semibold 
            prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:mb-6 
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 
            prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 
            prose-p:text-foreground/90 prose-p:leading-relaxed 
            prose-ul:list-disc prose-ul:pl-6 prose-li:my-1.5 
            prose-a:text-primary hover:prose-a:text-primary/80 prose-a:transition-colors">
            {children}
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <p className="mb-6">If you have any questions about this document, you can contact us:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:abrmkprm@gmail.com" className="hover:text-primary transition-colors">abrmkprm@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://ayursutra.devgaurav.me/" className="hover:text-primary transition-colors">https://ayursutra.devgaurav.me/</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
