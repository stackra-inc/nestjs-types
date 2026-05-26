import { Observable } from 'rxjs';

interface Abstract<T> extends Function {
    prototype: T;
}

interface ControllerMetadata {
    path?: string;
}

type Controller = object;

type ContextType = 'http' | 'ws' | 'rpc';
/**
 * Methods to obtain request and response objects.
 *
 * @publicApi
 */
interface HttpArgumentsHost {
    /**
     * Returns the in-flight `request` object.
     */
    getRequest<T = any>(): T;
    /**
     * Returns the in-flight `response` object.
     */
    getResponse<T = any>(): T;
    getNext<T = any>(): T;
}
/**
 * Methods to obtain WebSocket data and client objects.
 *
 * @publicApi
 */
interface WsArgumentsHost {
    /**
     * Returns the data object.
     */
    getData<T = any>(): T;
    /**
     * Returns the client object.
     */
    getClient<T = any>(): T;
    /**
     * Returns the pattern for the event
     */
    getPattern(): string;
}
/**
 * Methods to obtain RPC data object.
 *
 * @publicApi
 */
interface RpcArgumentsHost {
    /**
     * Returns the data object.
     */
    getData<T = any>(): T;
    /**
     * Returns the context object.
     */
    getContext<T = any>(): T;
}
/**
 * Provides methods for retrieving the arguments being passed to a handler.
 * Allows choosing the appropriate execution context (e.g., Http, RPC, or
 * WebSockets) to retrieve the arguments from.
 *
 * @publicApi
 */
interface ArgumentsHost {
    /**
     * Returns the array of arguments being passed to the handler.
     */
    getArgs<T extends Array<any> = any[]>(): T;
    /**
     * Returns a particular argument by index.
     * @param index index of argument to retrieve
     */
    getArgByIndex<T = any>(index: number): T;
    /**
     * Switch context to RPC.
     * @returns interface with methods to retrieve RPC arguments
     */
    switchToRpc(): RpcArgumentsHost;
    /**
     * Switch context to HTTP.
     * @returns interface with methods to retrieve HTTP arguments
     */
    switchToHttp(): HttpArgumentsHost;
    /**
     * Switch context to WebSockets.
     * @returns interface with methods to retrieve WebSockets arguments
     */
    switchToWs(): WsArgumentsHost;
    /**
     * Returns the current execution context type (string)
     */
    getType<TContext extends string = ContextType>(): TContext;
}

/**
 * Interface describing implementation of an exception filter.
 *
 * @see [Exception Filters](https://docs.nestjs.com/exception-filters)
 *
 * @publicApi
 */
interface ExceptionFilter<T = any> {
    /**
     * Method to implement a custom exception filter.
     *
     * @param exception the class of the exception being handled
     * @param host used to access an array of arguments for
     * the in-flight request
     */
    catch(exception: T, host: ArgumentsHost): any;
}

interface Type<T = any> extends Function {
    new (...args: any[]): T;
}

interface ExceptionFilterMetadata {
    func: ExceptionFilter['catch'];
    exceptionMetatypes: Type<any>[];
}

/**
 * Interface describing implementation of an RPC exception filter.
 *
 * @see [Exception Filters](https://docs.nestjs.com/microservices/exception-filters)
 *
 * @publicApi
 */
interface RpcExceptionFilter<T = any, R = any> {
    /**
     * Method to implement a custom (microservice) exception filter.
     *
     * @param exception the type (class) of the exception being handled
     * @param host used to access an array of arguments for
     * the in-flight message
     */
    catch(exception: T, host: ArgumentsHost): Observable<R>;
}

interface RpcExceptionFilterMetadata {
    func: RpcExceptionFilter['catch'];
    exceptionMetatypes: Type<any>[];
}

/**
 * Interface describing implementation of a Web Sockets exception filter.
 *
 * @see [Exception Filters](https://docs.nestjs.com/websockets/exception-filters)
 *
 * @publicApi
 */
