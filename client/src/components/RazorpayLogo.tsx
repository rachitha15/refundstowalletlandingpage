interface RazorpayLogoProps {
  className?: string;
}

export default function RazorpayLogo({ className = "h-8 w-auto" }: RazorpayLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Replace this placeholder SVG with your actual Razorpay logo SVG code */}
      <rect x="0" y="10" width="30" height="30" rx="4" fill="#2b84e0" />
      <text x="40" y="32" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#2b84e0">
        Razorpay
      </text>
    </svg>
  );
}