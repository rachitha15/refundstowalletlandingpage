import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, AlertCircle, Phone, Package, CreditCard, FileText, Users, HelpCircle } from "lucide-react";
import razorpayLogo from "@assets/image_1752737779222.png";
import refundModalVideo from "@assets/Refund modal experience_1752746292898.mov";
import customerExperienceVideo from "@assets/payment_experience_1752746423953.mov";

export default function UserGuide() {
  const [activeSection, setActiveSection] = useState<string>("setup");

  const sections = [
    { id: "setup", title: "Setup Instructions", icon: <CheckCircle className="w-5 h-5" /> },
    { id: "issuing", title: "Issuing Refunds", icon: <CreditCard className="w-5 h-5" /> },
    { id: "modal", title: "Refund Modal Guide", icon: <Package className="w-5 h-5" /> },
    { id: "errors", title: "Error Handling", icon: <AlertCircle className="w-5 h-5" /> },
    { id: "reconciliation", title: "Reconciliation", icon: <FileText className="w-5 h-5" /> },
    { id: "notifications", title: "Customer Notifications", icon: <Users className="w-5 h-5" /> },
    { id: "customer-experience", title: "Customer Experience", icon: <Users className="w-5 h-5" /> },
    { id: "faqs", title: "FAQs", icon: <HelpCircle className="w-5 h-5" /> },
  ];

  const prerequisites = [
    "Your store is hosted on Shopify",
    "You use Razorpay Magic Checkout for payment processing"
  ];

  const errorScenarios = [
    { scenario: "No phone number", result: "Shows inline error" },
    { scenario: "Missing required fields", result: "Highlights all missing fields on submit" },
    { scenario: "Amount > order value", result: "Shows capped value and error" },
    { scenario: "API error", result: "Displays code and message, keeps form values" },
    { scenario: "Not onboarded to Razorpay", result: "Modal shows CTA to onboard via Typeform" },
  ];

  const faqs = [
    {
      question: "Can I refund only part of an order?",
      answer: "Yes, just select specific items and quantities."
    },
    {
      question: "Can I use this for service recovery (e.g., goodwill ₹100)?",
      answer: "Yes, override the refund amount and use \"Other\" as reason."
    },
    {
      question: "What if customer paid via Wallet + Card?",
      answer: "You can still refund via Wallet using this modal."
    },
    {
      question: "Can I refund prepaid UPI orders to wallet?",
      answer: "Yes, works for all modes of payment."
    },
    {
      question: "How long does it take for the refund to reflect in the wallet?",
      answer: "Immediately — under 3 seconds."
    }
  ];

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
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-3">
                <img src={razorpayLogo} alt="Razorpay" className="h-8 w-auto" />
                <h1 className="text-xl font-semibold text-razorpay-dark">Refund to Wallet User Guide</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Index</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                          activeSection === section.id ? 'bg-razorpay-blue/10 text-razorpay-blue border-r-2 border-razorpay-blue' : 'text-gray-700'
                        }`}
                      >
                        {section.icon}
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-razorpay-dark">Welcome to Refund to Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Welcome to the Refund to Wallet feature powered by Razorpay Wallet for Shopify merchants using Magic Checkout. 
                  This guide helps you onboard, set up, and use the feature effectively.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Prerequisites
                  </h3>
                  <div className="space-y-2">
                    {prerequisites.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 text-blue-800">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>



            {/* Setup Instructions */}
            <Card id="setup">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Setup Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-razorpay-blue pl-4">
                    <h3 className="font-semibold text-razorpay-dark mb-2">1. Install the Razorpay Rewards & Wallets App</h3>
                    <p className="text-gray-600 mb-3">
                      Visit: <a href="https://apps.shopify.com/razorpay-rewards-gift-cards" className="text-razorpay-blue hover:underline" target="_blank" rel="noopener noreferrer">
                        Razorpay Wallet App on Shopify
                      </a>
                    </p>
                    <p className="text-gray-600">Click "Install" and authorize access to your Shopify store.</p>
                  </div>

                  <div className="border-l-4 border-razorpay-blue pl-4">
                    <h3 className="font-semibold text-razorpay-dark mb-2">2. Connect Your Razorpay Account</h3>
                    <p className="text-gray-600">
                      Once installed, open the app and click on <strong>"Connect your Razorpay account"</strong>.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. You're Done!</h3>
                    <p className="text-gray-600">
                      Once connected, no technical integration is needed. You can now refund to wallet directly from Shopify.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Issuing Refunds */}
            <Card id="issuing">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  Issuing a Refund to Wallet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <span>Go to <strong>Shopify Admin &gt; Orders</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <span>Click on the order you wish to refund</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <span>From the <strong>More Actions</strong> dropdown, select <strong>"Refund to Wallet"</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <span>The <strong>Refund Modal</strong> will appear</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Modal Guide */}
            <Card id="modal">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <Package className="w-6 h-6" />
                  Refund Modal – Field-by-Field Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">Each section of the modal is designed for fast and error-free operation:</p>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-razorpay-dark mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      1. Item Selection
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• All items in the order are listed with checkboxes</li>
                      <li>• Select the item(s) to refund</li>
                      <li>• Use <strong>"Select All"</strong> to select everything at once</li>
                      <li>• You can <strong>adjust quantities</strong> per item (cannot exceed ordered quantity)</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-razorpay-dark mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      2. Restock Option (Per Item)
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Checkbox to indicate if returned items should be restocked</li>
                      <li>• Enabling this shows a dropdown for <strong>restock location</strong></li>
                      <li>• Inventory will update in Shopify accordingly</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-razorpay-dark mb-3 flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      3. Refund Amount
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Auto-calculated based on item price + quantity</li>
                      <li>• You can <strong>manually override</strong> this amount</li>
                      <li>• Validation prevents exceeding original order value</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-razorpay-dark mb-3 flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      4. Customer Phone Number
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Auto-filled from Shopify order (if available)</li>
                      <li>• If missing, <strong>you must enter a valid Indian mobile number</strong></li>
                      <li>• Format validation: 10 digits or +91 prefix</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-razorpay-dark mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      5. Refund Reason
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Choose a reason from the dropdown: Size issue, Quality problem, Damaged item, Other</li>
                      <li>• If "Other" is selected, a custom input appears (max 100 characters)</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-razorpay-dark mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      6. Notes (Required)
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Default note is auto-generated (includes refund amount)</li>
                      <li>• You can customize the note — it gets saved in order timeline</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4 bg-green-50">
                    <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      7. Submit Refund
                    </h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Click <strong>Submit</strong> to process the refund</li>
                      <li>• Button shows loading state</li>
                      <li>• On success: Modal closes, Order note is added in Shopify, SMS is sent to customer</li>
                    </ul>
                  </div>
                </div>
                
                {/* Refund Modal Demo Video */}
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-semibold text-razorpay-dark mb-3">See the Refund Modal in Action</h3>
                  <p className="text-gray-600 mb-4">Watch step-by-step demo of processing refund to customer's wallet</p>
                  
                  <video
                    src={refundModalVideo}
                    controls
                    className="rounded-lg shadow-md mx-auto"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CardContent>
            </Card>

            {/* Error Handling */}
            <Card id="errors">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Error Handling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">The system handles edge cases for a smooth experience:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-3 text-left font-semibold">Scenario</th>
                        <th className="border p-3 text-left font-semibold">What Happens</th>
                      </tr>
                    </thead>
                    <tbody>
                      {errorScenarios.map((error, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border p-3 font-medium">{error.scenario}</td>
                          <td className="border p-3 text-gray-600">{error.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Reconciliation */}
            <Card id="reconciliation">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Reconciliation & Accounting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <ul className="space-y-3 text-blue-800">
                      <li>• Every refund is recorded as a <strong>Wallet Credit</strong> with a unique transaction ID</li>
                      <li>• Order note includes: <code className="bg-blue-100 px-2 py-1 rounded">"Refunded to Razorpay wallet with transaction ID {"{ientxn_234}"}. Refund reason: {"{reason}"}"</code></li>
                      <li>• You can download transaction reports from Razorpay Dashboard</li>
                      <li>• Razorpay settles only for card/UPI/netbanking amounts. Wallet refunds are tracked separately</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Notifications */}
            <Card id="notifications">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Customer Notification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Customers will receive an SMS like:</p>
                <div className="bg-gray-100 border rounded-lg p-4 font-mono text-sm">
                  ₹500 refund credited to your Razorpay Wallet by {"{Merchant Name}"} for Order #{"{ID}"}. Balance available: ₹500
                </div>
              </CardContent>
            </Card>

            {/* Customer Experience */}
            <Card id="customer-experience">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Customer Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  After receiving wallet credits, customers can seamlessly use their Razorpay Wallet balance as a payment method 
                  on Magic Checkout for future purchases from your store.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-900 mb-3">How it works for customers:</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Customer receives instant wallet credit notification via SMS</li>
                    <li>• During checkout, wallet balance appears as payment option</li>
                    <li>• Seamless one-click payment experience</li>
                  </ul>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-razorpay-dark mb-3">See Magic Checkout with Wallet Payment</h3>
                  <p className="text-gray-600 mb-4">Watch how customers can use their wallet balance during checkout</p>
                </div>
                
                <video
                  src={customerExperienceVideo}
                  controls
                  className="rounded-lg shadow-md mx-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                >
                  Your browser does not support the video tag.
                </video>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Pro tip:</strong> Customers with wallet credits are more likely to return and make additional purchases, 
                    improving customer lifetime value and retention rates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card id="faqs">
              <CardHeader>
                <CardTitle className="text-xl text-razorpay-dark flex items-center gap-2">
                  <HelpCircle className="w-6 h-6" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h3 className="font-semibold text-razorpay-dark mb-2">Q: {faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-razorpay-blue/10 rounded-lg">
                  <p className="text-razorpay-dark font-medium">
                    Need more help? Reach out to your Razorpay account manager
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}