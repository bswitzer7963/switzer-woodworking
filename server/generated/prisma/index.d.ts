
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Req
 * 
 */
export type Req = $Result.DefaultSelection<Prisma.$ReqPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const projType: {
  Bowl: 'Bowl',
  Bat: 'Bat',
  CuttingBoard: 'CuttingBoard',
  Sign: 'Sign',
  Emblem: 'Emblem',
  Patch: 'Patch'
};

export type projType = (typeof projType)[keyof typeof projType]


export const accType: {
  Emmet: 'Emmet',
  Customer: 'Customer',
  Admin: 'Admin'
};

export type accType = (typeof accType)[keyof typeof accType]


export const sizeType: {
  Small: 'Small',
  Medium: 'Medium',
  Large: 'Large',
  Custom: 'Custom'
};

export type sizeType = (typeof sizeType)[keyof typeof sizeType]


export const projStatus: {
  Pending: 'Pending',
  Accepted: 'Accepted',
  StartedBuilding: 'StartedBuilding',
  ReadyToDeliver: 'ReadyToDeliver'
};

export type projStatus = (typeof projStatus)[keyof typeof projStatus]

}

export type projType = $Enums.projType

export const projType: typeof $Enums.projType

export type accType = $Enums.accType

export const accType: typeof $Enums.accType

export type sizeType = $Enums.sizeType

export const sizeType: typeof $Enums.sizeType

export type projStatus = $Enums.projStatus

