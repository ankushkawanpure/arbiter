import {Ticker} from 'arbiter-model';

export default class SnapshotHandler {
	constructor(event) {
		this.event = event;
		
		this.channelMap = {}
	}

	register({
		channel,
		chanId,
		pair
	}) {
		this.channelMap[chanId] = {
			channel,
			pair
		};
	}

	ticker(pair, [bid, bidSize, ask, askSize, dailyChange, dailyChangePerc, last, volume, high, low]) {
		this.event['ticker'](new Ticker({
			symbol: pair,
			bid,
			ask,
			last,
			low,
			high,
			volume
		}))
	}

	evaluate([chanId, data]) {
		if (typeof data === 'string' || data.length < 2) {
			return false;
		}

		const {
			channel,
			pair
		} = this.channelMap[chanId];

		if (!this[channel]) {
			return false;
		}

		this[channel](pair, data);

		return true;
	}
}