interface WsExceptionFilter<T = any> {
    /**
     * Method to implement a custom (web sockets) exception filter.
     *
     * @param exception the type (class) of the exception being handled
     * @param host used to access an array of arguments for
     * the in-flight message  catch(exception: T, host: ArgumentsHost): any;
     */
    catch(exception: T, host: ArgumentsHost): any;
}

/**
 * Validation error description.
 * @see https://github.com/typestack/class-validator
 *
 * class-validator@0.13.0
 *
 * @publicApi
 */
interface ValidationError {
    /**
     * Object that was validated.
     *
     * OPTIONAL - configurable via the ValidatorOptions.validationError.target option
     */
    target?: Record<string, any>;
    /**
     * Object's property that hasn't passed validation.
     */
    property: string;
    /**
     * Value that haven't pass a validation.
     *
     * OPTIONAL - configurable via the ValidatorOptions.validationError.value option
     */
    value?: any;
    /**
     * Constraints that failed validation with error messages.
     */
    constraints?: {
        [type: string]: string;
    };
    /**
     * Contains all nested validation errors of the property.
     */
    children?: ValidationError[];
    /**
     * A transient set of data passed through to the validation result for response mapping
     */
    contexts?: {
        [type: string]: any;
    };
}

/**
 * Interface describing details about the current request pipeline.
 *
 * @see [Execution Context](https://docs.nestjs.com/guards#execution-context)
 *
 * @publicApi
 */
interface ExecutionContext extends ArgumentsHost {
    /**
     * Returns the *type* of the controller class which the current handler belongs to.
     */
    getClass<T = any>(): Type<T>;
    /**
     * Returns a reference to the handler (method) that will be invoked next in the
     * request pipeline.
     */
    getHandler(): Function;
}

/**
 * Interface defining the `canActivate()` function that must be implemented
 * by a guard.  Return value indicates whether or not the current request is
 * allowed to proceed.  Return can be either synchronous (`boolean`)
 * or asynchronous (`Promise` or `Observable`).
 *
 * @see [Guards](https://docs.nestjs.com/guards)
 *
 * @publicApi
 */
interface CanActivate {
    /**
     * @param context Current execution context. Provides access to details about
     * the current request pipeline.
     *
     * @returns Value indicating whether or not the current request is allowed to
     * proceed.
     */
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}

/**
 * @publicApi
 */
type CustomParamFactory<TData = any, TOutput = any> = (data: TData, context: ExecutionContext) => TOutput;

/**
 * Interface providing access to the response stream.
 *
 * @see [Interceptors](https://docs.nestjs.com/interceptors)
 *
 * @publicApi
 */
interface CallHandler<T = any> {
    /**
     * Returns an `Observable` representing the response stream from the route
     * handler.
     */
    handle(): Observable<T>;
}
/**
 * Interface describing implementation of an interceptor.
 *
 * @see [Interceptors](https://docs.nestjs.com/interceptors)
 *
 * @publicApi
 */
interface NestInterceptor<T = any, R = any> {
    /**
     * Method to implement a custom interceptor.
     *
     * @param context an `ExecutionContext` object providing methods to access the
     * route handler and class about to be invoked.
     * @param next a reference to the `CallHandler`, which provides access to an
     * `Observable` representing the response stream from the route handler.
     */
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<R> | Promise<Observable<R>>;
}

/**
 * @publicApi
 */
type Paramtype = 'body' | 'query' | 'param' | 'custom';

type Transform<T = any> = (value: T, metadata: ArgumentMetadata) => any;
/**
 * Interface describing a pipe implementation's `transform()` method metadata argument.
 *
 * @see [Pipes](https://docs.nestjs.com/pipes)
 *
 * @publicApi
 */
interface ArgumentMetadata {
    /**
     * Indicates whether argument is a body, query, param, or custom parameter
     */
    readonly type: Paramtype;
    /**
     * Underlying base type (e.g., `String`) of the parameter, based on the type
     * definition in the route handler.
     */
    readonly metatype?: Type<any> | undefined;
    /**
     * String passed as an argument to the decorator.
     * Example: `@Body('userId')` would yield `userId`
     */
    readonly data?: string | undefined;
}
/**
 * Interface describing implementation of a pipe.
 *
 * @see [Pipes](https://docs.nestjs.com/pipes)
 *
 * @publicApi
 */
