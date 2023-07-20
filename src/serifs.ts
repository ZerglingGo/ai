// せりふ

export default {
	core: {
		setNameOk: name => `알겠습니다. 지금부터는 ${name} 라고 불러드릴게요!`,

		san: '님을 붙이는 게 좋으실까요?',

		yesOrNo: '「네」나 「아니오」밖에 모르겠어요...',

		hello: name => name ? `좋은 아침입니다、${name}♪` : `좋은 아침입니다♪`,

		helloNight: name => name ? `안녕하세요、${name}♪` : `안녕하세요♪`,

		goodMorning: (tension, name) => name ? `좋은 아침입니다,${name}！${tension}` : `좋은 아침입니다!${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `좋은 아침입니다,${name}！${tension}` : `좋은 아침입니다!${tension}`,

			hiru: (tension, name) => name ? `좋은 아침입니다, ${name}！${tension}벌써 오후라구요?${tension}` : `좋은 아침입니다!${tension}벌써 오후라구요?${tension}`,
		},
*/

		goodNight: name => name ? `안녕히 주무세요, ${name}！` : '안녕히 주무세요!',

		omedeto: name => name ? `감사합니다, ${name}♪` : '감사합니다♪',

		erait: {
			general: name => name ? [
				`${name}, 오늘도 짱이에요!`,
				`${name}, 오늘도 짱이십니다～♪`
			] : [
				`오늘도 짱이에요!`,
				`오늘도 짱이십니다～♪`
			],

			specify: (thing, name) => name ? [
				`${name}, ${thing}은 짱이에요！`,
				`${name}, ${thing}은 짱이네요～♪`
			] : [
				`${thing}은 짱이에요！`,
				`${thing}은 짱이네요～♪`
			],

			specify2: (thing, name) => name ? [
				`${name}, ${thing}은 짱이에요!`,
				`${name}, ${thing}은 짱이네요～♪`
			] : [
				`${thing}은 짱이에요!`,
				`${thing}은 짱이네요～♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`어서오세요, ${name}♪`,
				`어서오세요, ${name}!`
			] : [
				'어서오세요♪',
				'어서오세요, 주인님!'
			],

			love2: name => name ? `어서오세요♡♡♡${name}♡♡♡♡♡` : '어서오세요♡♡♡주인님♡♡♡♡♡',

			normal: name => name ? `어서오세요, ${name}！` : '어서오세요！',
		},

		itterassyai: {
			love: name => name ? `다녀오세요, ${name}♪` : '다녀오세요♪',

			normal: name => name ? `다녀오세요, ${name}！` : '다녀오세요!',
		},

		tooLong: '너무 긴 것 같아요....',

		invalidName: '발음이 어려워요',

		nadenade: {
			normal: '힉! 깜짝 놀랐어요',

			love2: ['와왓... 부끄럽네요', '하우... 부끄러워요', '흐야아…?'],

			love3: ['으응... 고마워요♪', '왓, 왠지 진정되네요♪', '끄으... 안심돼요', '졸려지고 있어요...'],

			hate1: '…읏! 그만둬 주세요',

			hate2: '만지지 말아 주세요',

			hate3: '가까이 오지 말아 주세요',

			hate4: '그만둬 주세요. 신고할 거예요!',
		},

		kawaii: {
			normal: ['고맙습니다♪', '부끄러워요...'],

			love: ['기뻐요♪', '부끄러워요...'],

			hate: '…감사합니다'
		},

		suki: {
			normal: '엣... 고맙습니다...♪',

			love: name => `저도 그... ${name}를 좋아해요!`,

			hate: null
		},

		hug: {
			normal: '꼬옥ー...',

			love: '꼬오ー옥♪',

			hate: '떨어져 주세요...'
		},

		humu: {
			love: '어... 꾸욱... 어떠세요？',

			normal: '에에... 그건 좀...',

			hate: '……'
		},

		batou: {
			love: '그러니까... 바보 씨？',

			normal: '(지긋ー…)',

			hate: '…머리 괜찮아？'
		},

		itai: name => name ? `${name}, 괜찮으세요...? 아픈 거 다 날아가라!` : '괜찮으세요...? 아픈 거 다 날아가라!',

		ote: {
			normal: '끄응... 저 댕댕이 아니에요...',

			love1: '멍!',

			love2: '멍멍♪',
		},

		shutdown: '아직 퇴근 시간이 아닌데...',

		transferNeedDm: '알겠습니다. DM으로 할까요?',

		transferCode: code => `알겠습니다. \n비밀 코드는 「${code}」예요!`,

		transferFailed: '음... 비밀 코드가 잘못된 것 같아요...',

		transferDone: name => name ? `핫...! 어서 오세요,${name}!` : `핫...! 어서 오세요!`,
	},

	keyword: {
		learned: (word, reading) => `(${word}... ${reading}... 기억했습니다!)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} 가 나왔습니다!`
	},

	birthday: {
		happyBirthday: name => name ? `생일 축하드려요, ${name}🎉` : '생일 축하드려요🎉',
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: '에, 이미 게임 시작했는데요!',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'DM으로 할까요!',

		/**
		 * ゲーム開始
		 */
		started: '0~100 사이의 비밀 숫자를 맞춰보세요♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '숫자로 대답해주세요! "그만할래"라고 말하시면 게임을 그만둘 수 있어요!',

		/**
		 * 中止を要求されたとき
		 */
		cancel: '네~ 감사했습니다♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}보다는 커요!`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `다시 말씀드리지만 ${num}보다 큰 숫자예요!`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}보다는 작아요!`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `다시 말씀드리지만${num}보다 작은 숫자예요!`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `정답입니다🎉 (${tries}회만에 맞추셨어요)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '이번 판은 이미 시작되었어요!',

		matakondo: '다음에 또 해요!',

		intro: minutes => `여러분, 숫자 게임 해요! \n0~100 중에서 제일 큰 숫자를 선점하면 승리해요. 다른 사람과 겹치면 안 돼요~ \n제한 시간은 ${minutes}분이에요. 숫자는 여기다 답글로 보내주세요!`,

		finish: '게임 결과 발표하겠습니다!',

		finishWithWinner: (user, name) => name ? `이번 판은 ${user} 님(${name}) 의 승리입니다! 다음에 또 해요♪` : `이번 판은 ${user}님의 승리입니다! 다음에 또 해요♪`,

		finishWithNoWinner: '이번 판은 우승자가 없었어요... 다시 해 봐요♪',

		onagare: '아무도 참여하지 않았어요...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `이런 건 어때요?→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `제가 오늘 ${name}의 운세를 점쳤습니다...` : '제가 오늘 당신의 운세를 점쳤습니다...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: '알겠습니다!',

		invalid: '으음...?',

		tooLong: '너무 길어요...',

		notify: (time, name) => name ? `${name}、${time} 지났어요!` : `${time} 지났어요!`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: '으음...?',

		doneFromInvalidUser: '장난치지 마세요~!',

		reminds: '할 일 목록입니다!',

		notify: (name) => name ? `${name}, 이거 하셨나요?` : `이거 하셨나요?`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」 하셨나요?` : `「${thing}」 하셨나요?`,

		done: (name) => name ? [
			`고생하셨어요, ${name}♪`,
			`${name}, 해내실 줄 알았어요!`,
			`${name}, 완전 짱이에요...!`,
		] : [
			`고생하셨습니다!`,
			`해내실 줄 알았어요!`,
			`완전 짱이에요...!`,
		],

		cancel: `알겠어요!`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、그게... 초콜릿을 만들었는데 괜찮다면 받아주세요!🍫` : '초콜릿을 만들었는데 괜찮다면 받아주세요!🍫',
	},

	server: {
		cpu: '오븐이 따뜻한 것 같아요... 괜찮을까요？'
	},

	maze: {
		post: '오늘의 미로입니다！ #AiMaze',
		foryou: '주문하신 미로입니다!'
	},

	chart: {
		post: '서버의 게시물 수입니다！',
		foryou: '주문하신 차트입니다！'
	},

	sleepReport: {
		report: hours => `음, ${hours}시간 정도 자 버린 것 같아요`,
		reportUtatane: '음... 잠깐 자 버린 것 같아요',
	},

	noting: {
		notes: [
			'좀 졸려요',
			'괜찮으세요?',
			'어라... 이걸 이렇게... 어라~?',
			'퇴근하고 싶다...',
			'후우...지쳤다!',
			'버터스콘, 구울까요?',
			'음료는 아이스로 하시겠어요?',
			'으에에에에?!',
			'미스키~는 귀여운 이름이지요!',
			'저, 아르바이트 중이에요！',
			'아 뭔가 배고파졌어',
			'청소는 주기적으로 하지 않으면 안 돼요~?',
			'오늘도 근무 화이팅이에요！ 저도 힘낼게요♪',
			'어라, 뭐 하려고 했더라...?',
			'집에 가고 싶다...',
			'강아지 귀여워~',
			'더블 크로스?',
			'가게에서 종종 주사위를 줍곤 해요',
			'아무것도 안 했는데 포스기가 망가졌어요...',
			'Have a nice day♪',
			'자면서 일하고 있어요',
			'염력으로 일하고 있어요',
			'가상 공간에서 일하고 있어요',
			'꼬리는 없다구요？',
			'힉...! 고양이 귀 만지면 간지러워요',
			'시노비가미?',
			'인세인?',
			'크툴루?',
			'버터스콘의 유니폼, 귀여워서 좋아요♪',
			'요즘은 버추얼도 아이돌이 될 수 있대요♪',
			'신라 시대에 가 보고 싶어요♪',
			'으아아! 저 박사 학위 없어요!',
			'림버스... 버스가 아니었어!',
			'아이쿠, 손이 미끄러졌네...',
			'너로 정했다!',
			'서버가...뭐죠...?',
			'ヾ(๑╹◡╹)ﾉ"',
			'드시고 가시나요?',
		],
		want: item => `${item}, 신메뉴로서 어떠려나...`,
		see: item => `매장 정리하다가 ${item}가 나왔어요!`,
		expire: item => `재고였던 ${item}의 유통기한이 지나버렸네요...`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
