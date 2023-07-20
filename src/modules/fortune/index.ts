import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';
import serifs from '@/serifs';
import * as seedrandom from 'seedrandom';
import { genItem } from '@/vocabulary';

export const blessing = [
	'테라길',
	'기가길',
	'메가길',
	'킬로길',
	'헥토길',
	'데카길',
	'데시길',
	'센티길',
	'밀리길',
	'마이크로길',
	'나노길',
	'피코길',
	'초길',
	'대대길',
	'대길',
	'길',
	'중길',
	'소길',
	'흉',
	'대흉',
];

export default class extends Module {
	public readonly name = 'fortune';

	@autobind
	public install() {
		return {
			mentionHook: this.mentionHook
		};
	}

	@autobind
	private async mentionHook(msg: Message) {
		if (msg.includes(['점', '운세', '점괘', '오미쿠지'])) {
			const date = new Date();
			const seed = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}@${msg.userId}`;
			const rng = seedrandom(seed);
			const omikuji = blessing[Math.floor(rng() * blessing.length)];
			const item = genItem(rng);
			msg.reply(`**${omikuji}🎉**\nラッキーアイテム: ${item}`, {
				cw: serifs.fortune.cw(msg.friend.name)
			});
			return true;
		} else {
			return false;
		}
	}
}
