import round from '../num/round';

const MBPS = 8 * 1024 * 1024;

export default function mbpsConvert(bytes, decimals) {
  return round(+bytes / MBPS, decimals || 2);
}

mbpsConvert.MBPS = MBPS;