interface PipeTransform<T = any, R = any> {
    /**
     * Method to implement a custom pipe.  Called with two parameters
     *
     * @param value argument before it is received by route handler method
     * @param metadata contains metadata about the value
     */
    transform(value: T, metadata: ArgumentMetadata): R;
}

declare enum RequestMethod {
    GET = 0,
    POST = 1,
    PUT = 2,
    DELETE = 3,
    PATCH = 4,
    ALL = 5,
    OPTIONS = 6,
    HEAD = 7,
    SEARCH = 8,
    PROPFIND = 9,
    PROPPATCH = 10,
    MKCOL = 11,
    COPY = 12,
    MOVE = 13,
    LOCK = 14,
    UNLOCK = 15
}

/**
 * @publicApi
 */
declare enum HttpStatus {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLYHINTS = 103,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    ALREADY_REPORTED = 208,
    CONTENT_DIFFERENT = 210,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    MISDIRECTED = 421,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    UNRECOVERABLE_ERROR = 456,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    INSUFFICIENT_STORAGE = 507,
    LOOP_DETECTED = 508
}

declare enum RouteParamtypes {
    REQUEST = 0,
    RESPONSE = 1,
    NEXT = 2,
    BODY = 3,
    QUERY = 4,
    PARAM = 5,
    HEADERS = 6,
    SESSION = 7,
    FILE = 8,
    FILES = 9,
    HOST = 10,
    IP = 11,
    RAW_BODY = 12,
    ACK = 13
}

/**
 * System signals which shut down a process
 */
declare enum ShutdownSignal {
    SIGHUP = "SIGHUP",
    SIGINT = "SIGINT",
    SIGQUIT = "SIGQUIT",
    SIGILL = "SIGILL",
    SIGTRAP = "SIGTRAP",
    SIGABRT = "SIGABRT",
    SIGBUS = "SIGBUS",
    SIGFPE = "SIGFPE",
    SIGSEGV = "SIGSEGV",
    SIGUSR2 = "SIGUSR2",
    SIGTERM = "SIGTERM"
}

/**
 * @publicApi
 */
declare enum VersioningType {
    URI = 0,
    HEADER = 1,
    MEDIA_TYPE = 2,
    CUSTOM = 3
}

declare enum Transport {
    TCP = 0,
    REDIS = 1,
    NATS = 2,
    MQTT = 3,
    GRPC = 4,
    RMQ = 5,
    KAFKA = 6
}

/**
 * @see https://docs.spring.io/spring-kafka/api/org/springframework/kafka/support/KafkaHeaders.html
 *
 * @publicApi
 */
declare enum KafkaHeaders {
    ACKNOWLEDGMENT = "kafka_acknowledgment",
    BATCH_CONVERTED_HEADERS = "kafka_batchConvertedHeaders",
    CONSUMER = "kafka_consumer",
    CORRELATION_ID = "kafka_correlationId",
    DELIVERY_ATTEMPT = "kafka_deliveryAttempt",
    DLT_EXCEPTION_FQCN = "kafka_dlt-exception-fqcn",
    DLT_EXCEPTION_MESSAGE = "kafka_dlt-exception-message",
    DLT_EXCEPTION_STACKTRACE = "kafka_dlt-exception-stacktrace",
    DLT_ORIGINAL_OFFSET = "kafka_dlt-original-offset",
    DLT_ORIGINAL_PARTITION = "kafka_dlt-original-partition",
    DLT_ORIGINAL_TIMESTAMP = "kafka_dlt-original-timestamp",
    DLT_ORIGINAL_TIMESTAMP_TYPE = "kafka_dlt-original-timestamp-type",
    DLT_ORIGINAL_TOPIC = "kafka_dlt-original-topic",
    GROUP_ID = "kafka_groupId",
    MESSAGE_KEY = "kafka_messageKey",
    NATIVE_HEADERS = "kafka_nativeHeaders",
    OFFSET = "kafka_offset",
    PARTITION_ID = "kafka_partitionId",
    PREFIX = "kafka_",
    RAW_DATA = "kafka_data",
    RECEIVED = "kafka_received",
    RECEIVED_MESSAGE_KEY = "kafka_receivedMessageKey",
    RECEIVED_PARTITION_ID = "kafka_receivedPartitionId",
    RECEIVED_TIMESTAMP = "kafka_receivedTimestamp",
    RECEIVED_TOPIC = "kafka_receivedTopic",
    RECORD_METADATA = "kafka_recordMetadata",
    REPLY_PARTITION = "kafka_replyPartition",
    REPLY_TOPIC = "kafka_replyTopic",
    TIMESTAMP = "kafka_timestamp",
    TIMESTAMP_TYPE = "kafka_timestampType",
    TOPIC = "kafka_topic",
    NEST_ERR = "kafka_nest-err",
    NEST_IS_DISPOSED = "kafka_nest-is-disposed"
}

