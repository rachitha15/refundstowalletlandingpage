interface RazorpayLogoProps {
  className?: string;
}

export default function RazorpayLogo({ className = "h-8 w-auto" }: RazorpayLogoProps) {
  return (
    <svg
      className={className}
      width="120"
      height="25"
      viewBox="0 0 120 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Razorpay R symbol */}
      <path d="M7.76 6.76L6.76 10.45L12.47 6.74L8.74 20.74L12.53 20.75L18.04 0.06" fill="#3395FF"/>
      <path d="M1.62 14.86L0.05 20.75H7.82L11.00 8.77L1.62 14.86Z" fill="#3395FF"/>
      
      {/* Razorpay text */}
      <text x="25" y="16" fontFamily="Inter, system-ui, sans-serif" fontSize="14" fontWeight="600" fill="#072654">
        Razorpay
      </text>
    </svg>
  );
}