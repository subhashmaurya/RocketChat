import { IInquiry } from '../../../definition/IInquiry';
import { IMessage } from '../../../definition/IMessage';
import { IRole } from '../../../definition/IRole';
import { IRoom } from '../../../definition/IRoom';
import { ISetting } from '../../../definition/ISetting';
import { ISubscription } from '../../../definition/ISubscription';
import { IUser } from '../../../definition/IUser';
import { AutoUpdateRecord } from '../types/IMeteor';
import { IEmoji } from '../../../definition/IEmoji';
import { IUserStatus } from '../../../definition/IUserStatus';
import { IUserSession } from '../../../definition/IUserSession';
import { ILoginServiceConfiguration } from '../../../definition/ILoginServiceConfiguration';
import { IInstanceStatus } from '../../../definition/IInstanceStatus';
import { IIntegrationHistory } from '../../../definition/IIntegrationHistory';
import { ILivechatDepartmentAgents } from '../../../definition/ILivechatDepartmentAgents';
import { IIntegration } from '../../../definition/IIntegration';
import { IEmailInbox } from '../../../definition/IEmailInbox';
import { ILivechatCustomField } from '../../../definition/ILivechatCustomField';

type ClientAction = 'inserted' | 'updated' | 'removed' | 'changed';

export type EventSignatures = {
	'banner.new'(bannerId: string): void;
	'emoji.deleteCustom'(emoji: IEmoji): void;
	'emoji.updateCustom'(emoji: IEmoji): void;
	'license.module'(data: { module: string; valid: boolean }): void;
	'message'(data: { action: string; message: IMessage }): void;
	'meteor.autoUpdateClientVersionChanged'(data: {record: AutoUpdateRecord }): void;
	'notify.ephemeralMessage'(uid: string, rid: string, message: Partial<IMessage>): void;
	'permission.changed'(data: { clientAction: ClientAction; data: any }): void;
	'room'(data: { action: string; room: Partial<IRoom> }): void;
	'room.avatarUpdate'(room: Partial<IRoom>): void;
	'setting'(data: { action: string; setting: Partial<ISetting> }): void;
	'stream'([streamer, eventName, payload]: [string, string, string]): void;
	'subscription'(data: { action: string; subscription: Partial<ISubscription> }): void;
	'user.avatarUpdate'(user: Partial<IUser>): void;
	'user.deleted'(user: Partial<IUser>): void;
	'user.deleteCustomStatus'(userStatus: IUserStatus): void;
	'user.nameChanged'(user: Partial<IUser>): void;
	'user.roleUpdate'(update: Record<string, any>): void;
	'user.updateCustomStatus'(userStatus: IUserStatus): void;
	'presence.status'(data: { user: Partial<IUser> }): void;
	'watch.messages'(data: { clientAction: ClientAction; message: Partial<IMessage> }): void;
	'watch.roles'(data: { clientAction: ClientAction; role: Partial<IRole> }): void;
	'watch.rooms'(data: { clientAction: ClientAction; room: Pick<IRoom, '_id'> & Partial<IRoom> }): void;
	'watch.subscriptions'(data: { clientAction: ClientAction; subscription: Partial<ISubscription> }): void;
	'watch.userSessions'(data: { clientAction: ClientAction; userSession: Partial<IUserSession> }): void;
	'watch.settings'(data: { clientAction: ClientAction; setting: ISetting }): void;
	'watch.users'(data: { clientAction: ClientAction; data?: undefined | Partial<IUser>; diff?: undefined | Record<string, any>; unset?: undefined | Record<string, number>; id: string }): void;
	'watch.loginServiceConfiguration'(data: { clientAction: ClientAction; data: Partial<ILoginServiceConfiguration>; id: string }): void;
	'watch.instanceStatus'(data: { clientAction: ClientAction; data?: undefined | Partial<IInstanceStatus>; diff?: undefined | Record<string, any>; id: string }): void;
	'watch.integrationHistory'(data: { clientAction: ClientAction; data: Partial<IIntegrationHistory>; diff?: undefined | Record<string, any>; id: string }): void;
	'watch.integrations'(data: { clientAction: ClientAction; data: Partial<IIntegration>; id: string }): void;
	'watch.emailInbox'(data: { clientAction: ClientAction; data: Partial<IEmailInbox>; id: string }): void;


	'livechat-inquiry-queue-observer'(data: { action: string; inquiry: IInquiry }): void;
	'watch.inquiries'(data: { clientAction: ClientAction; inquiry: IInquiry; diff?: undefined | Record<string, any> }): void;
	'watch.livechatDepartmentAgents'(data: { clientAction: ClientAction; data: Partial<ILivechatDepartmentAgents>; diff?: undefined | Record<string, any>; id: string }): void;
	'watch.omnichannelCustomFields'(data: { clientAction: ClientAction; data: Partial<ILivechatCustomField> & { _id: ILivechatCustomField['_id'] }; diff?: undefined | Record<string, any>; id: string }): void;
}
