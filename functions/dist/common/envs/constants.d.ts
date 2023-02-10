import { EnvConfig } from './prod';
export declare const BACKGROUND_COLOR = "bg-gray-50";
export declare const ENV: string;
export declare const CONFIGS: {
    [env: string]: EnvConfig;
};
export declare const ENV_CONFIG: EnvConfig;
export declare function isWhitelisted(email?: string): boolean | "" | undefined;
export declare function isAdmin(email?: string): boolean;
export declare function isManifoldId(userId: string): boolean;
export declare const DOMAIN: string;
export declare const FIREBASE_CONFIG: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    region?: string | undefined;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
};
export declare const PROJECT_ID: string;
export declare const IS_PRIVATE_MANIFOLD: boolean;
export declare const AUTH_COOKIE_NAME: string;
export declare const CORS_ORIGIN_MANIFOLD: RegExp;
export declare const CORS_ORIGIN_VERCEL: RegExp;
export declare const CORS_ORIGIN_LOCALHOST: RegExp;
export declare const BOT_USERNAMES: string[];
export declare const CORE_USERNAMES: string[];
export declare const CHECK_USERNAMES: string[];
export declare const HOUSE_BOT_USERNAME = "acc";
export declare function firestoreConsolePath(contractId: string): string;
export declare const GOOGLE_PLAY_APP_URL = "https://play.google.com/store/apps/details?id=com.markets.manifold";
export declare const APPLE_APP_URL = "https://apps.apple.com/us/app/manifold-markets/id6444136749";
export declare const TEN_YEARS_SECS: number;
export declare const DESTINY_GROUP_SLUGS: string[];
export declare const HOME_BLOCKED_GROUP_SLUGS: string[];
export declare const EXTERNAL_REDIRECTS: string[];
