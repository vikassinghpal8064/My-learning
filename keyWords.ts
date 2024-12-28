//readonly
//Used to create properties in classes or types that can only be read, not modified.


interface User {
    readonly id: number;
    name: string;
}
//keyof
//Extracts the keys of an object type as a union of string literals.


type User1 = { id: number; name: string; };
type UserKeys = keyof User; // "id" | "name"
//infer
//Used in conditional types to infer types.


type GetType<T> = T extends Promise<infer U> ? U : T;

//Partial
//A utility type that makes all properties of a type optional.


type User2 = { id: number; name: string; };
type PartialUser = Partial<User>; // { id?: number; name?: string }
//Record
//Creates a type with keys of type K and values of type T.


type RolePermissions = Record<string, string[]>; 
//Exclude
//Constructs a type by excluding properties from another type.


type A1 = "a" | "b" | "c";
type B1 = Exclude<A, "b">; // "a" | "c"
//Extract
//Constructs a type by extracting properties from another type.


type A = "a" | "b" | "c";
type B = Extract<A, "a" | "c">; // "a" | "c"
//Required
//A utility type that makes all properties of a type required.


type User3= { id?: number; name?: string; };
type RequiredUser = Required<User>; // { id: number; name: string }
//NonNullable
//Removes null and undefined from a type.


type T = string | null | undefined;
type NonNullableT = NonNullable<T>; // string
//is (Type Guards)
//Used in functions to narrow down the type of a value.


function isString(value: unknown): value is string {
    return typeof value === "string";
}