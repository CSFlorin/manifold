import * as functions from 'firebase-functions';
export declare const logUsers: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logUserPortfolioHistories: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logUserContractMetrics: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logUserFollows: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logUserReactions: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logUserEvents: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logUserSeenMarkets: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logContracts: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logContractAnswers: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logContractBets: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logContractComments: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logContractFollows: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logContractLiquidity: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logGroups: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logGroupContracts: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logGroupMembers: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logTxns: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logManalinks: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logPosts: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
export declare const logTest: functions.CloudFunction<functions.Change<functions.firestore.DocumentSnapshot>>;
