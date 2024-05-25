"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIX_PACKAGE_IMPORT_PREFIX = exports.WIX_CODE_DOCS_REMOTE = exports.MODEL_JSON_FILENAME = exports.FULL_WIX_CODE_DECLARATION_BETA_FILENAME = exports.FULL_WIX_CODE_DECLARATION_FILENAME = exports.COMPONENTS_DATA_JSON_FILENAME = exports.DEST_JSONS_PATH = exports.DEST_BETA_TYPES_DIR = exports.DEST_TYPES_DIR_NODE = exports.DEST_TYPES_DIR_COMMON = exports.WEB_WORKER_LIB = exports.TARGET_ES_LIB = exports.WIX_CODE_TYPES_MODULE_NAME = void 0;
const wix_code_common_1 = require("@wix/wix-code-common");
exports.WIX_CODE_TYPES_MODULE_NAME = "wix-code-types";
exports.TARGET_ES_LIB = "ES2020";
exports.WEB_WORKER_LIB = "WebWorker";
exports.DEST_TYPES_DIR_COMMON = "common";
exports.DEST_TYPES_DIR_NODE = "node";
exports.DEST_BETA_TYPES_DIR = "beta";
const WIX_PRIVATE_NPM_REGISTRY = "http://npm.dev.wixpress.com/";
const DIST_BUILD_FOLDER = "dist";
const TYPE_TEMPLATES_FOLDER = "type-templates";
exports.DEST_JSONS_PATH = `${DIST_BUILD_FOLDER}/jsons`;
exports.COMPONENTS_DATA_JSON_FILENAME = "componentsData.json";
const DOCWORKS_DTS_FILENAME = "docworks-packages.d.ts";
const $W_DECLARATION_FULL_FILENAME = "$w.d.ts";
exports.FULL_WIX_CODE_DECLARATION_FILENAME = "fullWixCodeTypes.json";
exports.FULL_WIX_CODE_DECLARATION_BETA_FILENAME = "fullWixCodeTypes.beta.json";
const DEST_TYPES_PATH = `${DIST_BUILD_FOLDER}/types`;
const DEST_BETA_TYPES_PATH = `${DEST_TYPES_PATH}/beta`;
const TYPES_COMMON_PATH = `${DEST_TYPES_PATH}/${exports.DEST_TYPES_DIR_COMMON}`;
const BETA_TYPES_COMMON_PATH = `${DEST_BETA_TYPES_PATH}/${exports.DEST_TYPES_DIR_COMMON}`;
const TYPES_BACKEND_PATH = `${DEST_TYPES_PATH}/${wix_code_common_1.FileContext.Backend}`;
const TYPES_PAGES_PATH = `${DEST_TYPES_PATH}/${wix_code_common_1.FileContext.Page}`;
const TYPES_PUBLIC_PATH = `${DEST_TYPES_PATH}/${wix_code_common_1.FileContext.Public}`;
const TYPES_NODE_PATH = `${DEST_TYPES_PATH}/${exports.DEST_TYPES_DIR_NODE}`;
const DOCWORKS_DTS_COMMON_PATH = `${TYPES_COMMON_PATH}/${DOCWORKS_DTS_FILENAME}`;
const DOCWORKS_DTS_COMMON_BETA_PATH = `${BETA_TYPES_COMMON_PATH}/${DOCWORKS_DTS_FILENAME}`;
const DOCWORKS_DTS_PUBLIC_PATH = `${TYPES_PUBLIC_PATH}/${DOCWORKS_DTS_FILENAME}`;
const DOCWORKS_DTS_BACKEND_PATH = `${TYPES_BACKEND_PATH}/${DOCWORKS_DTS_FILENAME}`;
const DOCWORKS_DTS_PAGES_PATH = `${TYPES_PAGES_PATH}/${DOCWORKS_DTS_FILENAME}`;
const WIX_PACKAGES_DTS_FILENAME = "wix-packages.d.ts";
exports.MODEL_JSON_FILENAME = "model.json";
const $W_MODULE_NAME = "$w";
const $W_GLOBAL_COMMENTS = {
    DECLARATION_COMMENT: "$W_GLOBAL_DECLARATION_COMMENT",
    NAMESPACE_COMMENT: "$W_NAMESPACE_COMMENT",
    $W_TYPE_DECLARATION_COMMENT: "$W_TYPE_DECLARATION_COMMENT",
};
const $W_MEMBERS_KEY = "/** ##$W_NAMESPACE_MEMBERS## */";
const QUERYABLE_TYPE = "TypeNameToSdkType";
const CONFIGS_PATHS = "configs";
const CONFIG_FILENAME = "tsconfig";
const JSON_EXTENSION = "json";
const TS_CONFIG_PATHS = {
    BACKEND: `${CONFIGS_PATHS}/${CONFIG_FILENAME}.${wix_code_common_1.FileContext.Backend}.${JSON_EXTENSION}`,
    PUBLIC: `${CONFIGS_PATHS}/${CONFIG_FILENAME}.${wix_code_common_1.FileContext.Public}.${JSON_EXTENSION}`,
    PAGE: `${CONFIGS_PATHS}/${CONFIG_FILENAME}.${wix_code_common_1.FileContext.Page}.${JSON_EXTENSION}`,
};
const TS_CONFIG_BETA_PATHS = {
    BACKEND: `${CONFIGS_PATHS}/${exports.DEST_BETA_TYPES_DIR}/${CONFIG_FILENAME}.${wix_code_common_1.FileContext.Backend}.${exports.DEST_BETA_TYPES_DIR}.${JSON_EXTENSION}`,
    PUBLIC: `${CONFIGS_PATHS}/${exports.DEST_BETA_TYPES_DIR}/${CONFIG_FILENAME}.${wix_code_common_1.FileContext.Public}.${exports.DEST_BETA_TYPES_DIR}.${JSON_EXTENSION}`,
    PAGE: `${CONFIGS_PATHS}/${exports.DEST_BETA_TYPES_DIR}/${CONFIG_FILENAME}.${wix_code_common_1.FileContext.Page}.${exports.DEST_BETA_TYPES_DIR}.${JSON_EXTENSION}`,
};
exports.WIX_CODE_DOCS_REMOTE = "https://github.com/wix/wix-code-docs.git";
const PACKAGE_JSON = "package.json";
const MODULES_TO_IGNORE = ["site-monitoring", "npm-modules"];
exports.WIX_PACKAGE_IMPORT_PREFIX = 'wix-';
exports.default = {
    WIX_PRIVATE_NPM_REGISTRY,
    TARGET_ES_LIB: exports.TARGET_ES_LIB,
    WEB_WORKER_LIB: exports.WEB_WORKER_LIB,
    $W_MODULE_NAME,
    $W_GLOBAL_COMMENTS,
    $W_MEMBERS_KEY,
    QUERYABLE_TYPE,
    DIST_BUILD_FOLDER,
    DEST_TYPES_PATH,
    DEST_JSONS_PATH: exports.DEST_JSONS_PATH,
    TYPE_TEMPLATES_FOLDER,
    TYPES_COMMON_PATH,
    BETA_TYPES_COMMON_PATH,
    TYPES_BACKEND_PATH,
    TYPES_PAGES_PATH,
    TYPES_PUBLIC_PATH,
    TYPES_NODE_PATH,
    DOCWORKS_DTS_COMMON_PATH,
    DOCWORKS_DTS_COMMON_BETA_PATH,
    DOCWORKS_DTS_PUBLIC_PATH,
    DOCWORKS_DTS_BACKEND_PATH,
    DOCWORKS_DTS_PAGES_PATH,
    DOCWORKS_DTS_FILENAME,
    COMPONENTS_DATA_JSON_FILENAME: exports.COMPONENTS_DATA_JSON_FILENAME,
    $W_DECLARATION_FULL_FILENAME,
    FULL_WIX_CODE_DECLARATION_FILENAME: exports.FULL_WIX_CODE_DECLARATION_FILENAME,
    FULL_WIX_CODE_DECLARATION_BETA_FILENAME: exports.FULL_WIX_CODE_DECLARATION_BETA_FILENAME,
    TS_CONFIG_PATHS,
    TS_CONFIG_BETA_PATHS,
    WIX_PACKAGES_DTS_FILENAME,
    WIX_CODE_DOCS_REMOTE: exports.WIX_CODE_DOCS_REMOTE,
    MODEL_JSON_FILENAME: exports.MODEL_JSON_FILENAME,
    PACKAGE_JSON,
    MODULES_TO_IGNORE,
    FileContext: wix_code_common_1.FileContext,
    DEST_TYPES_DIR_COMMON: exports.DEST_TYPES_DIR_COMMON,
    DEST_BETA_TYPES_DIR: exports.DEST_BETA_TYPES_DIR,
    WIX_CODE_TYPES_MODULE_NAME: exports.WIX_CODE_TYPES_MODULE_NAME,
};
//# sourceMappingURL=constants.js.map