/**
 * Indicates that this will work for any version passed in the request, or no version.
 *
 * @publicApi
 */
declare const VERSION_NEUTRAL: unique symbol;
/**
 * @publicApi
 */
type VersionValue = string | typeof VERSION_NEUTRAL | Array<string | typeof VERSION_NEUTRAL>;
/**
 * @publicApi
 */
interface VersionOptions {
    /**
     * Specifies an optional API Version. When configured, methods
     * within the controller will only be routed if the request version
     * matches the specified value.
     *
     * Supported only by HTTP-based applications (does not apply to non-HTTP microservices).
     *
     * @see [Versioning](https://docs.nestjs.com/techniques/versioning)
     */
    version?: VersionValue;
}
/**
 * @publicApi
 */
interface HeaderVersioningOptions {
    type: VersioningType.HEADER;
    /**
     * The name of the Request Header that contains the version.
     */
    header: string;
}
/**
 * @publicApi
 */
interface UriVersioningOptions {
    type: VersioningType.URI;
    /**
     * Optional prefix that will prepend the version within the URI.
     *
     * Defaults to `v`.
     *
     * Ex. Assuming a version of `1`, for `/api/v1/route`, `v` is the prefix.
     */
    prefix?: string | false;
}
/**
 * @publicApi
 */
interface MediaTypeVersioningOptions {
    type: VersioningType.MEDIA_TYPE;
    /**
     * The key within the Media Type Header to determine the version from.
     *
     * Ex. For `application/json;v=1`, the key is `v=`.
     */
    key: string;
}
/**
 * @publicApi
 */
interface CustomVersioningOptions {
    type: VersioningType.CUSTOM;
    /**
     * A function that accepts a request object (specific to the underlying platform, ie Express or Fastify)
     * and returns a single version value or an ordered array of versions, in order from HIGHEST to LOWEST.
     *
     * Ex. Returned version array = ['3.1', '3.0', '2.5', '2', '1.9']
     *
     * Use type assertion or narrowing to identify the specific request type.
     */
    extractor: (request: unknown) => string | string[];
}
/**
 * @publicApi
 */
interface VersioningCommonOptions {
    /**
     * The default version to be used as a fallback when you did not provide some
     * version to `@Controller()` nor `@Version()`.
     */
    defaultVersion?: VersionOptions['version'];
}
/**
 * @publicApi
 */
type VersioningOptions = VersioningCommonOptions & (HeaderVersioningOptions | UriVersioningOptions | MediaTypeVersioningOptions | CustomVersioningOptions);

interface RouteInfo {
    path: string;
    method: RequestMethod;
    version?: VersionValue;
}
interface MiddlewareConfiguration<T = any> {
    middleware: T;
    forRoutes: (Type<any> | string | RouteInfo)[];
}

/**
 * Interface defining method for applying user defined middleware to routes.
 *
 * @see [MiddlewareConsumer](https://docs.nestjs.com/middleware#middleware-consumer)
 *
 * @publicApi
 */
interface MiddlewareConsumer {
    /**
     * @param {...(Type | Function)} middleware middleware class/function or array of classes/functions
     * to be attached to the passed routes.
     *
     * @returns {MiddlewareConfigProxy}
     */
    apply(...middleware: (Type<any> | Function)[]): MiddlewareConfigProxy;
}

