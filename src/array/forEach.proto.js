import defineArrayProto from '../_internal/_defineArrayProto';
import forEach from '../_internal/_array/_forEach';

function cb(iterator, context) {
  forEach(this, iterator, context);
}

defineArrayProto('forEach', cb);
defineArrayProto('each', cb);