export const projStatus: typeof $Enums.projStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.req`: Exposes CRUD operations for the **Req** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reqs
    * const reqs = await prisma.req.findMany()
    * ```
    */
  get req(): Prisma.ReqDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Req: 'Req'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "req"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Req: {
        payload: Prisma.$ReqPayload<ExtArgs>
        fields: Prisma.ReqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>
          }
          findFirst: {
            args: Prisma.ReqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>
          }
          findMany: {
            args: Prisma.ReqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>[]
          }
          create: {
            args: Prisma.ReqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>
          }
          createMany: {
            args: Prisma.ReqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>[]
          }
          delete: {
            args: Prisma.ReqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>
          }
          update: {
            args: Prisma.ReqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>
          }
          deleteMany: {
            args: Prisma.ReqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>[]
          }
          upsert: {
            args: Prisma.ReqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReqPayload>
          }
          aggregate: {
            args: Prisma.ReqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReq>
          }
          groupBy: {
            args: Prisma.ReqGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReqGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReqCountArgs<ExtArgs>
            result: $Utils.Optional<ReqCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    req?: ReqOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orderHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderHistory?: boolean | UserCountOutputTypeCountOrderHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReqWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userID: string | null
    fName: string | null
    lName: string | null
    email: string | null
    pwHash: string | null
    phNumber: string | null
    accType: $Enums.accType | null
  }

  export type UserMaxAggregateOutputType = {
    userID: string | null
    fName: string | null
    lName: string | null
    email: string | null
    pwHash: string | null
    phNumber: string | null
    accType: $Enums.accType | null
  }

  export type UserCountAggregateOutputType = {
    userID: number
    fName: number
    lName: number
    email: number
    pwHash: number
    phNumber: number
    accType: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userID?: true
    fName?: true
    lName?: true
    email?: true
    pwHash?: true
    phNumber?: true
    accType?: true
  }

  export type UserMaxAggregateInputType = {
    userID?: true
    fName?: true
    lName?: true
    email?: true
    pwHash?: true
    phNumber?: true
    accType?: true
  }

  export type UserCountAggregateInputType = {
    userID?: true
    fName?: true
    lName?: true
    email?: true
    pwHash?: true
    phNumber?: true
    accType?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userID: string
    fName: string
    lName: string
    email: string
    pwHash: string
    phNumber: string | null
    accType: $Enums.accType
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    fName?: boolean
    lName?: boolean
    email?: boolean
    pwHash?: boolean
    phNumber?: boolean
    accType?: boolean
    orderHistory?: boolean | User$orderHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    fName?: boolean
    lName?: boolean
    email?: boolean
    pwHash?: boolean
    phNumber?: boolean
    accType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    fName?: boolean
    lName?: boolean
    email?: boolean
    pwHash?: boolean
    phNumber?: boolean
    accType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userID?: boolean
    fName?: boolean
    lName?: boolean
    email?: boolean
    pwHash?: boolean
    phNumber?: boolean
    accType?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userID" | "fName" | "lName" | "email" | "pwHash" | "phNumber" | "accType", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderHistory?: boolean | User$orderHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orderHistory: Prisma.$ReqPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userID: string
      fName: string
      lName: string
      email: string
      pwHash: string
      phNumber: string | null
      accType: $Enums.accType
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { userID: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userID`
     * const userWithUserIDOnly = await prisma.user.createManyAndReturn({
     *   select: { userID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userID`
     * const userWithUserIDOnly = await prisma.user.updateManyAndReturn({
     *   select: { userID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderHistory<T extends User$orderHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$orderHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userID: FieldRef<"User", 'String'>
    readonly fName: FieldRef<"User", 'String'>
    readonly lName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly pwHash: FieldRef<"User", 'String'>
    readonly phNumber: FieldRef<"User", 'String'>
    readonly accType: FieldRef<"User", 'accType'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orderHistory
   */
  export type User$orderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    where?: ReqWhereInput
    orderBy?: ReqOrderByWithRelationInput | ReqOrderByWithRelationInput[]
    cursor?: ReqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReqScalarFieldEnum | ReqScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Req
   */

  export type AggregateReq = {
    _count: ReqCountAggregateOutputType | null
    _min: ReqMinAggregateOutputType | null
    _max: ReqMaxAggregateOutputType | null
  }

  export type ReqMinAggregateOutputType = {
    reqID: string | null
    creatorID: string | null
    projectType: $Enums.projType | null
    description: string | null
    size: $Enums.sizeType | null
    status: $Enums.projStatus | null
    customImage: string | null
    whenSubmitted: Date | null
  }

  export type ReqMaxAggregateOutputType = {
    reqID: string | null
    creatorID: string | null
    projectType: $Enums.projType | null
    description: string | null
    size: $Enums.sizeType | null
    status: $Enums.projStatus | null
    customImage: string | null
    whenSubmitted: Date | null
  }

  export type ReqCountAggregateOutputType = {
    reqID: number
    creatorID: number
    projectType: number
    description: number
    size: number
    status: number
    customImage: number
    whenSubmitted: number
    _all: number
  }


  export type ReqMinAggregateInputType = {
    reqID?: true
    creatorID?: true
    projectType?: true
    description?: true
    size?: true
    status?: true
    customImage?: true
    whenSubmitted?: true
  }

  export type ReqMaxAggregateInputType = {
    reqID?: true
    creatorID?: true
    projectType?: true
    description?: true
    size?: true
    status?: true
    customImage?: true
    whenSubmitted?: true
  }

  export type ReqCountAggregateInputType = {
    reqID?: true
    creatorID?: true
    projectType?: true
    description?: true
    size?: true
    status?: true
    customImage?: true
    whenSubmitted?: true
    _all?: true
  }

  export type ReqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Req to aggregate.
     */
    where?: ReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reqs to fetch.
     */
    orderBy?: ReqOrderByWithRelationInput | ReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reqs
    **/
    _count?: true | ReqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReqMaxAggregateInputType
  }

  export type GetReqAggregateType<T extends ReqAggregateArgs> = {
        [P in keyof T & keyof AggregateReq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReq[P]>
      : GetScalarType<T[P], AggregateReq[P]>
  }




  export type ReqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReqWhereInput
    orderBy?: ReqOrderByWithAggregationInput | ReqOrderByWithAggregationInput[]
    by: ReqScalarFieldEnum[] | ReqScalarFieldEnum
    having?: ReqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReqCountAggregateInputType | true
    _min?: ReqMinAggregateInputType
    _max?: ReqMaxAggregateInputType
  }

  export type ReqGroupByOutputType = {
    reqID: string
    creatorID: string
    projectType: $Enums.projType
    description: string
    size: $Enums.sizeType | null
    status: $Enums.projStatus
    customImage: string | null
    whenSubmitted: Date
    _count: ReqCountAggregateOutputType | null
    _min: ReqMinAggregateOutputType | null
    _max: ReqMaxAggregateOutputType | null
  }

  type GetReqGroupByPayload<T extends ReqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReqGroupByOutputType[P]>
            : GetScalarType<T[P], ReqGroupByOutputType[P]>
        }
      >
    >


  export type ReqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reqID?: boolean
    creatorID?: boolean
    projectType?: boolean
    description?: boolean
    size?: boolean
    status?: boolean
    customImage?: boolean
    whenSubmitted?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["req"]>

  export type ReqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reqID?: boolean
    creatorID?: boolean
    projectType?: boolean
    description?: boolean
    size?: boolean
    status?: boolean
    customImage?: boolean
    whenSubmitted?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["req"]>

  export type ReqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reqID?: boolean
    creatorID?: boolean
    projectType?: boolean
    description?: boolean
    size?: boolean
    status?: boolean
    customImage?: boolean
    whenSubmitted?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["req"]>

  export type ReqSelectScalar = {
    reqID?: boolean
    creatorID?: boolean
    projectType?: boolean
    description?: boolean
    size?: boolean
    status?: boolean
    customImage?: boolean
    whenSubmitted?: boolean
  }

  export type ReqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reqID" | "creatorID" | "projectType" | "description" | "size" | "status" | "customImage" | "whenSubmitted", ExtArgs["result"]["req"]>
  export type ReqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReqIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReqIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Req"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reqID: string
      creatorID: string
      projectType: $Enums.projType
      description: string
      size: $Enums.sizeType | null
      status: $Enums.projStatus
      customImage: string | null
      whenSubmitted: Date
    }, ExtArgs["result"]["req"]>
    composites: {}
  }

  type ReqGetPayload<S extends boolean | null | undefined | ReqDefaultArgs> = $Result.GetResult<Prisma.$ReqPayload, S>

  type ReqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReqCountAggregateInputType | true
    }

  export interface ReqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Req'], meta: { name: 'Req' } }
    /**
     * Find zero or one Req that matches the filter.
     * @param {ReqFindUniqueArgs} args - Arguments to find a Req
     * @example
     * // Get one Req
     * const req = await prisma.req.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReqFindUniqueArgs>(args: SelectSubset<T, ReqFindUniqueArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Req that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReqFindUniqueOrThrowArgs} args - Arguments to find a Req
     * @example
     * // Get one Req
     * const req = await prisma.req.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReqFindUniqueOrThrowArgs>(args: SelectSubset<T, ReqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Req that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReqFindFirstArgs} args - Arguments to find a Req
     * @example
     * // Get one Req
     * const req = await prisma.req.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReqFindFirstArgs>(args?: SelectSubset<T, ReqFindFirstArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Req that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReqFindFirstOrThrowArgs} args - Arguments to find a Req
     * @example
     * // Get one Req
     * const req = await prisma.req.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReqFindFirstOrThrowArgs>(args?: SelectSubset<T, ReqFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reqs
     * const reqs = await prisma.req.findMany()
     * 
     * // Get first 10 Reqs
     * const reqs = await prisma.req.findMany({ take: 10 })
     * 
     * // Only select the `reqID`
     * const reqWithReqIDOnly = await prisma.req.findMany({ select: { reqID: true } })
     * 
     */
    findMany<T extends ReqFindManyArgs>(args?: SelectSubset<T, ReqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Req.
     * @param {ReqCreateArgs} args - Arguments to create a Req.
     * @example
     * // Create one Req
     * const Req = await prisma.req.create({
     *   data: {
     *     // ... data to create a Req
     *   }
     * })
     * 
     */
    create<T extends ReqCreateArgs>(args: SelectSubset<T, ReqCreateArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reqs.
     * @param {ReqCreateManyArgs} args - Arguments to create many Reqs.
     * @example
     * // Create many Reqs
     * const req = await prisma.req.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReqCreateManyArgs>(args?: SelectSubset<T, ReqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reqs and returns the data saved in the database.
     * @param {ReqCreateManyAndReturnArgs} args - Arguments to create many Reqs.
     * @example
     * // Create many Reqs
     * const req = await prisma.req.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reqs and only return the `reqID`
     * const reqWithReqIDOnly = await prisma.req.createManyAndReturn({
     *   select: { reqID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReqCreateManyAndReturnArgs>(args?: SelectSubset<T, ReqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Req.
     * @param {ReqDeleteArgs} args - Arguments to delete one Req.
     * @example
     * // Delete one Req
     * const Req = await prisma.req.delete({
     *   where: {
     *     // ... filter to delete one Req
     *   }
     * })
     * 
     */
    delete<T extends ReqDeleteArgs>(args: SelectSubset<T, ReqDeleteArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Req.
     * @param {ReqUpdateArgs} args - Arguments to update one Req.
     * @example
     * // Update one Req
     * const req = await prisma.req.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReqUpdateArgs>(args: SelectSubset<T, ReqUpdateArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reqs.
     * @param {ReqDeleteManyArgs} args - Arguments to filter Reqs to delete.
     * @example
     * // Delete a few Reqs
     * const { count } = await prisma.req.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReqDeleteManyArgs>(args?: SelectSubset<T, ReqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reqs
     * const req = await prisma.req.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReqUpdateManyArgs>(args: SelectSubset<T, ReqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reqs and returns the data updated in the database.
     * @param {ReqUpdateManyAndReturnArgs} args - Arguments to update many Reqs.
     * @example
     * // Update many Reqs
     * const req = await prisma.req.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reqs and only return the `reqID`
     * const reqWithReqIDOnly = await prisma.req.updateManyAndReturn({
     *   select: { reqID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReqUpdateManyAndReturnArgs>(args: SelectSubset<T, ReqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Req.
     * @param {ReqUpsertArgs} args - Arguments to update or create a Req.
     * @example
     * // Update or create a Req
     * const req = await prisma.req.upsert({
     *   create: {
     *     // ... data to create a Req
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Req we want to update
     *   }
     * })
     */
    upsert<T extends ReqUpsertArgs>(args: SelectSubset<T, ReqUpsertArgs<ExtArgs>>): Prisma__ReqClient<$Result.GetResult<Prisma.$ReqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReqCountArgs} args - Arguments to filter Reqs to count.
     * @example
     * // Count the number of Reqs
     * const count = await prisma.req.count({
     *   where: {
     *     // ... the filter for the Reqs we want to count
     *   }
     * })
    **/
    count<T extends ReqCountArgs>(
      args?: Subset<T, ReqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Req.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReqAggregateArgs>(args: Subset<T, ReqAggregateArgs>): Prisma.PrismaPromise<GetReqAggregateType<T>>

    /**
     * Group by Req.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReqGroupByArgs['orderBy'] }
        : { orderBy?: ReqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Req model
   */
  readonly fields: ReqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Req.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Req model
   */
  interface ReqFieldRefs {
    readonly reqID: FieldRef<"Req", 'String'>
    readonly creatorID: FieldRef<"Req", 'String'>
    readonly projectType: FieldRef<"Req", 'projType'>
    readonly description: FieldRef<"Req", 'String'>
    readonly size: FieldRef<"Req", 'sizeType'>
    readonly status: FieldRef<"Req", 'projStatus'>
    readonly customImage: FieldRef<"Req", 'String'>
    readonly whenSubmitted: FieldRef<"Req", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Req findUnique
   */
  export type ReqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * Filter, which Req to fetch.
     */
    where: ReqWhereUniqueInput
  }

  /**
   * Req findUniqueOrThrow
   */
  export type ReqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * Filter, which Req to fetch.
     */
    where: ReqWhereUniqueInput
  }

  /**
   * Req findFirst
   */
  export type ReqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * Filter, which Req to fetch.
     */
    where?: ReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reqs to fetch.
     */
    orderBy?: ReqOrderByWithRelationInput | ReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reqs.
     */
    cursor?: ReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reqs.
     */
    distinct?: ReqScalarFieldEnum | ReqScalarFieldEnum[]
  }

  /**
   * Req findFirstOrThrow
   */
  export type ReqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * Filter, which Req to fetch.
     */
    where?: ReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reqs to fetch.
     */
    orderBy?: ReqOrderByWithRelationInput | ReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reqs.
     */
    cursor?: ReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reqs.
     */
    distinct?: ReqScalarFieldEnum | ReqScalarFieldEnum[]
  }

  /**
   * Req findMany
   */
  export type ReqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * Filter, which Reqs to fetch.
     */
    where?: ReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reqs to fetch.
     */
    orderBy?: ReqOrderByWithRelationInput | ReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reqs.
     */
    cursor?: ReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reqs.
     */
    skip?: number
    distinct?: ReqScalarFieldEnum | ReqScalarFieldEnum[]
  }

  /**
   * Req create
   */
  export type ReqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * The data needed to create a Req.
     */
    data: XOR<ReqCreateInput, ReqUncheckedCreateInput>
  }

  /**
   * Req createMany
   */
  export type ReqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reqs.
     */
    data: ReqCreateManyInput | ReqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Req createManyAndReturn
   */
  export type ReqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * The data used to create many Reqs.
     */
    data: ReqCreateManyInput | ReqCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Req update
   */
  export type ReqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * The data needed to update a Req.
     */
    data: XOR<ReqUpdateInput, ReqUncheckedUpdateInput>
    /**
     * Choose, which Req to update.
     */
    where: ReqWhereUniqueInput
  }

  /**
   * Req updateMany
   */
  export type ReqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reqs.
     */
    data: XOR<ReqUpdateManyMutationInput, ReqUncheckedUpdateManyInput>
    /**
     * Filter which Reqs to update
     */
    where?: ReqWhereInput
    /**
     * Limit how many Reqs to update.
     */
    limit?: number
  }

  /**
   * Req updateManyAndReturn
   */
  export type ReqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * The data used to update Reqs.
     */
    data: XOR<ReqUpdateManyMutationInput, ReqUncheckedUpdateManyInput>
    /**
     * Filter which Reqs to update
     */
    where?: ReqWhereInput
    /**
     * Limit how many Reqs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Req upsert
   */
  export type ReqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * The filter to search for the Req to update in case it exists.
     */
    where: ReqWhereUniqueInput
    /**
     * In case the Req found by the `where` argument doesn't exist, create a new Req with this data.
     */
    create: XOR<ReqCreateInput, ReqUncheckedCreateInput>
    /**
     * In case the Req was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReqUpdateInput, ReqUncheckedUpdateInput>
  }

  /**
   * Req delete
   */
  export type ReqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
    /**
     * Filter which Req to delete.
     */
    where: ReqWhereUniqueInput
  }

  /**
   * Req deleteMany
   */
  export type ReqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reqs to delete
     */
    where?: ReqWhereInput
    /**
     * Limit how many Reqs to delete.
     */
    limit?: number
  }

  /**
   * Req without action
   */
  export type ReqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Req
     */
    select?: ReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Req
     */
    omit?: ReqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReqInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userID: 'userID',
    fName: 'fName',
    lName: 'lName',
    email: 'email',
    pwHash: 'pwHash',
    phNumber: 'phNumber',
    accType: 'accType'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReqScalarFieldEnum: {
    reqID: 'reqID',
    creatorID: 'creatorID',
    projectType: 'projectType',
    description: 'description',
    size: 'size',
    status: 'status',
    customImage: 'customImage',
    whenSubmitted: 'whenSubmitted'
  };

  export type ReqScalarFieldEnum = (typeof ReqScalarFieldEnum)[keyof typeof ReqScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'accType'
   */
  export type EnumaccTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'accType'>
    


  /**
   * Reference to a field of type 'accType[]'
   */
  export type ListEnumaccTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'accType[]'>
    


  /**
   * Reference to a field of type 'projType'
   */
  export type EnumprojTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'projType'>
    


  /**
   * Reference to a field of type 'projType[]'
   */
  export type ListEnumprojTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'projType[]'>
    


  /**
   * Reference to a field of type 'sizeType'
   */
  export type EnumsizeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sizeType'>
    


  /**
   * Reference to a field of type 'sizeType[]'
   */
  export type ListEnumsizeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sizeType[]'>
    


  /**
   * Reference to a field of type 'projStatus'
   */
  export type EnumprojStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'projStatus'>
    


  /**
   * Reference to a field of type 'projStatus[]'
   */
  export type ListEnumprojStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'projStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userID?: StringFilter<"User"> | string
    fName?: StringFilter<"User"> | string
    lName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    pwHash?: StringFilter<"User"> | string
    phNumber?: StringNullableFilter<"User"> | string | null
    accType?: EnumaccTypeFilter<"User"> | $Enums.accType
    orderHistory?: ReqListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userID?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    email?: SortOrder
    pwHash?: SortOrder
    phNumber?: SortOrderInput | SortOrder
    accType?: SortOrder
    orderHistory?: ReqOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userID?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fName?: StringFilter<"User"> | string
    lName?: StringFilter<"User"> | string
    pwHash?: StringFilter<"User"> | string
    phNumber?: StringNullableFilter<"User"> | string | null
    accType?: EnumaccTypeFilter<"User"> | $Enums.accType
    orderHistory?: ReqListRelationFilter
  }, "userID" | "email">

  export type UserOrderByWithAggregationInput = {
    userID?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    email?: SortOrder
    pwHash?: SortOrder
    phNumber?: SortOrderInput | SortOrder
    accType?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userID?: StringWithAggregatesFilter<"User"> | string
    fName?: StringWithAggregatesFilter<"User"> | string
    lName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    pwHash?: StringWithAggregatesFilter<"User"> | string
    phNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    accType?: EnumaccTypeWithAggregatesFilter<"User"> | $Enums.accType
  }

  export type ReqWhereInput = {
    AND?: ReqWhereInput | ReqWhereInput[]
    OR?: ReqWhereInput[]
    NOT?: ReqWhereInput | ReqWhereInput[]
    reqID?: StringFilter<"Req"> | string
    creatorID?: StringFilter<"Req"> | string
    projectType?: EnumprojTypeFilter<"Req"> | $Enums.projType
    description?: StringFilter<"Req"> | string
    size?: EnumsizeTypeNullableFilter<"Req"> | $Enums.sizeType | null
    status?: EnumprojStatusFilter<"Req"> | $Enums.projStatus
    customImage?: StringNullableFilter<"Req"> | string | null
    whenSubmitted?: DateTimeFilter<"Req"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReqOrderByWithRelationInput = {
    reqID?: SortOrder
    creatorID?: SortOrder
    projectType?: SortOrder
    description?: SortOrder
    size?: SortOrderInput | SortOrder
    status?: SortOrder
    customImage?: SortOrderInput | SortOrder
    whenSubmitted?: SortOrder
    creator?: UserOrderByWithRelationInput
  }

  export type ReqWhereUniqueInput = Prisma.AtLeast<{
    reqID?: string
    AND?: ReqWhereInput | ReqWhereInput[]
    OR?: ReqWhereInput[]
    NOT?: ReqWhereInput | ReqWhereInput[]
    creatorID?: StringFilter<"Req"> | string
    projectType?: EnumprojTypeFilter<"Req"> | $Enums.projType
    description?: StringFilter<"Req"> | string
    size?: EnumsizeTypeNullableFilter<"Req"> | $Enums.sizeType | null
    status?: EnumprojStatusFilter<"Req"> | $Enums.projStatus
    customImage?: StringNullableFilter<"Req"> | string | null
    whenSubmitted?: DateTimeFilter<"Req"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "reqID">

  export type ReqOrderByWithAggregationInput = {
    reqID?: SortOrder
    creatorID?: SortOrder
    projectType?: SortOrder
    description?: SortOrder
    size?: SortOrderInput | SortOrder
    status?: SortOrder
    customImage?: SortOrderInput | SortOrder
    whenSubmitted?: SortOrder
    _count?: ReqCountOrderByAggregateInput
    _max?: ReqMaxOrderByAggregateInput
    _min?: ReqMinOrderByAggregateInput
  }

  export type ReqScalarWhereWithAggregatesInput = {
    AND?: ReqScalarWhereWithAggregatesInput | ReqScalarWhereWithAggregatesInput[]
    OR?: ReqScalarWhereWithAggregatesInput[]
    NOT?: ReqScalarWhereWithAggregatesInput | ReqScalarWhereWithAggregatesInput[]
    reqID?: StringWithAggregatesFilter<"Req"> | string
    creatorID?: StringWithAggregatesFilter<"Req"> | string
    projectType?: EnumprojTypeWithAggregatesFilter<"Req"> | $Enums.projType
    description?: StringWithAggregatesFilter<"Req"> | string
    size?: EnumsizeTypeNullableWithAggregatesFilter<"Req"> | $Enums.sizeType | null
    status?: EnumprojStatusWithAggregatesFilter<"Req"> | $Enums.projStatus
    customImage?: StringNullableWithAggregatesFilter<"Req"> | string | null
    whenSubmitted?: DateTimeWithAggregatesFilter<"Req"> | Date | string
  }

  export type UserCreateInput = {
    userID?: string
    fName: string
    lName: string
    email: string
    pwHash: string
    phNumber?: string | null
    accType: $Enums.accType
    orderHistory?: ReqCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    userID?: string
    fName: string
    lName: string
    email: string
    pwHash: string
    phNumber?: string | null
    accType: $Enums.accType
    orderHistory?: ReqUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    userID?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pwHash?: StringFieldUpdateOperationsInput | string
    phNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    orderHistory?: ReqUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userID?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pwHash?: StringFieldUpdateOperationsInput | string
    phNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    orderHistory?: ReqUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    userID?: string
    fName: string
    lName: string
    email: string
    pwHash: string
    phNumber?: string | null
    accType: $Enums.accType
  }

  export type UserUpdateManyMutationInput = {
    userID?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pwHash?: StringFieldUpdateOperationsInput | string
    phNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
  }

  export type UserUncheckedUpdateManyInput = {
    userID?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pwHash?: StringFieldUpdateOperationsInput | string
    phNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
  }

  export type ReqCreateInput = {
    reqID?: string
    projectType: $Enums.projType
    description: string
    size?: $Enums.sizeType | null
    status?: $Enums.projStatus
    customImage?: string | null
    whenSubmitted?: Date | string
    creator: UserCreateNestedOneWithoutOrderHistoryInput
  }

  export type ReqUncheckedCreateInput = {
    reqID?: string
    creatorID: string
    projectType: $Enums.projType
    description: string
    size?: $Enums.sizeType | null
    status?: $Enums.projStatus
    customImage?: string | null
    whenSubmitted?: Date | string
  }

  export type ReqUpdateInput = {
    reqID?: StringFieldUpdateOperationsInput | string
    projectType?: EnumprojTypeFieldUpdateOperationsInput | $Enums.projType
    description?: StringFieldUpdateOperationsInput | string
    size?: NullableEnumsizeTypeFieldUpdateOperationsInput | $Enums.sizeType | null
    status?: EnumprojStatusFieldUpdateOperationsInput | $Enums.projStatus
    customImage?: NullableStringFieldUpdateOperationsInput | string | null
    whenSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutOrderHistoryNestedInput
  }

  export type ReqUncheckedUpdateInput = {
    reqID?: StringFieldUpdateOperationsInput | string
    creatorID?: StringFieldUpdateOperationsInput | string
    projectType?: EnumprojTypeFieldUpdateOperationsInput | $Enums.projType
    description?: StringFieldUpdateOperationsInput | string
    size?: NullableEnumsizeTypeFieldUpdateOperationsInput | $Enums.sizeType | null
    status?: EnumprojStatusFieldUpdateOperationsInput | $Enums.projStatus
    customImage?: NullableStringFieldUpdateOperationsInput | string | null
    whenSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReqCreateManyInput = {
    reqID?: string
    creatorID: string
    projectType: $Enums.projType
    description: string
    size?: $Enums.sizeType | null
    status?: $Enums.projStatus
    customImage?: string | null
    whenSubmitted?: Date | string
  }

  export type ReqUpdateManyMutationInput = {
    reqID?: StringFieldUpdateOperationsInput | string
    projectType?: EnumprojTypeFieldUpdateOperationsInput | $Enums.projType
    description?: StringFieldUpdateOperationsInput | string
    size?: NullableEnumsizeTypeFieldUpdateOperationsInput | $Enums.sizeType | null
    status?: EnumprojStatusFieldUpdateOperationsInput | $Enums.projStatus
    customImage?: NullableStringFieldUpdateOperationsInput | string | null
    whenSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReqUncheckedUpdateManyInput = {
    reqID?: StringFieldUpdateOperationsInput | string
    creatorID?: StringFieldUpdateOperationsInput | string
    projectType?: EnumprojTypeFieldUpdateOperationsInput | $Enums.projType
    description?: StringFieldUpdateOperationsInput | string
    size?: NullableEnumsizeTypeFieldUpdateOperationsInput | $Enums.sizeType | null
    status?: EnumprojStatusFieldUpdateOperationsInput | $Enums.projStatus
    customImage?: NullableStringFieldUpdateOperationsInput | string | null
    whenSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumaccTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeFilter<$PrismaModel> | $Enums.accType
  }

  export type ReqListRelationFilter = {
    every?: ReqWhereInput
    some?: ReqWhereInput
    none?: ReqWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReqOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userID?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    email?: SortOrder
    pwHash?: SortOrder
    phNumber?: SortOrder
    accType?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userID?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    email?: SortOrder
    pwHash?: SortOrder
    phNumber?: SortOrder
    accType?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userID?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    email?: SortOrder
    pwHash?: SortOrder
    phNumber?: SortOrder
    accType?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumaccTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeWithAggregatesFilter<$PrismaModel> | $Enums.accType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccTypeFilter<$PrismaModel>
    _max?: NestedEnumaccTypeFilter<$PrismaModel>
  }

  export type EnumprojTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.projType | EnumprojTypeFieldRefInput<$PrismaModel>
    in?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumprojTypeFilter<$PrismaModel> | $Enums.projType
  }

  export type EnumsizeTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.sizeType | EnumsizeTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsizeTypeNullableFilter<$PrismaModel> | $Enums.sizeType | null
  }

  export type EnumprojStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.projStatus | EnumprojStatusFieldRefInput<$PrismaModel>
    in?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumprojStatusFilter<$PrismaModel> | $Enums.projStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReqCountOrderByAggregateInput = {
    reqID?: SortOrder
    creatorID?: SortOrder
    projectType?: SortOrder
    description?: SortOrder
    size?: SortOrder
    status?: SortOrder
    customImage?: SortOrder
    whenSubmitted?: SortOrder
  }

  export type ReqMaxOrderByAggregateInput = {
    reqID?: SortOrder
    creatorID?: SortOrder
    projectType?: SortOrder
    description?: SortOrder
    size?: SortOrder
    status?: SortOrder
    customImage?: SortOrder
    whenSubmitted?: SortOrder
  }

  export type ReqMinOrderByAggregateInput = {
    reqID?: SortOrder
    creatorID?: SortOrder
    projectType?: SortOrder
    description?: SortOrder
    size?: SortOrder
    status?: SortOrder
    customImage?: SortOrder
    whenSubmitted?: SortOrder
  }

  export type EnumprojTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projType | EnumprojTypeFieldRefInput<$PrismaModel>
    in?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumprojTypeWithAggregatesFilter<$PrismaModel> | $Enums.projType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojTypeFilter<$PrismaModel>
    _max?: NestedEnumprojTypeFilter<$PrismaModel>
  }

  export type EnumsizeTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sizeType | EnumsizeTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsizeTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.sizeType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsizeTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumsizeTypeNullableFilter<$PrismaModel>
  }

  export type EnumprojStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projStatus | EnumprojStatusFieldRefInput<$PrismaModel>
    in?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumprojStatusWithAggregatesFilter<$PrismaModel> | $Enums.projStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojStatusFilter<$PrismaModel>
    _max?: NestedEnumprojStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReqCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ReqCreateWithoutCreatorInput, ReqUncheckedCreateWithoutCreatorInput> | ReqCreateWithoutCreatorInput[] | ReqUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReqCreateOrConnectWithoutCreatorInput | ReqCreateOrConnectWithoutCreatorInput[]
    createMany?: ReqCreateManyCreatorInputEnvelope
    connect?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
  }

  export type ReqUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ReqCreateWithoutCreatorInput, ReqUncheckedCreateWithoutCreatorInput> | ReqCreateWithoutCreatorInput[] | ReqUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReqCreateOrConnectWithoutCreatorInput | ReqCreateOrConnectWithoutCreatorInput[]
    createMany?: ReqCreateManyCreatorInputEnvelope
    connect?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumaccTypeFieldUpdateOperationsInput = {
    set?: $Enums.accType
  }

  export type ReqUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ReqCreateWithoutCreatorInput, ReqUncheckedCreateWithoutCreatorInput> | ReqCreateWithoutCreatorInput[] | ReqUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReqCreateOrConnectWithoutCreatorInput | ReqCreateOrConnectWithoutCreatorInput[]
    upsert?: ReqUpsertWithWhereUniqueWithoutCreatorInput | ReqUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ReqCreateManyCreatorInputEnvelope
    set?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    disconnect?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    delete?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    connect?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    update?: ReqUpdateWithWhereUniqueWithoutCreatorInput | ReqUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ReqUpdateManyWithWhereWithoutCreatorInput | ReqUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ReqScalarWhereInput | ReqScalarWhereInput[]
  }

  export type ReqUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ReqCreateWithoutCreatorInput, ReqUncheckedCreateWithoutCreatorInput> | ReqCreateWithoutCreatorInput[] | ReqUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReqCreateOrConnectWithoutCreatorInput | ReqCreateOrConnectWithoutCreatorInput[]
    upsert?: ReqUpsertWithWhereUniqueWithoutCreatorInput | ReqUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ReqCreateManyCreatorInputEnvelope
    set?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    disconnect?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    delete?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    connect?: ReqWhereUniqueInput | ReqWhereUniqueInput[]
    update?: ReqUpdateWithWhereUniqueWithoutCreatorInput | ReqUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ReqUpdateManyWithWhereWithoutCreatorInput | ReqUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ReqScalarWhereInput | ReqScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrderHistoryInput = {
    create?: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumprojTypeFieldUpdateOperationsInput = {
    set?: $Enums.projType
  }

  export type NullableEnumsizeTypeFieldUpdateOperationsInput = {
    set?: $Enums.sizeType | null
  }

  export type EnumprojStatusFieldUpdateOperationsInput = {
    set?: $Enums.projStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOrderHistoryNestedInput = {
    create?: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderHistoryInput
    upsert?: UserUpsertWithoutOrderHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderHistoryInput, UserUpdateWithoutOrderHistoryInput>, UserUncheckedUpdateWithoutOrderHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumaccTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeFilter<$PrismaModel> | $Enums.accType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumaccTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeWithAggregatesFilter<$PrismaModel> | $Enums.accType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccTypeFilter<$PrismaModel>
    _max?: NestedEnumaccTypeFilter<$PrismaModel>
  }

  export type NestedEnumprojTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.projType | EnumprojTypeFieldRefInput<$PrismaModel>
    in?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumprojTypeFilter<$PrismaModel> | $Enums.projType
  }

  export type NestedEnumsizeTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.sizeType | EnumsizeTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsizeTypeNullableFilter<$PrismaModel> | $Enums.sizeType | null
  }

  export type NestedEnumprojStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.projStatus | EnumprojStatusFieldRefInput<$PrismaModel>
    in?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumprojStatusFilter<$PrismaModel> | $Enums.projStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumprojTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projType | EnumprojTypeFieldRefInput<$PrismaModel>
    in?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.projType[] | ListEnumprojTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumprojTypeWithAggregatesFilter<$PrismaModel> | $Enums.projType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojTypeFilter<$PrismaModel>
    _max?: NestedEnumprojTypeFilter<$PrismaModel>
  }

  export type NestedEnumsizeTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sizeType | EnumsizeTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.sizeType[] | ListEnumsizeTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumsizeTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.sizeType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsizeTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumsizeTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumprojStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.projStatus | EnumprojStatusFieldRefInput<$PrismaModel>
    in?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.projStatus[] | ListEnumprojStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumprojStatusWithAggregatesFilter<$PrismaModel> | $Enums.projStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprojStatusFilter<$PrismaModel>
    _max?: NestedEnumprojStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReqCreateWithoutCreatorInput = {
    reqID?: string
    projectType: $Enums.projType
    description: string
    size?: $Enums.sizeType | null
    status?: $Enums.projStatus
    customImage?: string | null
    whenSubmitted?: Date | string
  }

  export type ReqUncheckedCreateWithoutCreatorInput = {
    reqID?: string
    projectType: $Enums.projType
    description: string
    size?: $Enums.sizeType | null
    status?: $Enums.projStatus
    customImage?: string | null
    whenSubmitted?: Date | string
  }

  export type ReqCreateOrConnectWithoutCreatorInput = {
    where: ReqWhereUniqueInput
    create: XOR<ReqCreateWithoutCreatorInput, ReqUncheckedCreateWithoutCreatorInput>
  }

  export type ReqCreateManyCreatorInputEnvelope = {
    data: ReqCreateManyCreatorInput | ReqCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ReqUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ReqWhereUniqueInput
    update: XOR<ReqUpdateWithoutCreatorInput, ReqUncheckedUpdateWithoutCreatorInput>
    create: XOR<ReqCreateWithoutCreatorInput, ReqUncheckedCreateWithoutCreatorInput>
  }

  export type ReqUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ReqWhereUniqueInput
    data: XOR<ReqUpdateWithoutCreatorInput, ReqUncheckedUpdateWithoutCreatorInput>
  }

  export type ReqUpdateManyWithWhereWithoutCreatorInput = {
    where: ReqScalarWhereInput
    data: XOR<ReqUpdateManyMutationInput, ReqUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ReqScalarWhereInput = {
    AND?: ReqScalarWhereInput | ReqScalarWhereInput[]
    OR?: ReqScalarWhereInput[]
    NOT?: ReqScalarWhereInput | ReqScalarWhereInput[]
    reqID?: StringFilter<"Req"> | string
    creatorID?: StringFilter<"Req"> | string
    projectType?: EnumprojTypeFilter<"Req"> | $Enums.projType
    description?: StringFilter<"Req"> | string
    size?: EnumsizeTypeNullableFilter<"Req"> | $Enums.sizeType | null
    status?: EnumprojStatusFilter<"Req"> | $Enums.projStatus
    customImage?: StringNullableFilter<"Req"> | string | null
    whenSubmitted?: DateTimeFilter<"Req"> | Date | string
  }

  export type UserCreateWithoutOrderHistoryInput = {
    userID?: string
    fName: string
    lName: string
    email: string
    pwHash: string
    phNumber?: string | null
    accType: $Enums.accType
  }

  export type UserUncheckedCreateWithoutOrderHistoryInput = {
    userID?: string
    fName: string
    lName: string
    email: string
    pwHash: string
    phNumber?: string | null
    accType: $Enums.accType
  }

  export type UserCreateOrConnectWithoutOrderHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
  }

  export type UserUpsertWithoutOrderHistoryInput = {
    update: XOR<UserUpdateWithoutOrderHistoryInput, UserUncheckedUpdateWithoutOrderHistoryInput>
    create: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderHistoryInput, UserUncheckedUpdateWithoutOrderHistoryInput>
  }

  export type UserUpdateWithoutOrderHistoryInput = {
    userID?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pwHash?: StringFieldUpdateOperationsInput | string
    phNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
  }

  export type UserUncheckedUpdateWithoutOrderHistoryInput = {
    userID?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    pwHash?: StringFieldUpdateOperationsInput | string
    phNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
  }

  export type ReqCreateManyCreatorInput = {
    reqID?: string
    projectType: $Enums.projType
    description: string
    size?: $Enums.sizeType | null
    status?: $Enums.projStatus
    customImage?: string | null
    whenSubmitted?: Date | string
  }

  export type ReqUpdateWithoutCreatorInput = {
    reqID?: StringFieldUpdateOperationsInput | string
    projectType?: EnumprojTypeFieldUpdateOperationsInput | $Enums.projType
    description?: StringFieldUpdateOperationsInput | string
    size?: NullableEnumsizeTypeFieldUpdateOperationsInput | $Enums.sizeType | null
    status?: EnumprojStatusFieldUpdateOperationsInput | $Enums.projStatus
    customImage?: NullableStringFieldUpdateOperationsInput | string | null
    whenSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReqUncheckedUpdateWithoutCreatorInput = {
    reqID?: StringFieldUpdateOperationsInput | string
    projectType?: EnumprojTypeFieldUpdateOperationsInput | $Enums.projType
    description?: StringFieldUpdateOperationsInput | string
    size?: NullableEnumsizeTypeFieldUpdateOperationsInput | $Enums.sizeType | null
    status?: EnumprojStatusFieldUpdateOperationsInput | $Enums.projStatus
    customImage?: NullableStringFieldUpdateOperationsInput | string | null
    whenSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReqUncheckedUpdateManyWithoutCreatorInput = {
    reqID?: StringFieldUpdateOperationsInput | string
    projectType?: EnumprojTypeFieldUpdateOperationsInput | $Enums.projType
    description?: StringFieldUpdateOperationsInput | string
    size?: NullableEnumsizeTypeFieldUpdateOperationsInput | $Enums.sizeType | null
    status?: EnumprojStatusFieldUpdateOperationsInput | $Enums.projStatus
    customImage?: NullableStringFieldUpdateOperationsInput | string | null
    whenSubmitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}