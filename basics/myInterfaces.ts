interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  googleId?: number;
  startStudy(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
    token: string
}

// inheritance from existing interface
interface Admin extends User {
    role: "admin" | "user" | "dev" 
}

const chandan: Admin = {
  dbID: 379,
  role: "dev",
  token: "zex",
  email: "ch@gmail.com",
  userId: 18,
  googleId: 34234,
  startStudy: () => {
    return "startSudy";
  },
  getCoupon: (name: "chan20", off: 20) => {
    return 20;
  },
};
