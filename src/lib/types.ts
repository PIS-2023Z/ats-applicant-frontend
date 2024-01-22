import type { JobStatus } from '$lib';

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
