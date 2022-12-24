// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type { User } from '$lib/domain/entity/user';

declare global {
	declare namespace App {
		interface Locals {
			currentUser: User | null;
		}
		interface Session {
			currentUser: User | null;
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}
