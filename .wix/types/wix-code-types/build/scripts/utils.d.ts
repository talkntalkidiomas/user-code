import ts from "typescript";
import { AutocompleteType, WixPackage } from "@wix/wix-code-common";
import { TargetContexts } from "./types";
export declare const getPathsCompilerOptions: (files: string[]) => ts.MapLike<string[]>;
export declare const getDirectoryFromPath: (strPath: string) => string;
export declare const createTsProgram: (tsConfigPath: string) => ts.Program | undefined;
export declare const removeWixNamespaceFromPackage: (packageName: string) => string;
export declare const getPKGRelevantTargetContextsFromScopes: (wixPackage: WixPackage) => TargetContexts[];
export declare const extractPkgNamesFromTripleReferences: (tripleReferences: string[]) => string[];
export declare const onlyStable: (betaPkgList: string[]) => (stablePkg: string) => boolean;
export declare const maybeBetaPath: (autocompleteType: AutocompleteType) => string;
export declare const runAsyncScript: (fn: () => Promise<any>) => void;
export declare const onlyUnique: (value: string, index: number, self: string[]) => boolean;
export declare const isStringHasPrefix: (prefix: string) => (str: string) => boolean;
declare const _default: {
    runAsyncScript: (fn: () => Promise<any>) => void;
    createTsProgram: (tsConfigPath: string) => ts.Program | undefined;
    getDirectoryFromPath: (strPath: string) => string;
    getPathsCompilerOptions: (files: string[]) => ts.MapLike<string[]>;
    removeWixNamespaceFromPackage: (packageName: string) => string;
    getPKGRelevantTargetContextsFromScopes: (wixPackage: WixPackage) => TargetContexts[];
    extractPkgNamesFromTripleReferences: (tripleReferences: string[]) => string[];
    onlyStable: (betaPkgList: string[]) => (stablePkg: string) => boolean;
    maybeBetaPath: (autocompleteType: AutocompleteType) => string;
    onlyUnique: (value: string, index: number, self: string[]) => boolean;
    isStringHasPrefix: (prefix: string) => (str: string) => boolean;
};
export default _default;
//# sourceMappingURL=utils.d.ts.map