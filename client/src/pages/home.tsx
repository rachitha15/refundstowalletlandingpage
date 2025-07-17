import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Check, ArrowRight } from "lucide-react";
import razorpayLogo from "@assets/image_1752737779222.png";
import thirdWaveLogo from "@assets/image_1752742451146.png";
import zomatoLogo from "@assets/zomato logo_1752742528720.png";
import swiggyLogo from "@assets/Swiggy_logo_1752742528721.png";
import twcLogo from "@assets/TWC_logo_without_R-01_1752742528721.png";
import decathlonLogo from "@assets/Decathlon_1752742585148.png";
import fnpLogo from "@assets/fnplogo_1752742615072.png";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src={razorpayLogo} 
                  alt="Razorpay" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-700 hover:text-razorpay-blue px-3 py-2 text-sm font-medium transition-colors"
                >
                  How it Works
                </button>
                <button
                  onClick={() => scrollToSection('who-its-for')}
                  className="text-gray-700 hover:text-razorpay-blue px-3 py-2 text-sm font-medium transition-colors"
                >
                  Who it's For
                </button>
                <button
                  onClick={() => scrollToSection('user-guide')}
                  className="text-gray-700 hover:text-razorpay-blue px-3 py-2 text-sm font-medium transition-colors"
                >
                  User Guide
                </button>
                <a
                  href="https://apps.shopify.com/razorpay-rewards-gift-cards"
                  className="bg-razorpay-cta text-white px-6 py-2 rounded text-sm font-semibold hover:bg-razorpay-cta transition-colors flex items-center gap-2"
                >
                  Install App
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-razorpay-blue"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-razorpay-blue w-full text-left"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('who-its-for')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-razorpay-blue w-full text-left"
              >
                Who it's For
              </button>
              <button
                onClick={() => scrollToSection('user-guide')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-razorpay-blue w-full text-left"
              >
                User Guide
              </button>
              <a
                href="https://apps.shopify.com/razorpay-rewards-gift-cards"
                className="block mx-3 my-2 bg-razorpay-cta text-white px-6 py-2 rounded text-sm font-semibold text-center flex items-center justify-center gap-2"
              >
                Install App
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-razorpay-light to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-razorpay-dark mb-6">
              Turn Refunds into Repeat Customers — <span className="text-razorpay-cta">Instantly.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-light">
              Refund to Razorpay Wallet is now live for all Shopify merchants using Razorpay Checkout. No setup. No cost. Just faster refunds, better retention.
            </p>
            
            {/* Merchant Logos */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center items-center gap-8 mb-4">
                <div>
                  <img
                    src={swiggyLogo}
                    alt="Swiggy"
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <img
                    src={zomatoLogo}
                    alt="Zomato"
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <img
                    src={decathlonLogo}
                    alt="Decathlon"
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <img
                    src={thirdWaveLogo}
                    alt="Third Wave Coffee"
                    className="h-12 w-auto"
                  />
                </div>
                <div>
                  <img
                    src={fnpLogo}
                    alt="Ferns N Petals"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500">Trusted by leading brands. Now available for all Shopify merchants.</p>
            </div>
            
            <a
              href="https://apps.shopify.com/razorpay-rewards-gift-cards"
              className="inline-flex items-center gap-3 bg-razorpay-cta text-white px-8 py-4 rounded text-lg font-semibold hover:bg-razorpay-cta transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Install Razorpay Wallet App
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Refund to Wallet Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-razorpay-dark mb-4">Why Refund to Wallet?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your refund process into a customer retention tool</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">Instant Refunds</h3>
                <p className="text-gray-600">Customers get credited in seconds — no bank delay</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">Boost Retention</h3>
                <p className="text-gray-600">Refunds = wallet credit = future purchases</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">Zero Cost</h3>
                <p className="text-gray-600">Free for Razorpay Checkout merchants</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">Shopify Native</h3>
                <p className="text-gray-600">Works directly from Shopify order page</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-razorpay-dark mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple, seamless refund process in 4 easy steps</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-razorpay-dark mb-2">Customer cancels/returns</h3>
              <p className="text-gray-600">Customer initiates return or cancellation process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-razorpay-dark mb-2">Navigate to Shopify orders page</h3>
              <p className="text-gray-600">Choose More Actions > Wallet refund</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-razorpay-dark mb-2">Select items & add details</h3>
              <p className="text-gray-600">Choose items, reason, restock option, add notes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-razorpay-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-razorpay-dark mb-2">Instant wallet credit</h3>
              <p className="text-gray-600">Customer gets SMS, wallet updated instantly</p>
            </div>
          </div>
          
          {/* Screenshot Placeholder */}
          <Card className="p-8 shadow-lg">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-razorpay-dark mb-2">See It In Action</h3>
                <p className="text-gray-600">The refund modal in your Shopify admin</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
                alt="Refund modal interface"
                className="rounded-lg shadow-md mx-auto max-w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-razorpay-dark mb-4">Who It's For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Perfect for every type of Shopify merchant</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">Fashion & Apparel</h3>
                <p className="text-gray-600">Retain post-return customers with instant wallet credits</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">💄</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">Beauty & Wellness</h3>
                <p className="text-gray-600">Service recovery refunds that build loyalty</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🍟</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">QSRs / Cafes</h3>
                <p className="text-gray-600">Quick refunds for missing items or order issues</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold text-razorpay-dark mb-3">D2C Shopify Brands</h3>
                <p className="text-gray-600">Install and start using in minutes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-razorpay-dark mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600">Just 5 simple requirements to get started</p>
          </div>
          
          <Card className="p-8 shadow-lg">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-razorpay-dark">Use Shopify</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-razorpay-dark">Use Razorpay Checkout</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-razorpay-dark">Install Razorpay Rewards & Wallets app</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-razorpay-dark">Connect your Razorpay merchant ID</span>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-razorpay-dark">Click "Refund to Wallet" on your order page. Done.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* User Guide Callout */}
      <section id="user-guide" className="py-16 lg:py-24 bg-razorpay-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📘</div>
          <h2 className="text-3xl md:text-4xl font-bold text-razorpay-dark mb-4">Need step-by-step help?</h2>
          <p className="text-xl text-gray-600 mb-8">Check out our comprehensive user guide for detailed instructions</p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-razorpay-blue border-razorpay-blue hover:bg-gray-50 text-lg px-8 py-4 shadow-md"
          >
            User Guide for Refund to Wallet
          </Button>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="py-16 lg:py-24 bg-razorpay-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Using Refund to Wallet — It's Free.</h2>
          <p className="text-xl text-gray-300 mb-8">Transform your refund process and boost customer retention today</p>
          <a
            href="https://apps.shopify.com/razorpay-rewards-gift-cards"
            className="inline-flex items-center gap-3 bg-razorpay-cta text-white px-8 py-4 rounded text-lg font-semibold hover:bg-razorpay-cta transform hover:scale-105 transition-all duration-200 shadow-lg mb-6"
          >
            Install Razorpay Wallet App
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-gray-400">
            Need help? Contact your Razorpay account manager or write to{' '}
            <a href="mailto:magic@razorpay.com" className="text-razorpay-accent hover:underline">
              magic@razorpay.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-razorpay-blue mb-4">Razorpay</h3>
              <p className="text-gray-400">Powering digital payments for millions of businesses</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Payment Gateway</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Razorpay X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Razorpay Capital</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Razorpay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
