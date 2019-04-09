import defineElementProto from '../../_defineElementProto';
import sibling from '../_sibling';

defineElementProto('nextElementSibling', {
  get() {
    return sibling(this, 'nextSibling');
  }
});
