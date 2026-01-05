import { ChartLine,ShoppingCart,UserStar } from 'lucide-react'

export const recentActivityData = [
  { 
    chartIcon : <ChartLine/>,
    title: "Expense Logged",
    description: "Expense Related to Marketing",
    date: "Jan 3,2026",
  },
  {
    title: "Expense Logged",
    chartIcon : <ChartLine/>,
    description: "Expense Related to Travel",
    date: "Jan 3,2026",
  },
  {
    title: "Expense Logged",
    chartIcon : <ChartLine/>,
    description: "Expense Related to Office Suplies",
    date: "Jan 2,2026",
  },
  {
    title: "Expense Logged",
    chartIcon : <ChartLine/>,
    description: "Expense Related to Marketing",
    date: "Jan 2,2026",
  },
  {
    title: "New Order #ORD-00001",
    chartIcon : <ShoppingCart/>,
    description: "Order received from Christopher Harris",
    date: "Jan 2,2026",
  },
  {
    title: "New Order #ORD-00041",
    chartIcon : <ShoppingCart/>,
    description: "Order received from John Dee",
    date: "Jan 2,2026",
  },
  {
    title: "New Order #ORD-00136",
    chartIcon : <ShoppingCart/>,
    description: "David Walsh just registered",
    date: "Jan 2,2026",
  },
  {
    title: "New Customer",
    chartIcon : <UserStar/>,
    description: "Sophia Garcia just registered",
    date: "Jan 2,2026",
  },
];

export const systemAlertData = [
  {
    title: "Suspended Account",
    description: "12 vendor accounts are currently suspended",
    time: "2h ago",
  },
  {
    title: "Payment Failures",
    description: "16 transactions failed to process",
    time: "30m ago",
  }, 
  {
    title: "Action Required: Pending Orders",
    description: "There are 27 orders awaiting processing.",
    time: "Just now",
  }, 
  {
    title: "High Expenses Detected",
    description: "39 expenses recorded above $1,000 threshold.",
    time: "5h ago",
  }, 
  {
    title: "Vendor Approvals",
    description: "10 new vendor applications need review.",
    time: "1h ago",
  },

];



export const VendorData = [
    {
      vendorName: "TechHub Store",
      owners: "Michael owen",
      totalSales: "$15,000",
      product: 25,
      productsSold: 120,
      percentage: 60,
      rating: 4.5,
      status: "Active",
      categoris: "Electronics",
    },
    {
      vendorName: "Gadget World",
      owners: "Sarah Lee",
      totalSales: "$12,500",
      product: 12,
      productsSold: 95,
      percentage: 45,
      rating: 4.2,
      status: "Active",
      categoris: "Accessories",
    },
    {
      vendorName: "SoftSolutions",
      owners: "David Kim",
      totalSales: "$9,800",
      product: 7,
      productsSold: 80,
      percentage: 38,
      rating: 4.0,
      status: "Inactive",
      categoris: "Software",
    },
    {
      vendorName: "Device Depot",
      owners: "Emily Chen",
      totalSales: "$11,200",
      product: 15,
      productsSold: 110,
      percentage: 40,
      rating: 4.3,
      status: "Active",
      categoris: "Fashion",
    },
    {
      vendorName: "Accessory Alley",
      owners: "James Brown",
      totalSales: "$8,600",
      product: 5,
      productsSold: 70,
      percentage: 30,
      rating: 4.1,
      status: "Banned",
      categoris: "Home & Garden",
    },
    {
      vendorName: "CodeCrafters",
      owners: "Olivia Davis",
      totalSales: "$10,400",
      product: 9,
      productsSold: 85,
      percentage: 39,
      rating: 4.4,
      status: "Active",
      categoris: "Beauty",
    },
    {
      vendorName: "Gizmo Galaxy",
      owners: "Liam Wilson",
      totalSales: "$13,300",
      product: 25,
      productsSold: 105,
      percentage: 44,
      rating: 4.6,
      status: "Active",
      categoris: "Electronics",
    },
    {
      vendorName: "Tech Trends",
      owners: "Sophia Martinez",
      totalSales: "$9,200",
      product: 8,
      productsSold: 75,
      percentage: 33,
      rating: 4.2,
      status: "Inactive",
      categoris: "Sports",
    },
    {
      vendorName: "AppArena",
      owners: "Ethan Anderson",
      totalSales: "$11,800",
      product: 14,
      productsSold: 90,
      percentage: 42,
      rating: 4.5,
      status: "Active",
      categoris: "Books",
    },
    {
      vendorName: "Digital Den",
      owners: "Isabella Thomas",
      totalSales: "$14,100",
      percentage: 49,
      product: 20,
      productsSold: 115,
      rating: 4.7,
      status: "Active",
      categoris: "Toys",
    },
  ];
  
  
  export const topProductData = [
    {
     id : 1,
     ExpenseName : "Office Supplies",
     quantity : "9.2%",
     Expense: 150000,
   },
   {
     id : 2,
    ExpenseName: "Marketting",
     quantity : "12.7%",
    Expense: 134000,
   },
   {
     id : 3,
    ExpenseName: "Software",
     quantity : "11.0%",
    Expense: 115000,
   },
   {
     id : 4,
    ExpenseName: "Utilities",
     quantity : "24.3%",
    Expense: 21200,
   },
   {
     id : 5,
    ExpenseName: "Operations",
     quantity : "9.8%",
    Expense: 72000,
   }, {
    id : 6,
   ExpenseName: "Personal",
    quantity : "5%",
   Expense: 45000,
  },
  {
    id : 7,
   ExpenseName: "Travel",
    quantity : "10%",
   Expense: 15000,
  },
  {
    id : 8,
   ExpenseName: "Sports",
    quantity : "14%",
   Expense: 35000,
  },
  {
    id : 9,
   ExpenseName: "Electronics",
    quantity : "15%",
   Expense: 65000,
  },
  {
    id : 10,
   ExpenseName: "Home & Garden",
    quantity : "7%",
   Expense: 21000,
  },
  {
    id : 11,
   ExpenseName: "Fashion",
    quantity : "25%",
   Expense: 150000,
  },
  {
    id : 12,
   ExpenseName: "Books",
    quantity : "13%",
   Expense: 27000,
  },
   

 ];