/**
 * @publicApi
 */
interface MiddlewareConfigProxy {
    /**
     * Routes to exclude from the current middleware.
     *
     * @param {(string | RouteInfo)[]} routes
     * @returns {MiddlewareConfigProxy}
     */
    exclude(...routes: (string | RouteInfo)[]): MiddlewareConfigProxy;
    /**
     * Attaches either routes or controllers to the current middleware.
     * If you pass a controller class, Nest will attach the current middleware to every path
     * defined within it.
     *
     * @param {(string | Type | RouteInfo)[]} routes
     * @returns {MiddlewareConsumer}
     */
    forRoutes(...routes: (string | Type<any> | RouteInfo)[]): MiddlewareConsumer;
}

/**
 * @see [Middleware](https://docs.nestjs.com/middleware)
 *
 * @publicApi
 */
interface NestMiddleware<TRequest = any, TResponse = any> {
    use(req: TRequest, res: TResponse, next: (error?: any) => void): any;
}

/**
 * @publicApi
 */
interface GlobalPrefixOptions<T = string | RouteInfo> {
    exclude?: T[];
}

interface BeforeApplicationShutdown {
    beforeApplicationShutdown(signal?: string): any;
}

/**
 * Interface defining method called once the application has fully started and
 * is bootstrapped.
 *
 * @see [Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)
 *
 * @publicApi
 */
interface OnApplicationBootstrap {
    onApplicationBootstrap(): any;
}

/**
 * Interface defining method to respond to system signals (when application gets
 * shutdown by, e.g., SIGTERM)
 *
 * @see [Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)
 *
 * @publicApi
 */
interface OnApplicationShutdown {
    onApplicationShutdown(signal?: string): any;
}

/**
 * Interface defining method called just before Nest destroys the host module
 * (`app.close()` method has been evaluated).  Use to perform cleanup on
 * resources (e.g., Database connections).
 *
 * @see [Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)
 *
 * @publicApi
 */
interface OnModuleDestroy {
    onModuleDestroy(): any;
}

/**
 * Interface defining method called once the host module has been initialized.
 *
 * @see [Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)
 *
 * @publicApi
 */
interface OnModuleInit {
    onModuleInit(): any;
}

type HttpExceptionBodyMessage = string | string[] | number;
interface HttpExceptionBody {
    message: HttpExceptionBodyMessage;
    error?: string;
    statusCode: number;
}

interface HttpRedirectResponse {
    url: string;
    statusCode: HttpStatus;
}

interface MessageEvent {
    data: string | object;
    id?: string;
    type?: string;
    retry?: number;
}

/**
 * @publicApi
 */
type RawBodyRequest<T> = T & {
    rawBody?: Buffer;
};

type Injectable = unknown;

interface ForwardReference<T = any> {
    forwardRef: T;
}

/**
 * @publicApi
 */
declare enum Scope {
    /**
     * The provider can be shared across multiple classes. The provider lifetime
     * is strictly tied to the application lifecycle. Once the application has
     * bootstrapped, all providers have been instantiated.
     */
    DEFAULT = 0,
    /**
     * A new private instance of the provider is instantiated for every use
     */
    TRANSIENT = 1,
    /**
     * A new instance is instantiated for each request processing pipeline
     */
    REQUEST = 2
}
/**
 * @publicApi
 *
 * @see [Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
 */
interface ScopeOptions {
    /**
     * Specifies the lifetime of an injected Provider or Controller.
     */
    scope?: Scope;
    /**
     * Flags provider as durable. This flag can be used in combination with custom context id
     * factory strategy to construct lazy DI subtrees.
     *
     * This flag can be used only in conjunction with scope = Scope.REQUEST.
     */
    durable?: boolean;
}

/**
 * @publicApi
 */
type InjectionToken<T = any> = string | symbol | Type<T> | Abstract<T> | Function;

/**
 * @publicApi
 */
type OptionalFactoryDependency = {
    token: InjectionToken;
    optional: boolean;
};

/**
 *
 * @publicApi
 */
