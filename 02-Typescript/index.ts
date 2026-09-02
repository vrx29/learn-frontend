function test(user: any) {
  console.log(user.name.firstname);
}

test({
  //   name: {
  firstname: "Vineet",
  lastname: "Kumar",
  //   },
});

/**
 * any -> allows types to remove checks but causes issue at runtime
 * unknown -> allows you to set any value to type unknown but doesn't allow you to access before proper check
 * e:g: if(value == string) // working code
 * never -> functions and values that will never execute or reach when whole context is executed
 * e.g: error functions function test(): never {
 *  throw new Error()
 * }
 */

// Utility Types
// Pick<Type, Keys> : creates new type by selecting a subset of properties from existing type
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserContactInfo = Pick<User, "name" | "email">;

// Omit<Type, Keys> : Creates a new type by excluding specific properties from an existing type

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserProfile = Omit<User, "id" | "age">;

// Partial<Type> : This utitlity type makes all properties of a type optional
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type PartialUser = Partial<User>;

// Readonly<Type> : This utility type makes all properties of a type immutable
interface Config {
  apiUrl: string;
  timeout: number;
}

// Creates a read only Config of type 'Config'
const config: Readonly<Config> = {
  apiUrl: "http://",
  timeout: 2,
};

// Record<Keys, Type> : This utility type creates an object type with specified keys and values

type Role = "admin" | "user" | "guest";

type Permissionss = Record<Role, string[]>;

const permissions: Permissionss = {
  admin: ["read", "write"],
  user: ["read"],
  guest: ["read"],
};

// Required<Type> : This utility is inverse of partial = makes all optional properties mandatory
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
type MandatoryUser = Required<PartialUser>;


