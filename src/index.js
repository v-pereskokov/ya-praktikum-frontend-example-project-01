import Chats from './blocks/chats';
import {render} from './utils/rednerDOM';

const chatsPage = new Chats();
render('.app', chatsPage);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    chatsPage.setProps({
        items: [3, 2, 1],
        chat: {
            id: 3,
        },
        className: 'str',
    });
}, 1000);