type Provider<T = any> = Type<any> | ClassProvider<T> | ValueProvider<T> | FactoryProvider<T> | ExistingProvider<T>;
/**
 * Interface defining a *Class* type provider.
 *
 * For example:
 * ```typescript
 * const configServiceProvider = {
 * provide: ConfigService,
 * useClass:
 *   process.env.NODE_ENV === 'development'
 *     ? DevelopmentConfigService
 *     : ProductionConfigService,
 * };
 * ```
 *
 * @see [Class providers](https://docs.nestjs.com/fundamentals/custom-providers#class-providers-useclass)
 * @see [Injection scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
 *
 * @publicApi
 */
interface ClassProvider<T = any> {
    /**
     * Injection token
     */
    provide: InjectionToken;
    /**
     * Type (class name) of provider (instance to be injected).
     */
    useClass: Type<T>;
    /**
     * Optional enum defining lifetime of the provider that is injected.
     */
    scope?: Scope;
    /**
     * This option is only available on factory providers!
     *
     * @see [Use factory](https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory)
     */
    inject?: never;
    /**
     * Flags provider as durable. This flag can be used in combination with custom context id
     * factory strategy to construct lazy DI subtrees.
     *
     * This flag can be used only in conjunction with scope = Scope.REQUEST.
     */
    durable?: boolean;
}
/**
 * Interface defining a *Value* type provider.
 *
 * For example:
 * ```typescript
 * const connectionProvider = {
 *   provide: 'CONNECTION',
 *   useValue: connection,
 * };
 * ```
 *
 * @see [Value providers](https://docs.nestjs.com/fundamentals/custom-providers#value-providers-usevalue)
 *
 * @publicApi
 */
interface ValueProvider<T = any> {
    /**
     * Injection token
     */
    provide: InjectionToken;
    /**
     * Instance of a provider to be injected.
     */
    useValue: T;
    /**
     * This option is only available on factory providers!
     *
     * @see [Use factory](https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory)
     */
    inject?: never;
}
/**
 * Interface defining a *Factory* type provider.
 *
 * For example:
 * ```typescript
 * const connectionFactory = {
 *   provide: 'CONNECTION',
 *   useFactory: (optionsProvider: OptionsProvider) => {
 *     const options = optionsProvider.get();
 *     return new DatabaseConnection(options);
 *   },
 *   inject: [OptionsProvider],
 * };
 * ```
 *
 * @see [Factory providers](https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory)
 * @see [Injection scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
 *
 * @publicApi
 */
interface FactoryProvider<T = any> {
    /**
     * Injection token
     */
    provide: InjectionToken;
    /**
     * Factory function that returns an instance of the provider to be injected.
     */
    useFactory: (...args: any[]) => T | Promise<T>;
    /**
     * Optional list of providers to be injected into the context of the Factory function.
     */
    inject?: Array<InjectionToken | OptionalFactoryDependency>;
    /**
     * Optional enum defining lifetime of the provider that is returned by the Factory function.
     */
    scope?: Scope;
    /**
     * Flags provider as durable. This flag can be used in combination with custom context id
     * factory strategy to construct lazy DI subtrees.
     *
     * This flag can be used only in conjunction with scope = Scope.REQUEST.
     */
    durable?: boolean;
}
/**
 * Interface defining an *Existing* (aliased) type provider.
 *
 * For example:
 * ```typescript
 * const loggerAliasProvider = {
 *   provide: 'AliasedLoggerService',
 *   useExisting: LoggerService
 * };
 * ```
 *
 * @see [Alias providers](https://docs.nestjs.com/fundamentals/custom-providers#alias-providers-useexisting)
 *
 * @publicApi
 */
interface ExistingProvider<T = any> {
    /**
     * Injection token
     */
    provide: InjectionToken;
    /**
     * Provider to be aliased by the Injection token.
     */
    useExisting: any;
}

/**
 * Interface defining the property object that describes the module.
 *
 * @see [Modules](https://docs.nestjs.com/modules)
 *
 * @publicApi
 */
