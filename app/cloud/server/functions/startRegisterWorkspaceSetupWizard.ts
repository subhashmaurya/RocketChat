import { HTTP } from 'meteor/http';

import { settings } from '../../../settings/server';
import { buildWorkspaceRegistrationData } from './buildRegistrationData';
import { SystemLogger } from '../../../../server/lib/logger/system';
import { CloudRegistrationIntentData } from '../../../../definition/ICloud';

export async function startRegisterWorkspaceSetupWizard(resend = false, email: string): Promise<CloudRegistrationIntentData> {
	const regInfo = await buildWorkspaceRegistrationData(email);
	const cloudUrl = settings.get('Cloud_Url');

	let result;
	try {
		result = HTTP.post(`${cloudUrl}/api/v2/register/workspace/intent?resent=${resend}`, {
			data: regInfo,
		});
	} catch (e: unknown) {
		// e.response?.data?.error
		const message = e instanceof Error ? e.message : '';
		if (message) {
			SystemLogger.error(`Failed to register with Rocket.Chat Cloud.  ErrorCode: ${message}`);
		} else {
			SystemLogger.error(e);
		}

		throw e;
	}

	// const { data } = result;
	const { data } = result?.data;

	if (!data) {
		throw new Error('Failed to fetch registration intent endpoint');
	}

	return data;
}
