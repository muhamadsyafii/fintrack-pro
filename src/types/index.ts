export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;

  type: "income" | "expense";
}