interface ModuleMetadata {
    /**
     * Optional list of imported modules that export the providers which are
     * required in this module.
     */
    imports?: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
    /**
     * Optional list of controllers defined in this module which have to be
     * instantiated.
     */
    controllers?: Type<any>[];
    /**
     * Optional list of providers that will be instantiated by the Nest injector
     * and that may be shared at least across this module.
     */
    providers?: Provider[];
    /**
     * Optional list of the subset of providers that are provided by this module
     * and should be available in other modules which import this module.
     */
    exports?: Array<DynamicModule | string | symbol | Provider | ForwardReference | Abstract<any> | Function>;
}

/**
 * Interface defining a Dynamic Module.
 *
 * @see [Dynamic Modules](https://docs.nestjs.com/modules#dynamic-modules)
 *
 * @publicApi
 */
interface DynamicModule extends ModuleMetadata {
    /**
     * A module reference
     */
    module: Type<any>;
    /**
     * When "true", makes a module global-scoped.
     *
     * Once imported into any module, a global-scoped module will be visible
     * in all modules. Thereafter, modules that wish to inject a service exported
     * from a global module do not need to import the provider module.
     *
     * @default false
     */
    global?: boolean;
}

/**
 * @publicApi
 */
interface IntrospectionResult {
    /**
     * Enum defining lifetime of host class or factory.
     */
    scope: Scope;
}

/**
 * @publicApi
 */
interface NestModule {
    configure(consumer: MiddlewareConsumer): any;
}

/**
 * Options for configuring shutdown hooks behavior.
 *
 * @publicApi
 */
interface ShutdownHooksOptions {
    /**
     * If true, uses `process.exit()` instead of `process.kill(process.pid, signal)`
     * after shutdown hooks complete. This ensures the 'exit' event is properly
     * triggered, which is required for async loggers (like Pino with transports)
     * to flush their buffers before the process terminates.
     *
     * Note: Using `process.exit()` will:
     * - Change the exit code (e.g., SIGTERM: 143 → 0)
     * - May not trigger other signal handlers from third-party libraries
     * - May affect orchestrator (Kubernetes, Docker) behavior
     *
     * @default false
     */
    useProcessExit?: boolean;
}

/**
 * @publicApi
 */
interface WsMessageHandler<T = string> {
    message: T;
    callback: (...args: any[]) => Observable<any> | Promise<any>;
    isAckHandledManually: boolean;
}
/**
 * @publicApi
 */
interface WebSocketAdapter<TServer = any, TClient = any, TOptions = any> {
    create(port: number, options?: TOptions): TServer;
    bindClientConnect(server: TServer, callback: Function): any;
    bindClientDisconnect?(client: TClient, callback: Function): any;
    bindMessageHandlers(client: TClient, handlers: WsMessageHandler[], transform: (data: any) => Observable<any>): any;
    close(server: TServer): any;
}

declare const MODULE_METADATA: {
    IMPORTS: string;
    PROVIDERS: string;
    CONTROLLERS: string;
    EXPORTS: string;
};
declare const GLOBAL_MODULE_METADATA = "__module:global__";
declare const HOST_METADATA = "host";
declare const PATH_METADATA = "path";
declare const PARAMTYPES_METADATA = "design:paramtypes";
declare const SELF_DECLARED_DEPS_METADATA = "self:paramtypes";
declare const OPTIONAL_DEPS_METADATA = "optional:paramtypes";
declare const PROPERTY_DEPS_METADATA = "self:properties_metadata";
declare const OPTIONAL_PROPERTY_DEPS_METADATA = "optional:properties_metadata";
declare const SCOPE_OPTIONS_METADATA = "scope:options";
declare const METHOD_METADATA = "method";
declare const ROUTE_ARGS_METADATA = "__routeArguments__";
declare const CUSTOM_ROUTE_ARGS_METADATA = "__customRouteArgs__";
declare const FILTER_CATCH_EXCEPTIONS = "__filterCatchExceptions__";
declare const PIPES_METADATA = "__pipes__";
declare const GUARDS_METADATA = "__guards__";
declare const INTERCEPTORS_METADATA = "__interceptors__";
declare const EXCEPTION_FILTERS_METADATA = "__exceptionFilters__";
declare const ENHANCER_KEY_TO_SUBTYPE_MAP: {
    readonly __guards__: "guard";
    readonly __interceptors__: "interceptor";
    readonly __pipes__: "pipe";
    readonly __exceptionFilters__: "filter";
};
type EnhancerSubtype = (typeof ENHANCER_KEY_TO_SUBTYPE_MAP)[keyof typeof ENHANCER_KEY_TO_SUBTYPE_MAP];
declare const RENDER_METADATA = "__renderTemplate__";
declare const HTTP_CODE_METADATA = "__httpCode__";
declare const MODULE_PATH = "__module_path__";
declare const HEADERS_METADATA = "__headers__";
declare const REDIRECT_METADATA = "__redirect__";
declare const RESPONSE_PASSTHROUGH_METADATA = "__responsePassthrough__";
declare const SSE_METADATA = "__sse__";
declare const VERSION_METADATA = "__version__";
declare const INJECTABLE_WATERMARK = "__injectable__";
declare const CONTROLLER_WATERMARK = "__controller__";
declare const CATCH_WATERMARK = "__catch__";
declare const ENTRY_PROVIDER_WATERMARK = "__entryProvider__";

