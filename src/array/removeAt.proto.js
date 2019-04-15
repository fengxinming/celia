import defineArrayProto from '../_internal/_defineArrayProto';
import removeAt from '../_internal/_array/_removeAt';

defineArrayProto('removeAt', function (value) {
  return removeAt(this, value);
});
