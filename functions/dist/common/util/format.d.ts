import { BinaryContract, PseudoNumericContract } from 'common/contract';
export declare function formatMoney(amount: number): string;
export declare function formatMoneyNumber(amount: number): string;
export declare function getMoneyNumber(amount: number): number;
export declare function formatMoneyWithDecimals(amount: number): string;
export declare function formatWithCommas(amount: number): string;
export declare function manaToUSD(mana: number): string;
export declare function formatPercent(zeroToOne: number, shortFormat?: boolean): string;
export declare function formatPercentNumber(zeroToOne: number): number;
export declare function formatLargeNumber(num: number, sigfigs?: number): string;
export declare function shortFormatNumber(num: number): string;
export declare function toCamelCase(words: string): string;
export declare const formatOutcomeLabel: (contract: BinaryContract | PseudoNumericContract, outcomeLabel: 'YES' | 'NO') => "YES" | "NO" | "HIGHER" | "LOWER";
