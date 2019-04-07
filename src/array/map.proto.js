import defineArrayProto from '../_internal/_defineArrayProto';
import each from '../_internal/_array/_forEach';
import map from '../_internal/_map';

defineArrayProto('map', function (iterator, context) {
  return map(each, this, iterator, context);
});
