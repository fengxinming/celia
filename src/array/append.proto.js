import defineArrayProto from '../_internal/_defineArrayProto';
import append from '../_internal/_array/_append';

defineArrayProto('append', function (value) {
  return append(this, value);
});
