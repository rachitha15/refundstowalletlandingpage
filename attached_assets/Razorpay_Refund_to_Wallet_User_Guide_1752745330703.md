
# Razorpay Refund to Wallet – Merchant User Guide

Welcome to the Refund to Wallet feature powered by Razorpay Wallet for Shopify merchants using Magic Checkout. This guide helps you onboard, set up, and use the feature effectively.

---

## 🛠️ Prerequisites

You must meet the following criteria to use Refund to Wallet:
- ✅ Your store is hosted on **Shopify**
- ✅ You use **Razorpay Magic Checkout** for payment processing

---

## 🚀 Setup Instructions

1. **Install the Razorpay Rewards & Wallets App**  
   Visit: [Razorpay Wallet App on Shopify](https://apps.shopify.com/razorpay-rewards-gift-cards)  
   Click “Install” and authorize access to your Shopify store.

2. **Connect Your Razorpay Account**  
   Once installed, open the app and click on **“Connect your Razorpay Merchant ID”**.  
   Log in with your Razorpay credentials to link your account.

3. **You’re Done!**  
   Once connected, no technical integration is needed. You can now refund to wallet directly from Shopify.

---

## 💳 Issuing a Refund to Wallet

To issue a refund to a customer’s Razorpay Wallet:

1. Go to **Shopify Admin > Orders**
2. Click on the order you wish to refund
3. From the **More Actions** dropdown, select **“Refund to Wallet”**
4. The **Refund Modal** will appear

---

## 🧾 Refund Modal – Field-by-Field Guide

Each section of the modal is designed for fast and error-free operation:

---

### 1. 📦 Item Selection

- All items in the order are listed with checkboxes
- Select the item(s) to refund
- Use **“Select All”** to select everything at once
- You can **adjust quantities** per item (cannot exceed ordered quantity)

---

### 2. 📦 Restock Option (Per Item)

- Checkbox to indicate if returned items should be restocked
- Enabling this shows a dropdown for **restock location**
- Inventory will update in Shopify accordingly

---

### 3. 🧾 Refund Amount

- Auto-calculated based on item price + quantity
- You can **manually override** this amount
- Validation prevents exceeding original order value

---

### 4. ☎️ Customer Phone Number

- Auto-filled from Shopify order (if available)
- If missing, **you must enter a valid Indian mobile number**
- Format validation: 10 digits or +91 prefix

---

### 5. 📄 Refund Reason

- Choose a reason from the dropdown:  
  e.g. Size issue, Quality problem, Damaged item, Other
- If “Other” is selected, a custom input appears (max 100 characters)

---

### 6. 📝 Notes (Required)

- Default note is auto-generated (includes refund amount)
- You can customize the note — it gets saved in order timeline

---

### 7. ✅ Submit Refund

- Click **Submit** to process the refund
- Button shows loading state
- On success:
  - Modal closes
  - Order note is added in Shopify
  - SMS is sent to customer with wallet credit confirmation

---

## 🚨 Error Handling

The system handles edge cases for a smooth experience:

| Scenario | What Happens |
|----------|--------------|
| No phone number | Shows inline error |
| Missing required fields | Highlights all missing fields on submit |
| Amount > order value | Shows capped value and error |
| API error | Displays code and message, keeps form values |
| Not onboarded to Razorpay | Modal shows CTA to onboard via Typeform |

---

## 🧾 Reconciliation & Accounting

- Every refund is recorded as a **Wallet Credit** with a unique transaction ID
- Order note includes:  
  `"Refunded to Razorpay wallet with transaction ID {ientxn_234}. Refund reason: {reason}"`
- You can download transaction reports from Razorpay Dashboard
- Razorpay settles only for card/UPI/netbanking amounts. Wallet refunds are tracked separately

---

## 📬 Customer Notification

Customers will receive an SMS like:  
```
₹500 refund credited to your Razorpay Wallet by {Merchant Name} for Order #{ID}. Balance available: ₹500
```

---

## ❓FAQs

**Q: Can I refund only part of an order?**  
Yes, just select specific items and quantities.

**Q: Can I use this for service recovery (e.g., goodwill ₹100)?**  
Yes, override the refund amount and use "Other" as reason.

**Q: What if customer paid via Wallet + Card?**  
You can still refund via Wallet using this modal.

**Q: Can I refund prepaid UPI orders to wallet?**  
Yes, works for all modes of payment.

**Q: How long does it take for the refund to reflect in the wallet?**  
Immediately — under 3 seconds.

---

Need more help? Reach out to your Razorpay account manager
