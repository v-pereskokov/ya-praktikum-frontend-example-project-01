import Block from '../../modules/block';
import {compile} from '../../utils/templator';
import {template} from './template';

export default class Chats extends Block {
    constructor() {
        super('div', {
            items: [1, 2, 3],
            chat: {
                id: 1,
            },
            className: 'default',
        });
    }

    render() {
        return compile(template, this.props);
    }
}
