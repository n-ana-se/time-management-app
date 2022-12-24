export class User {
	static instance: User;
	private constructor(readonly id: string, readonly displayName: string, readonly email: string) {}
}
