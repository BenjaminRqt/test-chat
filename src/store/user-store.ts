import {PersistentStore} from './main';
import {USER_NAME} from './store-names';

interface UserInterface {
    id?: string,
    username?: string
}

class UserStore extends PersistentStore<UserInterface> {
    protected data(): UserInterface {
        return {
            id: undefined,
            username: undefined
        };
    }
}

export const userStore = new UserStore(USER_NAME);
