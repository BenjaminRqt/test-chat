import {PersistentStore} from './main';
import {USER_NAME} from './store-names';
import {register, login} from '../api/user.api'

interface UserInterface {
    id?: string,
    username?: string
    token?: string
}

class UserStore extends PersistentStore<UserInterface> {
    protected data(): UserInterface {
        return {
            id: undefined,
            username: undefined
        };
    }

    signUp(username: string, password: string) {
        register(username, password).then(response => {
            console.log(response)
            login(username, password).then(response => {
                if(response) {
                    this.state.token = response.data.token
                    this.state.id = response.data.userId
                }
            })
        });
    }
}

export const userStore = new UserStore(USER_NAME);
