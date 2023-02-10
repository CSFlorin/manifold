import { notification_reason_types } from './notification';
import { PrivateUser } from './user';
export type notification_destination_types = 'email' | 'browser' | 'mobile';
export type notification_preference = keyof notification_preferences;
export type notification_preferences = {
    all_comments_on_watched_markets: notification_destination_types[];
    all_answers_on_watched_markets: notification_destination_types[];
    tipped_comments_on_watched_markets: notification_destination_types[];
    comments_by_followed_users_on_watched_markets: notification_destination_types[];
    all_replies_to_my_comments_on_watched_markets: notification_destination_types[];
    all_replies_to_my_answers_on_watched_markets: notification_destination_types[];
    all_comments_on_contracts_with_shares_in_on_watched_markets: notification_destination_types[];
    answers_by_followed_users_on_watched_markets: notification_destination_types[];
    answers_by_market_creator_on_watched_markets: notification_destination_types[];
    all_answers_on_contracts_with_shares_in_on_watched_markets: notification_destination_types[];
    your_contract_closed: notification_destination_types[];
    all_comments_on_my_markets: notification_destination_types[];
    all_answers_on_my_markets: notification_destination_types[];
    subsidized_your_market: notification_destination_types[];
    resolutions_on_watched_markets: notification_destination_types[];
    resolutions_on_watched_markets_with_shares_in: notification_destination_types[];
    market_updates_on_watched_markets: notification_destination_types[];
    market_updates_on_watched_markets_with_shares_in: notification_destination_types[];
    probability_updates_on_watched_markets: notification_destination_types[];
    loan_income: notification_destination_types[];
    betting_streaks: notification_destination_types[];
    referral_bonuses: notification_destination_types[];
    unique_bettors_on_your_contract: notification_destination_types[];
    tips_on_your_comments: notification_destination_types[];
    tips_on_your_markets: notification_destination_types[];
    limit_order_fills: notification_destination_types[];
    group_role_changed: notification_destination_types[];
    tagged_user: notification_destination_types[];
    user_liked_your_content: notification_destination_types[];
    on_new_follow: notification_destination_types[];
    contract_from_followed_user: notification_destination_types[];
    trending_markets: notification_destination_types[];
    profit_loss_updates: notification_destination_types[];
    onboarding_flow: notification_destination_types[];
    thank_you_for_purchases: notification_destination_types[];
    opt_out_all: notification_destination_types[];
};
export declare const getDefaultNotificationPreferences: (isDev?: boolean) => notification_preferences;
export declare const notificationReasonToSubscriptionType: Partial<Record<notification_reason_types, notification_preference>>;
export declare function getNotificationPreference(reason: notification_reason_types | notification_preference): keyof notification_preferences;
export declare const getNotificationDestinationsForUser: (privateUser: PrivateUser, reason: notification_reason_types | notification_preference) => {
    sendToEmail: boolean;
    sendToBrowser: boolean;
    sendToMobile: boolean;
    unsubscribeUrl: string;
    urlToManageThisNotification: string;
    notificationPreference: keyof notification_preferences;
} | {
    sendToEmail: boolean;
    sendToBrowser: boolean;
    sendToMobile: boolean;
    unsubscribeUrl: string;
    urlToManageThisNotification: string;
    notificationPreference?: undefined;
};
export declare const userOptedOutOfBrowserNotifications: (privateUser: PrivateUser) => boolean;
export declare const userIsBlocked: (privateUserReceiver: PrivateUser, userSenderId: string) => boolean;
