import defineElementProto from '../../_defineElementProto';
import sibling from '../_legacy/_sibling';

defineElementProto('previousElementSibling', {
  get() {
    return sibling(this, 'previousSibling');
  }
});
