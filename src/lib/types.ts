import type { AccountRole, JobStatus } from '$lib';

export type ApiOffer = {
	id: number;
	name: string;
	publishedAt: Date;
	expiresAt: Date;
	status: JobStatus;
	monthlySalary: number | null;
	description: string | null;
};

export type ApiOfferResponse = Array<ApiOffer>;
export type AccountData = {
	id: number;
	email: string;
	password: string;
	phone: string;
	locked: boolean;
	enabled: boolean;
	accountRole: AccountRole;
	// These fields are only used on the backend side.
	// username: string,
	// authorities: null,
	// accountNonExpired: boolean,
	// accountNonLocked: boolean,
	// credentialsNonExpired: boolean,
};
