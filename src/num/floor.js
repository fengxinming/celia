import precise from '../_precise';

export default function round(number, decimals) {
  return precise('floor', number, decimals);
}
