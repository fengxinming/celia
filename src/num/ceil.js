import precise from '../_precise';

export default function round(number, decimals) {
  return precise('ceil', number, decimals);
}
