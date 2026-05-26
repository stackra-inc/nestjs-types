'use strict';

// src/interfaces/scope-options.interface.ts
var Scope = /* @__PURE__ */ ((Scope2) => {
  Scope2[Scope2["DEFAULT"] = 0] = "DEFAULT";
  Scope2[Scope2["TRANSIENT"] = 1] = "TRANSIENT";
  Scope2[Scope2["REQUEST"] = 2] = "REQUEST";
  return Scope2;
})(Scope || {});

// src/interfaces/version-options.interface.ts
var VERSION_NEUTRAL = /* @__PURE__ */ Symbol("VERSION_NEUTRAL");

// src/enums/request-method.enum.ts
var RequestMethod = /* @__PURE__ */ ((RequestMethod2) => {
  RequestMethod2[RequestMethod2["GET"] = 0] = "GET";
  RequestMethod2[RequestMethod2["POST"] = 1] = "POST";
  RequestMethod2[RequestMethod2["PUT"] = 2] = "PUT";
  RequestMethod2[RequestMethod2["DELETE"] = 3] = "DELETE";
  RequestMethod2[RequestMethod2["PATCH"] = 4] = "PATCH";
  RequestMethod2[RequestMethod2["ALL"] = 5] = "ALL";
  RequestMethod2[RequestMethod2["OPTIONS"] = 6] = "OPTIONS";
  RequestMethod2[RequestMethod2["HEAD"] = 7] = "HEAD";
  RequestMethod2[RequestMethod2["SEARCH"] = 8] = "SEARCH";
  RequestMethod2[RequestMethod2["PROPFIND"] = 9] = "PROPFIND";
  RequestMethod2[RequestMethod2["PROPPATCH"] = 10] = "PROPPATCH";
  RequestMethod2[RequestMethod2["MKCOL"] = 11] = "MKCOL";
  RequestMethod2[RequestMethod2["COPY"] = 12] = "COPY";
  RequestMethod2[RequestMethod2["MOVE"] = 13] = "MOVE";
  RequestMethod2[RequestMethod2["LOCK"] = 14] = "LOCK";
  RequestMethod2[RequestMethod2["UNLOCK"] = 15] = "UNLOCK";
  return RequestMethod2;
})(RequestMethod || {});

