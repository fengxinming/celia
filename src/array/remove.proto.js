import defineArrayProto from '../_internal/_defineArrayProto';
import remove from '../_internal/_array/_remove';

defineArrayProto('remove', function (value) {
  return remove(this, value);
});