export { type Abstract, type ArgumentMetadata, type ArgumentsHost, type BeforeApplicationShutdown, CATCH_WATERMARK, CONTROLLER_WATERMARK, CUSTOM_ROUTE_ARGS_METADATA, type CallHandler, type CanActivate, type ClassProvider, type ContextType, type Controller, type ControllerMetadata, type CustomParamFactory, type CustomVersioningOptions, type DynamicModule, ENHANCER_KEY_TO_SUBTYPE_MAP, ENTRY_PROVIDER_WATERMARK, EXCEPTION_FILTERS_METADATA, type EnhancerSubtype, type ExceptionFilter, type ExceptionFilterMetadata, type ExecutionContext, type ExistingProvider, FILTER_CATCH_EXCEPTIONS, type FactoryProvider, type ForwardReference, GLOBAL_MODULE_METADATA, GUARDS_METADATA, type GlobalPrefixOptions, HEADERS_METADATA, HOST_METADATA, HTTP_CODE_METADATA, type HeaderVersioningOptions, type HttpArgumentsHost, type HttpExceptionBody, type HttpExceptionBodyMessage, type HttpRedirectResponse, HttpStatus, INJECTABLE_WATERMARK, INTERCEPTORS_METADATA, type Injectable, type InjectionToken, type IntrospectionResult, KafkaHeaders, METHOD_METADATA, MODULE_METADATA, MODULE_PATH, type MediaTypeVersioningOptions, type MessageEvent, type MiddlewareConfigProxy, type MiddlewareConfiguration, type MiddlewareConsumer, type ModuleMetadata, type NestInterceptor, type NestMiddleware, type NestModule, OPTIONAL_DEPS_METADATA, OPTIONAL_PROPERTY_DEPS_METADATA, type OnApplicationBootstrap, type OnApplicationShutdown, type OnModuleDestroy, type OnModuleInit, type OptionalFactoryDependency, PARAMTYPES_METADATA, PATH_METADATA, PIPES_METADATA, PROPERTY_DEPS_METADATA, type Paramtype, type PipeTransform, type Provider, REDIRECT_METADATA, RENDER_METADATA, RESPONSE_PASSTHROUGH_METADATA, ROUTE_ARGS_METADATA, type RawBodyRequest, RequestMethod, type RouteInfo, RouteParamtypes, type RpcArgumentsHost, type RpcExceptionFilter, type RpcExceptionFilterMetadata, SCOPE_OPTIONS_METADATA, SELF_DECLARED_DEPS_METADATA, SSE_METADATA, Scope, type ScopeOptions, type ShutdownHooksOptions, ShutdownSignal, type Transform, Transport, type Type, type UriVersioningOptions, VERSION_METADATA, VERSION_NEUTRAL, type ValidationError, type ValueProvider, type VersionOptions, type VersionValue, type VersioningOptions, VersioningType, type WebSocketAdapter, type WsArgumentsHost, type WsExceptionFilter, type WsMessageHandler };
