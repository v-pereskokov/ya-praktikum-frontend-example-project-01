import Chats from './blocks/chats';
import UserProfile from './blocks/user-profile';
import {Router} from './modules/router';

const router = new Router('.app');

// Можно обновиться на /user и получить сразу пользователя
router
    .use('/', Chats)
    .use('/user', UserProfile)
    .start();

// Через секунду контент изменится сам, достаточно дернуть переход
setTimeout(() => {
    router.go('/');
}, 1000);

// А можно и назад
setTimeout(() => {
    router.back();
}, 3000);

// И снова вперед
setTimeout(() => {
    router.forward();
}, 5000);
