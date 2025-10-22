import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, AlertCircle, Phone, Package, CreditCard, FileText, Users, HelpCircle, Code } from "lucide-react";
import razorpayLogo from "@assets/image_1752737779222.png";
import refundModalVideo from "@assets/Refund modal experience_1752746292898.mov";

export default function DirectApiIntegration() {
  const [activeSection, setActiveSection] = useState<string>("setup");

  const sections = [
    { id: "setup", title: "Razorpay Setup", icon: <CheckCircle className="w-5 h-5" /> },
    { id: "test-refund", title: "Test Refund Process", icon: <CreditCard className="w-5 h-5" /> },
    { id: "direct-api", title: "Direct API Integration", icon: <Code className="w-5 h-5" /> },
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
        threshold: 0.1,
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-0 sm:h-16 gap-4 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center gap-2 flex-shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6 hidden sm:block" />
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <img src={razorpayLogo} alt="Razorpay" className="h-6 sm:h-8 w-auto flex-shrink-0" />
                <h1 className="text-sm sm:text-lg lg:text-xl font-semibold text-razorpay-dark truncate">
                  <span className="sm:hidden">API Integration</span>
                  <span className="hidden sm:inline">Direct API Integration</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <Card className="p-4">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-lg">Setup Guide</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-razorpay-light text-razorpay-blue'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {section.icon}
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Setup Instructions */}
            <section id="setup">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Razorpay Setup Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-razorpay-dark mb-2">Install the Razorpay Rewards & Wallets App</h3>
                        <p className="text-gray-600 mb-3">
                          Visit the Shopify App Store and install the "Razorpay Rewards & Wallets" app on your store.
                        </p>
                        <a
                          href="https://apps.shopify.com/razorpay-rewards-gift-cards"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-razorpay-cta text-white px-4 py-2 rounded text-sm font-semibold hover:bg-razorpay-cta transition-colors"
                        >
                          Install App
                          <Package className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-razorpay-dark mb-2">Connect Your Razorpay Account</h3>
                        <p className="text-gray-600 mb-3">
                          Once installed, open the app and connect your Razorpay merchant account. You'll need your Razorpay merchant ID.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-blue-800">
                                <strong>Important:</strong> Make sure you're using Razorpay Magic Checkout for payment processing on your Shopify store.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-razorpay-dark mb-2">Access the Refund Feature</h3>
                        <p className="text-gray-600">
                          Navigate to any order in your Shopify admin. You should now see "Refund to Wallet" option in the "More actions" dropdown on the order page.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Test Refund Process */}
            <section id="test-refund">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-orange-500" />
                    Test Refund Process (Mandatory)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-orange-800">
                          <strong>Important:</strong> Before setting up Direct API integration, you must complete at least one test refund to wallet. This is mandatory for the integration to work properly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-razorpay-dark mb-2">Pick a Test Order</h3>
                        <p className="text-gray-600">
                          Go to your Shopify admin and select any completed order (preferably a small value order for testing). Make sure the order was paid using Razorpay Magic Checkout.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-razorpay-dark mb-2">Process the Test Refund</h3>
                        <p className="text-gray-600 mb-3">
                          Follow the refund process using the "Refund to Wallet" option. For detailed steps on using the refund modal, refer to the guide below.
                        </p>
                        <Link href="/user-guide">
                          <Button variant="outline" className="text-razorpay-blue border-razorpay-blue hover:bg-razorpay-light">
                            View Detailed Refund Modal Guide
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-razorpay-dark mb-2">Verify Test Refund</h3>
                        <p className="text-gray-600">
                          Confirm that the test refund was processed successfully and the customer received the wallet credit. You should see the refund reflected in your Razorpay dashboard.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-green-800">
                          <strong>Success!</strong> Once you've completed a test refund successfully, you can proceed to the Direct API integration setup.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Direct API Integration */}
            <section id="direct-api">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-purple-500" />
                    Direct API Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-purple-800">
                          <strong>Placeholder:</strong> Content for Direct API Integration will be added here.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Content Coming Soon</h3>
                    <p className="text-gray-600 mb-6">
                      Direct API integration documentation will be added to this section shortly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}