// src/enums/http-status.enum.ts
var HttpStatus = /* @__PURE__ */ ((HttpStatus2) => {
  HttpStatus2[HttpStatus2["CONTINUE"] = 100] = "CONTINUE";
  HttpStatus2[HttpStatus2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
  HttpStatus2[HttpStatus2["PROCESSING"] = 102] = "PROCESSING";
  HttpStatus2[HttpStatus2["EARLYHINTS"] = 103] = "EARLYHINTS";
  HttpStatus2[HttpStatus2["OK"] = 200] = "OK";
  HttpStatus2[HttpStatus2["CREATED"] = 201] = "CREATED";
  HttpStatus2[HttpStatus2["ACCEPTED"] = 202] = "ACCEPTED";
  HttpStatus2[HttpStatus2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
  HttpStatus2[HttpStatus2["NO_CONTENT"] = 204] = "NO_CONTENT";
  HttpStatus2[HttpStatus2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  HttpStatus2[HttpStatus2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  HttpStatus2[HttpStatus2["MULTI_STATUS"] = 207] = "MULTI_STATUS";
  HttpStatus2[HttpStatus2["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
  HttpStatus2[HttpStatus2["CONTENT_DIFFERENT"] = 210] = "CONTENT_DIFFERENT";
  HttpStatus2[HttpStatus2["AMBIGUOUS"] = 300] = "AMBIGUOUS";
  HttpStatus2[HttpStatus2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
  HttpStatus2[HttpStatus2["FOUND"] = 302] = "FOUND";
  HttpStatus2[HttpStatus2["SEE_OTHER"] = 303] = "SEE_OTHER";
  HttpStatus2[HttpStatus2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  HttpStatus2[HttpStatus2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
  HttpStatus2[HttpStatus2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
  HttpStatus2[HttpStatus2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpStatus2[HttpStatus2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpStatus2[HttpStatus2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
  HttpStatus2[HttpStatus2["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpStatus2[HttpStatus2["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpStatus2[HttpStatus2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  HttpStatus2[HttpStatus2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  HttpStatus2[HttpStatus2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
  HttpStatus2[HttpStatus2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  HttpStatus2[HttpStatus2["CONFLICT"] = 409] = "CONFLICT";
  HttpStatus2[HttpStatus2["GONE"] = 410] = "GONE";
  HttpStatus2[HttpStatus2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
  HttpStatus2[HttpStatus2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
  HttpStatus2[HttpStatus2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
  HttpStatus2[HttpStatus2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
  HttpStatus2[HttpStatus2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  HttpStatus2[HttpStatus2["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
  HttpStatus2[HttpStatus2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
  HttpStatus2[HttpStatus2["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
  HttpStatus2[HttpStatus2["MISDIRECTED"] = 421] = "MISDIRECTED";
  HttpStatus2[HttpStatus2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  HttpStatus2[HttpStatus2["LOCKED"] = 423] = "LOCKED";
  HttpStatus2[HttpStatus2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
  HttpStatus2[HttpStatus2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
  HttpStatus2[HttpStatus2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  HttpStatus2[HttpStatus2["UNRECOVERABLE_ERROR"] = 456] = "UNRECOVERABLE_ERROR";
  HttpStatus2[HttpStatus2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  HttpStatus2[HttpStatus2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  HttpStatus2[HttpStatus2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HttpStatus2[HttpStatus2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  HttpStatus2[HttpStatus2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  HttpStatus2[HttpStatus2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
  HttpStatus2[HttpStatus2["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
  HttpStatus2[HttpStatus2["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
  return HttpStatus2;
})(HttpStatus || {});

// src/enums/route-paramtypes.enum.ts
var RouteParamtypes = /* @__PURE__ */ ((RouteParamtypes2) => {
  RouteParamtypes2[RouteParamtypes2["REQUEST"] = 0] = "REQUEST";
  RouteParamtypes2[RouteParamtypes2["RESPONSE"] = 1] = "RESPONSE";
  RouteParamtypes2[RouteParamtypes2["NEXT"] = 2] = "NEXT";
  RouteParamtypes2[RouteParamtypes2["BODY"] = 3] = "BODY";
  RouteParamtypes2[RouteParamtypes2["QUERY"] = 4] = "QUERY";
  RouteParamtypes2[RouteParamtypes2["PARAM"] = 5] = "PARAM";
  RouteParamtypes2[RouteParamtypes2["HEADERS"] = 6] = "HEADERS";
  RouteParamtypes2[RouteParamtypes2["SESSION"] = 7] = "SESSION";
  RouteParamtypes2[RouteParamtypes2["FILE"] = 8] = "FILE";
  RouteParamtypes2[RouteParamtypes2["FILES"] = 9] = "FILES";
  RouteParamtypes2[RouteParamtypes2["HOST"] = 10] = "HOST";
  RouteParamtypes2[RouteParamtypes2["IP"] = 11] = "IP";
  RouteParamtypes2[RouteParamtypes2["RAW_BODY"] = 12] = "RAW_BODY";
  RouteParamtypes2[RouteParamtypes2["ACK"] = 13] = "ACK";
  return RouteParamtypes2;
})(RouteParamtypes || {});

// src/enums/shutdown-signal.enum.ts
var ShutdownSignal = /* @__PURE__ */ ((ShutdownSignal2) => {
  ShutdownSignal2["SIGHUP"] = "SIGHUP";
  ShutdownSignal2["SIGINT"] = "SIGINT";
  ShutdownSignal2["SIGQUIT"] = "SIGQUIT";
  ShutdownSignal2["SIGILL"] = "SIGILL";
  ShutdownSignal2["SIGTRAP"] = "SIGTRAP";
  ShutdownSignal2["SIGABRT"] = "SIGABRT";
  ShutdownSignal2["SIGBUS"] = "SIGBUS";
  ShutdownSignal2["SIGFPE"] = "SIGFPE";
  ShutdownSignal2["SIGSEGV"] = "SIGSEGV";
  ShutdownSignal2["SIGUSR2"] = "SIGUSR2";
  ShutdownSignal2["SIGTERM"] = "SIGTERM";
  return ShutdownSignal2;
})(ShutdownSignal || {});

// src/enums/version-type.enum.ts
var VersioningType = /* @__PURE__ */ ((VersioningType2) => {
  VersioningType2[VersioningType2["URI"] = 0] = "URI";
  VersioningType2[VersioningType2["HEADER"] = 1] = "HEADER";
  VersioningType2[VersioningType2["MEDIA_TYPE"] = 2] = "MEDIA_TYPE";
  VersioningType2[VersioningType2["CUSTOM"] = 3] = "CUSTOM";
  return VersioningType2;
})(VersioningType || {});

// src/enums/microservices/transport.enum.ts
var Transport = /* @__PURE__ */ ((Transport2) => {
  Transport2[Transport2["TCP"] = 0] = "TCP";
  Transport2[Transport2["REDIS"] = 1] = "REDIS";
  Transport2[Transport2["NATS"] = 2] = "NATS";
  Transport2[Transport2["MQTT"] = 3] = "MQTT";
  Transport2[Transport2["GRPC"] = 4] = "GRPC";
  Transport2[Transport2["RMQ"] = 5] = "RMQ";
  Transport2[Transport2["KAFKA"] = 6] = "KAFKA";
  return Transport2;
})(Transport || {});

// src/enums/microservices/kafka-headers.enum.ts
var KafkaHeaders = /* @__PURE__ */ ((KafkaHeaders2) => {
  KafkaHeaders2["ACKNOWLEDGMENT"] = "kafka_acknowledgment";
  KafkaHeaders2["BATCH_CONVERTED_HEADERS"] = "kafka_batchConvertedHeaders";
  KafkaHeaders2["CONSUMER"] = "kafka_consumer";
  KafkaHeaders2["CORRELATION_ID"] = "kafka_correlationId";
  KafkaHeaders2["DELIVERY_ATTEMPT"] = "kafka_deliveryAttempt";
  KafkaHeaders2["DLT_EXCEPTION_FQCN"] = "kafka_dlt-exception-fqcn";
  KafkaHeaders2["DLT_EXCEPTION_MESSAGE"] = "kafka_dlt-exception-message";
  KafkaHeaders2["DLT_EXCEPTION_STACKTRACE"] = "kafka_dlt-exception-stacktrace";
  KafkaHeaders2["DLT_ORIGINAL_OFFSET"] = "kafka_dlt-original-offset";
  KafkaHeaders2["DLT_ORIGINAL_PARTITION"] = "kafka_dlt-original-partition";
  KafkaHeaders2["DLT_ORIGINAL_TIMESTAMP"] = "kafka_dlt-original-timestamp";
  KafkaHeaders2["DLT_ORIGINAL_TIMESTAMP_TYPE"] = "kafka_dlt-original-timestamp-type";
  KafkaHeaders2["DLT_ORIGINAL_TOPIC"] = "kafka_dlt-original-topic";
  KafkaHeaders2["GROUP_ID"] = "kafka_groupId";
  KafkaHeaders2["MESSAGE_KEY"] = "kafka_messageKey";
  KafkaHeaders2["NATIVE_HEADERS"] = "kafka_nativeHeaders";
  KafkaHeaders2["OFFSET"] = "kafka_offset";
  KafkaHeaders2["PARTITION_ID"] = "kafka_partitionId";
  KafkaHeaders2["PREFIX"] = "kafka_";
  KafkaHeaders2["RAW_DATA"] = "kafka_data";
  KafkaHeaders2["RECEIVED"] = "kafka_received";
  KafkaHeaders2["RECEIVED_MESSAGE_KEY"] = "kafka_receivedMessageKey";
  KafkaHeaders2["RECEIVED_PARTITION_ID"] = "kafka_receivedPartitionId";
  KafkaHeaders2["RECEIVED_TIMESTAMP"] = "kafka_receivedTimestamp";
  KafkaHeaders2["RECEIVED_TOPIC"] = "kafka_receivedTopic";
  KafkaHeaders2["RECORD_METADATA"] = "kafka_recordMetadata";
  KafkaHeaders2["REPLY_PARTITION"] = "kafka_replyPartition";
  KafkaHeaders2["REPLY_TOPIC"] = "kafka_replyTopic";
  KafkaHeaders2["TIMESTAMP"] = "kafka_timestamp";
  KafkaHeaders2["TIMESTAMP_TYPE"] = "kafka_timestampType";
  KafkaHeaders2["TOPIC"] = "kafka_topic";
  KafkaHeaders2["NEST_ERR"] = "kafka_nest-err";
  KafkaHeaders2["NEST_IS_DISPOSED"] = "kafka_nest-is-disposed";
  return KafkaHeaders2;
})(KafkaHeaders || {});

// src/constants/nestjs.constant.ts
var MODULE_METADATA = {
  IMPORTS: "imports",
  PROVIDERS: "providers",
  CONTROLLERS: "controllers",
  EXPORTS: "exports"
};
var GLOBAL_MODULE_METADATA = "__module:global__";
var HOST_METADATA = "host";
var PATH_METADATA = "path";
var PARAMTYPES_METADATA = "design:paramtypes";
var SELF_DECLARED_DEPS_METADATA = "self:paramtypes";
var OPTIONAL_DEPS_METADATA = "optional:paramtypes";
var PROPERTY_DEPS_METADATA = "self:properties_metadata";
var OPTIONAL_PROPERTY_DEPS_METADATA = "optional:properties_metadata";
var SCOPE_OPTIONS_METADATA = "scope:options";
var METHOD_METADATA = "method";
var ROUTE_ARGS_METADATA = "__routeArguments__";
var CUSTOM_ROUTE_ARGS_METADATA = "__customRouteArgs__";
var FILTER_CATCH_EXCEPTIONS = "__filterCatchExceptions__";
var PIPES_METADATA = "__pipes__";
var GUARDS_METADATA = "__guards__";
var INTERCEPTORS_METADATA = "__interceptors__";
var EXCEPTION_FILTERS_METADATA = "__exceptionFilters__";
var ENHANCER_KEY_TO_SUBTYPE_MAP = {
  [GUARDS_METADATA]: "guard",
  [INTERCEPTORS_METADATA]: "interceptor",
  [PIPES_METADATA]: "pipe",
  [EXCEPTION_FILTERS_METADATA]: "filter"
};
var RENDER_METADATA = "__renderTemplate__";
var HTTP_CODE_METADATA = "__httpCode__";
var MODULE_PATH = "__module_path__";
var HEADERS_METADATA = "__headers__";
var REDIRECT_METADATA = "__redirect__";
var RESPONSE_PASSTHROUGH_METADATA = "__responsePassthrough__";
var SSE_METADATA = "__sse__";
var VERSION_METADATA = "__version__";
var INJECTABLE_WATERMARK = "__injectable__";
var CONTROLLER_WATERMARK = "__controller__";
var CATCH_WATERMARK = "__catch__";
var ENTRY_PROVIDER_WATERMARK = "__entryProvider__";

exports.CATCH_WATERMARK = CATCH_WATERMARK;
exports.CONTROLLER_WATERMARK = CONTROLLER_WATERMARK;
exports.CUSTOM_ROUTE_ARGS_METADATA = CUSTOM_ROUTE_ARGS_METADATA;
exports.ENHANCER_KEY_TO_SUBTYPE_MAP = ENHANCER_KEY_TO_SUBTYPE_MAP;
exports.ENTRY_PROVIDER_WATERMARK = ENTRY_PROVIDER_WATERMARK;
exports.EXCEPTION_FILTERS_METADATA = EXCEPTION_FILTERS_METADATA;
exports.FILTER_CATCH_EXCEPTIONS = FILTER_CATCH_EXCEPTIONS;
exports.GLOBAL_MODULE_METADATA = GLOBAL_MODULE_METADATA;
exports.GUARDS_METADATA = GUARDS_METADATA;
exports.HEADERS_METADATA = HEADERS_METADATA;
exports.HOST_METADATA = HOST_METADATA;
exports.HTTP_CODE_METADATA = HTTP_CODE_METADATA;
exports.HttpStatus = HttpStatus;
exports.INJECTABLE_WATERMARK = INJECTABLE_WATERMARK;
exports.INTERCEPTORS_METADATA = INTERCEPTORS_METADATA;
exports.KafkaHeaders = KafkaHeaders;
exports.METHOD_METADATA = METHOD_METADATA;
exports.MODULE_METADATA = MODULE_METADATA;
exports.MODULE_PATH = MODULE_PATH;
exports.OPTIONAL_DEPS_METADATA = OPTIONAL_DEPS_METADATA;
exports.OPTIONAL_PROPERTY_DEPS_METADATA = OPTIONAL_PROPERTY_DEPS_METADATA;
exports.PARAMTYPES_METADATA = PARAMTYPES_METADATA;
exports.PATH_METADATA = PATH_METADATA;
exports.PIPES_METADATA = PIPES_METADATA;
exports.PROPERTY_DEPS_METADATA = PROPERTY_DEPS_METADATA;
exports.REDIRECT_METADATA = REDIRECT_METADATA;
exports.RENDER_METADATA = RENDER_METADATA;
exports.RESPONSE_PASSTHROUGH_METADATA = RESPONSE_PASSTHROUGH_METADATA;
exports.ROUTE_ARGS_METADATA = ROUTE_ARGS_METADATA;
exports.RequestMethod = RequestMethod;
exports.RouteParamtypes = RouteParamtypes;
exports.SCOPE_OPTIONS_METADATA = SCOPE_OPTIONS_METADATA;
exports.SELF_DECLARED_DEPS_METADATA = SELF_DECLARED_DEPS_METADATA;
exports.SSE_METADATA = SSE_METADATA;
exports.Scope = Scope;
exports.ShutdownSignal = ShutdownSignal;
exports.Transport = Transport;
exports.VERSION_METADATA = VERSION_METADATA;
exports.VERSION_NEUTRAL = VERSION_NEUTRAL;
exports.VersioningType = VersioningType;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map