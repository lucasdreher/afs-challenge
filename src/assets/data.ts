import { Transaction } from '@/types/types';

const transfers: Transaction[] = [
	{
		splitFactor: null,
		exDate: null,
		amount: 5000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-07-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		toSecurityHolder: {
			fullName: 'Jeff Dunlap',
			type: 'PERSON'
		},
		transactionIdentifier: '41095fdb-6b52-4257-aef8-dc523d782e53',
		positionWithinDay: 3,
		type: 'ISSUE_STOCK'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 5000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-07-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: '0e26e898-cfd4-442b-a31b-6cee56131015',
		positionWithinDay: 4,
		type: 'INCREASE_AUTHORIZED_CAPITAL'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 200,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-07-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: '5cbad5ca-8ac5-490d-b6ae-b09e4f857f35',
		positionWithinDay: 5,
		type: 'ISSUE_STOCK'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 5000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: 10,
		recordDate: '2021-07-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: '56a6b953-745f-4b99-98c5-ce120a07eecd',
		positionWithinDay: 2,
		type: 'TRANSFER'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 200,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-07-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: 'ec485c74-713c-486d-9ecb-1099d2862074',
		positionWithinDay: 1,
		type: 'INCREASE_AUTHORIZED_CAPITAL'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 1000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-04-09',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: '65dc06f9-ddc7-47e3-9825-40ca5798e56d',
		positionWithinDay: 2,
		type: 'INCREASE_AUTHORIZED_CAPITAL'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 1000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-04-09',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		toSecurityHolder: {
			fullName: 'Jeff Dunlap',
			type: 'PERSON'
		},
		transactionIdentifier: 'a6d3c861-8c50-46a4-91ee-9c3d5946e997',
		positionWithinDay: 2,
		type: 'ISSUE_STOCK'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 50005,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-04-01',
		securityClassId: 'ee494014-bb97-4b81-af35-4142c14fd879',
		securityClass: { name: 'Series A' },
		state: 'MODIFIED',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: 'adcea142-5d06-46d5-9731-7fae2d6e69ff',
		positionWithinDay: 0,
		type: 'INCREASE_AUTHORIZED_CAPITAL'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 5000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-04-01',
		securityClassId: 'ee494014-bb97-4b81-af35-4142c14fd879',
		securityClass: { name: 'Series A' },
		state: 'MODIFIED',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: '0ec5bec8-7980-456a-9b02-e035e678c0d8',
		positionWithinDay: 0,
		type: 'ISSUE_STOCK'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 8000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-03-10',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'PUBLISHED',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '04f0e470-0d36-428a-b6c1-7ae38bc79ffa',
		toSecurityHolder: {
			fullName: 'Daniel Dunlap',
			type: 'PERSON'
		},
		transactionIdentifier: '3711fc2d-0e85-410e-8d84-42f755a5cef5',
		positionWithinDay: 1,
		type: 'ISSUE_STOCK'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 10000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-03-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'MODIFIED',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		toSecurityHolder: {
			fullName: 'Jeff Dunlap',
			type: 'PERSON'
		},
		transactionIdentifier: 'd619fba2-8b87-4f3d-a94c-3ca112c9833d',
		positionWithinDay: 1,
		type: 'ISSUE_STOCK'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 1000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-03-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'MODIFIED',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: '8481edc2-7296-4961-b8f2-4d5735fa6d00',
		positionWithinDay: 1,
		type: 'INCREASE_AUTHORIZED_CAPITAL'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 1000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-03-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'NEW',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		toSecurityHolder: {
			fullName: 'Jeff Dunlap',
			type: 'PERSON'
		},
		transactionIdentifier: '44304915-b37f-44db-8211-c2ce687fd49b',
		positionWithinDay: 2,
		type: 'ISSUE_STOCK'
	},
	{
		splitFactor: null,
		exDate: null,
		amount: 100000,
		companyId: '568fa387-43d1-499a-bba2-25089f5a881a',
		notes: null,
		pricePerShare: null,
		recordDate: '2021-02-01',
		securityClassId: 'ab983cfe-a932-4e25-98ea-f5928a839fe1',
		securityClass: { name: 'Common' },
		state: 'PUBLISHED',
		fromSecurityHolderId: 'dd971e7f-386b-45dd-93e1-666fbeed0a55',
		fromSecurityHolder: 'From Security Holder',
		toSecurityHolderId: '7381967d-be8b-4258-b850-b9e9281e4f7e',
		toSecurityHolder: {
			fullName: 'Bennie Normaal',
			type: 'PERSON'
		},
		transactionIdentifier: 'e6df2d81-5f2d-499f-90b0-3ebd7af7aa01',
		positionWithinDay: 2,
		type: 'INCREASE_AUTHORIZED_CAPITAL'
	}
];

export default transfers;
